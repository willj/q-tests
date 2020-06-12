import React from 'react';

function Dragable({index, children, onDropped}){
    function startDrag(e){
        e.dataTransfer.setData("application/json", JSON.stringify({ action: 'move', index: index }));
    }

    function dragEnter(e){
        e.preventDefault();
    }

    function dragOver(e){
        e.preventDefault();
    }

    function dragLeave(e){
        // console.log('dragLeave');
    }

    function dragEnd(e){
        // console.log('dragEnd');
    }

    function onDrop(e){
        e.stopPropagation();
        onDropped(e, index);
    }

    return (
        <div draggable="true" 
            style={{border: '1px solid #333333', marginBottom: '10px'}}
            onDragStart={startDrag}
            onDragEnter={dragEnter} 
            onDragOver={dragOver} 
            onDragLeave={dragLeave}
            onDragEnd={dragEnd} 
            onDrop={onDrop}>
            {children}
        </div>
    );
}

export default Dragable;