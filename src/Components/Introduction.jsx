import React from 'react'
import "./Introduction.css"
import img1 from "../img/25559529.jpg"
import { Button, Img, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'
import resume from "../assets/harshavardhan_resume_mark4.pdf"

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
            <Text fontSize="l" id="desc">Hi, I’m Harshavardhan Gaikwad, an IT student specializing in full-stack web development with a focus on the MERN stack and React.js. I excel at creating dynamic, responsive web applications, integrating APIs, and optimizing performance.

With a solid foundation in both front-end and back-end development, I combine innovative solutions with practical skills. My experience includes web scraping, developing Chrome extensions, and building user-centric applications that solve real-world problems.

Explore my portfolio to see how I bring advanced web technologies to life, delivering efficient and high-quality solutions.
</Text>

<a href={resume} download>

<button class="button12">

  <span class="button12-content">Download CV</span>
</button>
</a>

        </div>
    </div>
    </Element>
  )
}

export default Introduction