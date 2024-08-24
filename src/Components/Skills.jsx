import { Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Element } from 'react-scroll'
import "./Skills.css"
import react from "../img/react.png"
import html from "../img/html-5.png"
import css from "../img/css-3.png"
import js from "../img/js.png"
import node from "../img/node-js.png"
import mysql from "../img/mysql.png"
import mongo from "../img/mongodb-icon.png"
import github from "../img/github.png"
import bootstrap from "../img/bootstrap.png"
import prisma from "../img/prisma.png"
import postgres from "../img/postgres.png"
import ts from "../img/typescript.png"
import chakra from "../img/chakra.png"
import express from "../img/express.png"
import postman from "../img/postman.png"
import git from "../img/git.png"
import redux from "../img/redux.png"
import recoil from "../img/recoil.png"
import aws from "../img/aws.png"
import figma from "../img/figma.png"
import cpp from "../img/c-.png"
import java from "../img/java.png"
import python from "../img/python.png"
import Skill from './Skill'

const Skills = () => {
    const skills = [
        {
            name:"HTML",
            img: html
        },
        {
            name:"CSS",
            img: css
        },
        {
            name:"javaScript",
            img: js
        },
        {
            name:"TypeScript",
            img: ts
        }, 

        {
            name:"mySQL",
            img: mysql
        },
        
        {
            name:"MongoDB",
            img: mongo
        },

        {
            name:"Express JS",
            img: express
        },
    {
        name:"React.js",
        img: react
    },
    {
        name:"Node.js",
        img: node
    },
    {
        name:"Redux",
        img: redux
    },
    {
        name:"Recoil",
        img: recoil
    },
    
    {
        name:"Bootstrap",
        img: bootstrap
    },
    {
        name:"chakra UI",
        img: chakra
    },
    {
        name:"git",
        img: git
    },
    {
        name:"gitHub",
        img: github
    },
    {
        name:"aws",
        img: aws
    },
    {
        name:"Figma",
        img: figma
    },
    {
        name:"Postman",
        img: postman
    },
    {
        name:"Prisma",
        img: prisma
    },
    {
        name:"PostgreSQL",
        img: postgres
    },
    {
        name:"Python",
        img: python
    },
    {
        name:"C++",
        img: cpp
    },
    {
        name:"Java",
        img: java
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

            <SimpleGrid minChildWidth='100px' spacing='20px'>
            {skills.map(skill=>(
                <Skill name={skill.name} img={skill.img} id="sicon"/>
                ))} 
            </SimpleGrid>
           

        </div>
    </div>
    </Element>
  )
}

export default Skills