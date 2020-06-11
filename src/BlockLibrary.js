import React from 'react';
import './BlockLibrary.css';

const blocks = [
    {action: 'create', type: 'textBlock', title: 'Text Block'},
    {action: 'create', type: 'videoBlock', title: 'Video'},
    {action: 'create', type: 'questionBlock', title: 'Question'}
];

function BlockLibrary(){
    return (
        <div className="block-library">
            <h2>Block Library</h2>

            {blocks.map((block, index) => 
                <LibraryBlock block={block} key={index} />)}
        </div>
    );
}

function LibraryBlock({block}){

    function startDrag(e){
        e.dataTransfer.setData("application/json", JSON.stringify(block));
    }

    return (
        <div className="library-block" draggable="true" onDragStart={startDrag}>
            <p>{block.title}</p>
        </div>
    );
}


export default BlockLibrary;