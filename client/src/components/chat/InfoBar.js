import React from 'react'

const InfoBar = ({room,history}) => (
  <div className="card-header bg-info d-flex">
    <h1 className="text-light">{room}</h1>
    <button
      className="btn btn-danger ml-auto my-auto"
      onClick={e => history.push('/')}
      style={{width:"80px",height:"40px"}}>
      close
    </button>
  </div>
)

export default InfoBar
