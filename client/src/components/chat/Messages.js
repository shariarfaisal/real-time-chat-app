import React from 'react'
import Message from './Message'

const Messages = ({messages,name}) => (
  <div className="card-body" style={{minHeight: "70vh",maxHeight: "70vh",overflowY: "scroll",overflowX:"hidden"}}>
    <div className="row">
          {
            messages.map((msg,i) => {
              return <Message key={i} {...msg} name={name}/>
            })
          }
    </div>
  </div>
)

export default Messages
