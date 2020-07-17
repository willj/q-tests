const BLOCKS = [
    { type: 'text', title: 'Text Block', text: '' },
    { type: 'video', title: 'Video', videoUrl: '' },
    { type: 'question', title: 'Question', question: 'Question Text?', answers: [{answerText: "A", isCorrect: false}] },
    { type: 'pageBreak', title: 'Page Break' }
];

function createBlock(blockType){
    let template = BLOCKS.find((block) => block.type === blockType);

    return template ? { ...template } : null;
}

function listBlocks(){
    return BLOCKS.map((block) => {
        return { type: block.type, title: block.title };
    });
}

export {createBlock, listBlocks, BLOCKS};