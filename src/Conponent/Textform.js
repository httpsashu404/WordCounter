import React, { useState } from 'react'

function Textform(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })

        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.8)'
            })
        }
    }
    // change reverse of text
    const handlereverse = () => {
        let rev = text.split('').reverse().join('')
        setText(rev)
    }

    // change text in uppercase
    const handleupper = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    // clear all text
    const handleclear = () => {
        setText('')
    }

    // change text in lowercase
    const handlelower = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    // for change in input box
    const handleonchange = (e) => {
        setText(e.target.value)
    }

    // It's useState
    const [text, setText] = useState('')
    return (
        <>
            <div className='container border shadow px-3 py-2 rounded mt-2' style={myStyle}>
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'><u>Word counter</u></h2>
                        <label htmlFor="text" className="form-label"><b>{props.heading}</b></label>
                        <textarea id='text' value={text} onChange={handleonchange} className="form-control" rows={4} required placeholder='Enter your text here.' autoFocus /><br />
                        <button onClick={handleupper} className="btn btn-primary m-1">Uppercase</button>
                        <button onClick={handlelower} className="btn btn-success m-1">Lowercase</button>
                        <button onClick={handlereverse} className="btn btn-warning m-1">Reverse</button>
                        <button onClick={handleclear} className="btn btn-danger m-1">Clear</button>
                    </div>
                </div><hr />
                <p><b>{(text.split(' ').length - 1)}</b> words, <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(' ').length}</b> Minutes read</p>
                <hr />
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={toggleStyle} type="checkbox" id="switch" />
                    <label className="form-check-label" htmlFor="switch"><b>Darkmode</b></label>
                </div>
                <p className="text-center mt-5">Make with &hearts; httpsashu@404.</p>
            </div>
        </>
    )
}
export default Textform;