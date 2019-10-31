import React,{ useState } from 'react'
import FormGroup from '../FormGroup'

const Join = (props) => {
  const [name,setName] = useState('')
  const [room,setRoom] = useState('')

  const onSubmitHandler = (e) => {
    if(name && room) {
      props.history.push(`chat?name=${name}&room=${room}`)
    }
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="row align-items-center" style={{minHeight: "100vh"}}>
        <div className="col-md-10 col-sm-12 col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Join</h1>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <FormGroup id="name" value={name} set={setName}/>
                <FormGroup id="room" value={room} set={setRoom}/>
                <button type="submit" className="btn btn-primary px-5 btn-lg">join</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Join
