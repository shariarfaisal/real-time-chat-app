import React,{ useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from './InfoBar'
import Footer from './Footer'
import Messages from './Messages'


let socket;
const Chat = ({location,history}) => {
  const ENDPOINT = 'http://localhost:5000'
  const [name,setName] = useState('')
  const [room,setRoom] = useState('')
  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([])
  const [users,setUsers] = useState([])

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

  const sendMessage = e => {
    e.preventDefault()
    socket.emit('sendMessage',message,() => setMessage(''))
  }

  return (
    <div className="container">
      <div className="row align-items-center" style={{minHeight: "100vh"}}>
        <div className="col-md-10 col-lg-8 mx-auto" style={{maxHeight: "90vh"}}>
          <div className="card">
            <InfoBar room={room} history={history}/>
            <Messages messages={messages} name={name}/>
            <Footer message={message} setMessage={setMessage} sendMessage={sendMessage}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Chat
