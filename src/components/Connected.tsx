import { validateLength } from '../helpers/validate';
import React from 'react';

interface ConnectedType {
    value: string;
    setValue: () => void;
    sendMessage: () => void;
    messages: [];
}

const Connected: React.FC<ConnectedType> = ({ value, setValue, sendMessage, messages, close}) => {
    const checkLength = () => {
        if(validateLength(value)) {
            sendMessage()
        }else {
            alert('Введите сообщение!')
        }
    }
    return (
                <div className="modal">
                <div className="modal_text">
                    {messages.map(mess =>
                        <div key={mess.id} className="messages">
                            {mess.event === 'connection'
                                ? <div className="connection_message">
                                    User <span className="highlight">{mess.username}</span> connected
                                  </div>
                                : mess.event === 'close' 
                                ? <div>
                                    <span className="highlight">{mess.username}</span> leave
                                  </div>
                                : <div className="message">
                                    <span className="highlight">{mess.username}:</span> {mess.message}
                                  </div>
                            }
                        </div>
                    )}
                                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button onClick={checkLength}>Отправить</button>
                    <button onClick={close}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Connected