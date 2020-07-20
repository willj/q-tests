import React, {useState} from 'react';
import Quiz from './Quiz';

function InitQuiz(){
    const [quiz, setQuiz] = useState([]);
    
    function updateQuiz(e){
        setQuiz(JSON.parse(e.target.value));
    }

    return(
        <>
            <textarea value={JSON.stringify(quiz)} style={{width: '700px', height: '100px', marginTop: '30px'}} onChange={updateQuiz} /> 
            <hr />
            <Quiz quizData={quiz} />
        </>
    );

}

export default InitQuiz;