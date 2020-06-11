import React, {useState} from 'react';

function TextBlock({block}){
    const [blockData, setBlockData] = useState(block);

    return (
        <div>
            <p>Text Block</p>
            <p>{blockData.text}</p>
        </div>
    )
}

export default TextBlock;