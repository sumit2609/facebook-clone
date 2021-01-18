import React from 'react';
import './StoryReel.css';
import Story from './Story.js';

// import Background1 from "./assets/background1.jpg";
// import Background2 from "./assets/background2.jpg";
// import Background3 from "./assets/background3.jpg";

import Profilephoto from './assets/profilephoto.jpg';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
                profileSrc={Profilephoto}
                title="Sumit Sharma"
            />
            <Story 
                image="https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
                profileSrc={Profilephoto}
                title="Pandit G"
            />
            <Story 
                image="https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SX450_.jpg"
                profileSrc={Profilephoto}
                title="Sharma's"
            />
            <Story 
                image="https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SX450_.jpg"
                profileSrc={Profilephoto}
                title="Sumit Sharma"
            />
            <Story 
                image="https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SX450_.jpg"
                profileSrc={Profilephoto}
                title="Sumit Sharma"
            />
        </div>
    );
}

export default StoryReel;
