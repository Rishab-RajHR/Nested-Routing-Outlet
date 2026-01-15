import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
     <h2>This is about us Page</h2> 
     <li><Link to="/employee/alex/23" state={{name:'Alex Pandian', age:23}}>Alex</Link></li>
     <li><Link to="/employee/tovino/22">Tovino</Link></li>
    </>
  )
}

export default About
