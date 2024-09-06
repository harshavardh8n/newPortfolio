import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Element } from 'react-scroll'
import Card from './Card'
import TabsComponent from './TabsComponent'


const Wordkfolio = ({lightmode}) => {

  return (
    <div>

        <Element name="workfolio">
        <Box bgColor={"#F5F5F5"} padding={"5rem"} minHeight={"100vh"} maxWidth={"100vw"}>
        <Text fontSize="4xl" as="b" margin={"2rem"}>Workfolio</Text>
        <TabsComponent lightMode={"true"}/>
        {/* <Card tag="web dev" title={"Resumine"} description={"Analyze, Compare or visualise your resume"} image={"https://scontent.fpnq13-1.fna.fbcdn.net/v/t39.30808-6/230518893_131833929101053_5303653532477360408_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5NkgP9oMkFcQ7kNvgFW0Rcj&_nc_ht=scontent.fpnq13-1.fna&oh=00_AYAIw64cvjbePWPCYSIOHPMTvazt4g4qQJsxTs3V_XXh2w&oe=66E055F3" } link="https://resumine-frontend.vercel.app/" lightMode={"true"}/> */}
        {/* tag, title, description, image, link, view, */}
        </Box>
        </Element>
    </div>
  )
}

export default Wordkfolio