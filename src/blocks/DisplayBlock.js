import React from 'react';
import TextBlock from '../blocks/TextBlock';
import QuestionBlock from '../blocks/QuestionBlock';
import VideoBlock from '../blocks/VideoBlock';

function DisplayBlock({block}){
    switch (block.type){
        case 'textBlock':
            return <TextBlock block={block} />;
        case 'videoBlock':
            return <VideoBlock block={block} />;
        case 'questionBlock':
            return <QuestionBlock block={block} />;
        default:
            return <></>;
    }
}

export default DisplayBlock;