import React , {useState} from 'react'


export default function TextForm(props) {
    const [text , setText] = useState("");

    const handleUpClick = () =>{
        console.log("button clicked");
        setText(text.toUpperCase());
    }

    const handleLoClick = () =>{
        console.log("button clicked");
        setText(text.toLowerCase());
    }

    const handleClearClick = () =>{
        console.log("button clicked");
        let newText = "";
        setText(newText);
    }
    const handleCopyText = () =>{
        navigator.clipboard.writeText(text);
    }

    const handleOnChange = (event) => {
        console.log("there is a change");
        setText(event.target.value);
    }


    return (
        <>
            <div className="container">
                <h1 align="center">{props.heading}</h1>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn-primary mx-2" onClick={handleCopyText}>Copy to clipboard</button>
            </div>
            <div className="container my-5">
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h4>{text}</h4>
            </div>
        </>
    )
}
