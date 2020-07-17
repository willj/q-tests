import React from 'react';

function QuestionBlock({block, onChange}){

    function updateQuestion(e){
        onChange({...block, question: e.target.value});
    }

    function updateAnswerText(e, index){
        let blockCopy = {...block};
        blockCopy.answers[index].answerText = e.target.value;
        onChange(blockCopy);
    }

    function updateCorrectAnswer(e, index){
        let blockCopy = {...block};

        for(let i = 0; i < blockCopy.answers.length; i++){
            if (i === index) {
                blockCopy.answers[i].isCorrect = true;
            } else {
                blockCopy.answers[i].isCorrect = false;
            }
        }

        onChange(blockCopy);
    }

    function addAnswer(e){
        e.preventDefault();
        let blockCopy = {...block};
        blockCopy.answers.push({answerText: '', isCorrect: false});
        onChange(blockCopy);
    }

    return (
        <div>
            <h2>Question Block</h2>
            <label htmlFor="question">Question</label>
            <input type="text" id="question" value={block.question} onChange={updateQuestion} />

            <label>Answers</label>
            {block.answers.map((a, index) => {
                return (
                    <div key={index}>
                        <input type="text" value={a.answerText} onChange={(e) => updateAnswerText(e, index)} />

                        <label>
                            <input type="checkbox" value={true} checked={a.isCorrect} onChange={(e) => updateCorrectAnswer(e, index)} />
                            Is Correct
                        </label>
                    </div>
                );
            })}
            <button onClick={addAnswer}>Add Answer</button>
        </div>
    );
}

export default QuestionBlock;