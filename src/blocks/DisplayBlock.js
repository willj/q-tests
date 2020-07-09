import React from 'react';
import TextBlock from '../blocks/TextBlock';
import QuestionBlock from '../blocks/QuestionBlock';
import VideoBlock from '../blocks/VideoBlock';

// we might want to use React.memo on this https://reactjs.org/docs/react-api.html#reactmemo
// because when you update any state on a single block, *ALL* blocks re-render (on every keystroke!)
// This could prevent those re-renders, so only the updated one renders
// Perhaps timestamp or version each update in the block object - then use that as the equality check in memo()

function DisplayBlock({block, index, onChange}){

    function updateBlock(blockData){
        onChange(blockData, index);
    }

    switch (block.type){
        case 'text':
            return <TextBlock block={block} onChange={updateBlock} />;
        case 'video':
            return <VideoBlock block={block} />;
        case 'question':
            return <QuestionBlock block={block} onChange={updateBlock} />;
        default:
            return <></>;
    }
}

export default DisplayBlock;