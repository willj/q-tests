import React from 'react';
import TextBlock from '../blocks/TextBlock';
import QuestionBlock from '../blocks/QuestionBlock';
import VideoBlock from '../blocks/VideoBlock';

function DisplayBlock({block}){
    switch (block.type){
        case 'text':
            return <TextBlock block={block} />;
        case 'video':
            return <VideoBlock block={block} />;
        case 'question':
            return <QuestionBlock block={block} />;
        default:
            return <></>;
    }
}

export default DisplayBlock;