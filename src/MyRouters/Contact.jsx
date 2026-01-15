import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      let bool = true;
      // let bool = false; // navigate to about page
      if(bool){
        navigate('/')
      }
      else {
        navigate('/about')
      }
  }
  return (
    <>
      <h2>Contact</h2>
      {/* <button onClick={() => navigate('/')}>Go to Home Page</button> */}
      <button onClick={() => handleClick()}>Go to Home Page</button>
      {/* <button onClick={() => navigate('/about')}>Go To About Page</button> */}
      <button onClick={() => handleClick()}>Go To About Page</button>
    </>
  )
}

export default Contact
