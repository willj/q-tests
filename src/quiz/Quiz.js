import React, {useState, useEffect} from 'react';

function Quiz({quizData}){
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        let pagedBlocks = quizData.reduce((accum, block) => {

            if (!Array.isArray(accum[accum.length - 1])){
                accum[accum.length - 1] = [block];
            } else if (block.type === 'pageBreak') {
                accum[accum.length] = [];
            } else {
                accum[accum.length - 1].push(block);
            }

            return accum;

        }, [[]]);

        setPages(pagedBlocks);
    }, [quizData]);

    function nextPage(){
        if (currentPage === pages.length - 1){
            return;
        }
        setCurrentPage(currentPage + 1);
    }

    if (pages.length === 0) return <p>Loading...</p>;

    return(
        <>
           {pages[currentPage].map((block, index) => <p key={index}>{block.title}</p>)}

           <button onClick={nextPage}>Next</button>
        </>
    );

}

export default Quiz;