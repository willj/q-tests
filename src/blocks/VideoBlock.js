import React from 'react';

function VideoBlock({block, onChange}){

    function updateBlock(e){
        onChange({...block, videoUrl: e.target.value});
    }

    return (
        <div>
            <h2>Video Block</h2>
            <label htmlFor="youtube-id">YouTube ID</label>
            <input type="text" value={block.videoUrl} onChange={updateBlock} id="youtube-id" />
        </div>
    );
}

export default VideoBlock;