import React from "react";
import memesData from "../memesData";

function Meme() {

    const [meme, setMeme] = React.useState({
        "topText" : "", 
        "bottomText" : "", 
        "randomImage" : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
        
    }
    return(
        <main>
            <div className="form">
                <input placeholder="Top text" type="text" className="form-input"></input>
                <input placeholder="Bottom text" type="text" className="form-input"></input>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme-image" alt=""/>
        </main>
    )
}

export default Meme