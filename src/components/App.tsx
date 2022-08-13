import React,{ useState, useRef } from 'react';
import NotConnected from './NotConnected';
import Connected from './Connected';




export const App = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [username, setUsername] = useState('')


    function connect() {
        socket.current = new WebSocket('ws://localhost:5000')

        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                username,
                id: Date.now()
            }
            socket.current.send(JSON.stringify(message))
            
        }

        socket.current.onmessage = (event) => {
            console.log('event',event)
            const message = JSON.parse(event.data)
            setMessages(prev => [...prev,message])
        }

        socket.current.onclose = (event) => {
            console.log('SOcket closed')
        }

        socket.current.onerror = () => {
            console.log('Socket has Error')
        }
    }

    const close = async() => {
        const message = {
            event: 'close',
            username,
            id: Date.now(),
            message: 'close'
        }
        socket.current.send(JSON.stringify(message))
        setValue('')
        setConnected(false)
        socket.current.close(1000,'The work is ended')
    }

    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message'
        }

        socket.current.send(JSON.stringify(message))
        setValue('')
    }

    if (!connected) {
        return <NotConnected 
            username={username}
            setUsername={setUsername}
            connect={connect}
        />
    }

    return <Connected 
        value={value}
        setValue={setValue}
        sendMessage={sendMessage}
        messages={messages}
        close={close}
        />
};
