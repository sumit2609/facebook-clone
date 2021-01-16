import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({ image, profilesrc, title}) {
    return (
        <div className="story">
            <Avatar src={profilesrc} />
            <h4>{title}</h4>
        </div>
    );
}

export default Story;
