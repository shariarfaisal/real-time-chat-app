import React from 'react'

const FormGroup = ({id,value,set}) => (
  <div className="form-group">
    <label htmlFor={id}>{id.toUpperCase()}</label>
    <input
      id={id}
      value={value}
      onChange={e => set(e.target.value)}
      className="form-control form-control-lg"
      type="text"
      placeholder={id[0].toUpperCase()+id.slice(1)}
    />
  </div>
)

export default React.memo(FormGroup)
