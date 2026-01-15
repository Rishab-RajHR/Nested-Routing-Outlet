import React from 'react'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
     <h2>This is Home page</h2> 
    </>
  )
}

export default Home
