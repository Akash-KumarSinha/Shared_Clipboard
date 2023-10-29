import React, { useState } from "react";
import './WriteInTextarea.css'

const WriteInTextarea = () =>{

    const [message, setMessage] = useState('')
    const [pin, setPin] = useState('')

    const onMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const onWrite = () => {
        fetch('http://localhost:3000/write',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                message: message
            })
        }).then(response => response.json())
        .then(data =>{
                console.log(data.sendMessage)
                const pin = data.pin;
                setPin(pin) 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="writetextarea flex">

            <div className="writebox">

                <p>Write the Message and share it to online clipboard</p>

                <div className="writebox innerbox">

                    <textarea 
                    onChange={onMessageChange}
                    className="commentwrite" 
                    name="writemessage" 
                    id="writetextcomment" 
                    placeholder="Write the Message here..."></textarea>
                    
                    <div>
                        <input onClick={onWrite} className="button" type="submit" value="Share the Message"/>

                    </div>

                    <div>
                        <p>Id to retrive the Message:  <span className="pin">{pin}</span> </p>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default WriteInTextarea;