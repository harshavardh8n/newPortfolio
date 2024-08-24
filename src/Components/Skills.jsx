import { Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Element } from 'react-scroll'
import "./Skills.css"
import react from "../img/reactjs.png"
import Skill from './Skill'

const Skills = () => {
    const skills = [{
        name:"React.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"HTML",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
    },
    {
        name:"CSS",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"HTML",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"HTML",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
    {
        name:"Node.js",
        img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
    },
]
  return (
    <Element name="skills">
       
    <div className='skillsmain'>
    <Text fontSize="4xl" as="b" id="sheading">SKILLS</Text>
        <div className="skillscont">
            {/* {skills.map(skill=>(
                <Skill name={skill.name} img={skill.img}/>
            ))} */}
            {/* <Skill name="react" img ="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"></Skill> */}


            {/* <Grid  templateColumns='repeat(8, 1fr)' gap={6}>
            
                {skills.map(skill=>(
                <GridItem> 
                <Skill name={skill.name} img={skill.img}/>
                </GridItem>
            ))}
             
            </Grid> */}

            <SimpleGrid minChildWidth='120px' spacing='40px'>
            {skills.map(skill=>(
                <Skill name={skill.name} img={skill.img}/>
                ))} 
            </SimpleGrid>
           

        </div>
    </div>
    </Element>
  )
}

export default Skills