import React from 'react'
import "./Introduction.css"
import img1 from "../img/25559529.jpg"
import { Img, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'

const Introduction = () => {
  return (
    <Element name="introduction">

    <div className='Introcont'>
        <div className="leftint">
            <div className="imgcont">
            <Img src={img1}></Img>
            </div>
            
        </div>
        <div className="rightint">
            <Text fontSize="4xl" as="b">LET ME <br /> INTRODUCE MYSELF </Text>
            <Text fontSize="l" id="desc">Hi, I’m Harshavardhan Gaikwad. As an IT student specializing in full-stack web development, I focus on creating dynamic and responsive web applications using the MERN stack and React.js. My expertise spans building seamless user interfaces, integrating APIs, optimizing performance, and implementing advanced web technologies. <br /> <br />

With a strong foundation in both front-end and back-end development, I excel at combining innovative solutions with practical skills. My experience includes data extraction through web scraping and the development of intuitive Chrome extensions. My passion lies in leveraging these skills to create impactful, user-centric applications that solve real-world problems. <br /> <br />

Explore my portfolio to see how I bring advanced web technologies to life and deliver efficient, high-quality solutions.</Text>
        </div>
    </div>
    </Element>
  )
}

export default Introduction