import React from 'react';

function TextBlock({block, onChange}){

    function updateBlock(e){
        let updatedBlock = {...block, text: e.target.value};
        onChange(updatedBlock);
    }

    return (
        <div>
            <p>Text Block</p>
            <textarea value={block.text} onChange={updateBlock}></textarea>
        </div>
    );
}

export default TextBlock;