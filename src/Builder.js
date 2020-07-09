import React, {useState} from 'react';
import './Builder.css';
import DisplayBlock from './blocks/DisplayBlock';
import {createBlock} from './blocks/Blocks';
import Dragable from './blocks/Dragable';

function Builder(){
    const [blocks, setBlocks] = useState([]);

    function moveOrCreateBlock(e, droppedOn = -1){
        let blockData = JSON.parse(e.dataTransfer.getData("application/json"));
        
        if (!blockData || ! blockData.action){
            return;
        }

        droppedOn = (droppedOn > -1) ? droppedOn : blocks.length;

        let thisBlock;

        if (blockData.action === 'create'){
            thisBlock = createBlock(blockData.type);
        } else if (blockData.action === 'move'){
            thisBlock = blocks.splice(blockData.index, 1)[0];
        }

        let blocksCopy = [...blocks];
        blocksCopy.splice(droppedOn, 0, thisBlock);

        setBlocks(blocksCopy);
    }

    function updateBlockData(block, index){
        let blocksCopy = [...blocks];
        blocksCopy[index] = block;
        setBlocks(blocksCopy);
    }

    function onDragOver(e){
        e.preventDefault();
    }

    return (
        <div className="builder">
            <h2>Builder</h2>
            <div onDrop={moveOrCreateBlock} onDragOver={onDragOver} className="dropzone">
                {blocks.map((block, index) => 
                    <Dragable index={index} key={index} onDropped={moveOrCreateBlock}>
                        <DisplayBlock block={block} index={index} onChange={updateBlockData} />
                    </Dragable>)}
            </div>
        </div>
    );
}

export default Builder;