import { validateLength } from '../helpers/validate';
import React from 'react'

interface NotConnectedType {
    username: string;
    setUsername: () => void;
    connect: () => void;
}

const NotConnected: React.FC<NotConnectedType> = ( {username, setUsername, connect} ) => {

    const checkUsername = () => {
        if(validateLength(username)) {
            connect()
        }else {
            alert('Введите своё имя')
        }
    }

    return (
        <div className="modal">
            <div className="modal_text">
                You're not entered
            </div>
            <div className="form text_enter">
                <input 
                    type="text" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter your name"    
                />
                <button onClick={checkUsername}>Enter</button>
            </div>
        </div>
    )
}

export default NotConnected