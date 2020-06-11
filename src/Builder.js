import React, {useState} from 'react';
import './Builder.css';
import DisplayBlock from './blocks/DisplayBlock';
import {createBlock} from './blocks/CreateBlocks';
import Dragable from './blocks/Dragable';

function Builder(){
    const [blocks, setBlocks] = useState([]);

    function onDrop(e, droppedOn = -1){
        let blockData = JSON.parse(e.dataTransfer.getData("application/json"));
        
        if (!blockData || ! blockData.action){
            return;
        }

        if (blockData.action === 'create'){
            let newBlock = createBlock(blockData.type);

            setBlocks([...blocks, newBlock]);
        }

        if (blockData.action === 'move'){
            droppedOn = (droppedOn > -1) ? droppedOn : blocks.length - 1;
            let currentBlock = blocks.splice(blockData.index, 1);

            let blocksCopy = [...blocks];
            blocksCopy.splice(droppedOn, 0, currentBlock[0]);

            setBlocks(blocksCopy);
        }
    }

    function onDragOver(e){
        e.preventDefault();
    }

    return (
        <div className="builder">
            <h2>Builder</h2>
            <div onDrop={onDrop} onDragOver={onDragOver} className="dropzone">
                {blocks.map((b, index) => 
                    <Dragable index={index} key={index} onDropped={onDrop}>
                        <DisplayBlock block={b} />
                    </Dragable>)}
            </div>
        </div>
    );
}

export default Builder;