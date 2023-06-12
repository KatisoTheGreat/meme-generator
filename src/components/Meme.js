import React from "react";

function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // memesArray[randomNumber].url  <-- this line is incomplete!
        
    }
    return(
        <main>
            <div className="form">
                <input placeholder="Top text" type="text" className="form-input"></input>
                <input placeholder="Top text" type="text" className="form-input"></input>
                <button className="form-button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

export default Meme