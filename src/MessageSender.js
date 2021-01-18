import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessegeSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from "./StateProvider";
import firebase from 'firebase';
import db from "./firebase";


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profilepic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        //some clever db stuff
        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messegeSender">
            <div className="messegeSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messegeSender__input" 
                    placeholder={`What's on your mind, ${user.displayName}?`}
                    />     
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)" 
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div> 

            <div className="messegeSender__bottom">
                <div className="messegeSender__option">
                    <VideocamIcon style = {{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                
                <div className="messegeSender__option">
                    <PhotoLibraryIcon style = {{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messegeSender__option">
                    <InsertEmoticonIcon style = {{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
