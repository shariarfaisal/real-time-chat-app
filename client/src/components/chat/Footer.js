import React from 'react'
import styled from 'styled-components'

const Footer = ({message,setMessage,sendMessage}) => (
  <FooterStyle className="card-footer p-0">
    <div className="form-groups d-flex">
      <input
          className="form-control rounded-0"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
          placeholder="whrite here..."
        />
      <button className="btn btn-info rounded-0 px-4">sent</button>
    </div>
  </FooterStyle>
)

const FooterStyle = styled.div`
  input{
    borderColor: transparent;
    height: 50px;
    border: transparent;
    &:active,focus{
      border: none;
    }
  }

  .form-control:focus {
    color: #495057;
    border-color: transparent;
    outline: 0;
    box-shadow: none;
  }

`

export default Footer
