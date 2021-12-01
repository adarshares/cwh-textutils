import React , {useState} from 'react'


export default function TextForm(props) {
    const [text , setText] = useState("");

    const handleUpClick = () =>{
        console.log("button clicked");
        setText(text.toUpperCase());
        props.showAlert("Text converted to upper case","success");
    }

    const handleLoClick = () =>{
        console.log("button clicked");
        setText(text.toLowerCase());
        props.showAlert("Text converted to lower case","success");
    }

    const handleClearClick = () =>{
        console.log("button clicked");
        let newText = "";
        setText(newText);
    }
    const handleCopyText = () =>{
        if(navigator.clipboard !== undefined){
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to clipboard","success");
        }
        else if(Window.clipboardData){
            Window.clipboardData.setData("Text",text);
            props.showAlert("Copied to clipboard","success");
        }
        else{
            console.log("not able to copy");
        }
    }

    const handleOnChange = (event) => {
        console.log("there is a change");
        setText(event.target.value);
    }


    return (
        <>
            <div className="container" style={{backgroundColor:props.mode === 'dark'?'#333942':'white',color:props.mode === 'dark'?'white':'#333942'}}>
                <h1 align="center">{props.heading}</h1>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode === 'dark'?'#333942':'white',color:props.mode === 'dark'?'white':'#333942'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn-primary mx-2 my-2" onClick={handleCopyText}>Copy to clipboard</button>
            </div>
            <div className="container my-5" style={{backgroundColor:props.mode === 'dark'?'#333942':'white',color:props.mode === 'dark'?'white':'#333942'}}>
                <h2>your text summary</h2>
                <p>{text.replace( /\n/g, " " ).split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008*text.replace( /\n/g, " " ).split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h4>{text.length>0?text:"Enter your text to preview it here"}</h4>
            </div>
        </>
    )
}
