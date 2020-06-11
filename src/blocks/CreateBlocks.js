function createBlock(blockType){

    if (blockType === 'textBlock') {
        return {type: 'textBlock', text: "I'm a text block!"};
    }

    if (blockType === 'videoBlock') {
        return {type: 'videoBlock', videoUrl: ''};
    }

    if (blockType === 'questionBlock') {
        return {type: 'questionBlock', text: "I'm a question block!", answers: []};
    }
}

export {createBlock};