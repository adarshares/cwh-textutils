import React , {useState} from 'react'

const [text , setCount] = useState(0);

export default function TextForm(props) {
    return (
        <div>
            <h1 align="center">{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn-primary">Convert to Uppercase</button>
        </div>
    )
}
