import React from "react";
import memesData from "../memesData";

function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return(
        <main>
            <div className="form">
                <input placeholder="Top text" type="text" className="form-input"></input>
                <input placeholder="Top text" type="text" className="form-input"></input>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme-image" alt=""/>
        </main>
    )
}

export default Meme