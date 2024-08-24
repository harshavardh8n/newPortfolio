import { Image, Img } from '@chakra-ui/react'
import React from 'react'
import "./Skill.css"

const Skill = ({name, img}) => {
  return (
    <div className='skill'>
        {/* <div className="skillicont"> */}
        <Image
        borderRadius='full'
        boxSize='80px'
        src={img}
        alt='Dan Abramov'
        id="sicon"
/>
        {/* </div> */}
        {name}
    </div>
  )
}

export default Skill