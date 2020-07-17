import React from 'react';

function TextBlock({block, onChange}){

    function updateBlock(e){
        onChange({...block, text: e.target.value});
    }

    return (
        <div>
            <h2>Text Block</h2>
            <textarea value={block.text} onChange={updateBlock}></textarea>
        </div>
    );
}

export default TextBlock;