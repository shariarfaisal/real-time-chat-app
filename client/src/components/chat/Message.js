import React from 'react'
import ReactEmoji from 'react-emoji'

export const Message = ({user,text,name}) => {
  const admin = name.trim().toLowerCase() === user ? true : false
  return (
    <div className={admin ? "col-12 my-2 text-right": "col-12 my-2"}>
      <div className={admin ? "ml-auto w-75" : "w-75"}>
        {!admin && <p className="my-2 text-muted" style={{fontSize: "15px"}}>@{user}</p>}
        <p className="mb-0 rounded py-2 px-3 text-bold" style={{background: admin ? "#22d22269" : "#eee",display: "inline-block"}}>
         {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  )
}


export default React.memo(Message)
