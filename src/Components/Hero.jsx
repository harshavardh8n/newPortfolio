import React from 'react'
import "./Hero.css"
import me from "../img/profilephoto.png"
import { Box, Image, Text } from '@chakra-ui/react'
import Links from './Links'
import { Element } from 'react-scroll'
import Minks from './Minks'

const Hero = () => {
    
  return (
    <Element name="hero">

    <div className='herocont'>
    
    <div className="left">

    <div className="greeting">
        <p>
            Hello, I am
        </p>
        <Text fontSize="4xl">
             Harshavardhan</Text>
    </div>

    <div className="github">
        <Minks/>
    </div>
    </div>
    <div className="middle">

    <Box boxSize='xl'>
        <Image src={me} alt="My profile photo" id="mypic" />
    </Box>
    </div>
    <div className="mern">
        <Text fontSize="3xl">A full stack developer</Text>
    </div>
        {/* <img src={me} alt="My profile photo" id="mypic"/> */}
    </div>
    </Element>
  )
}

export default Hero