// Navbar.js

import React from "react";
import "./Navbar.css";
import { Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import NavDrawer from "./NavDrawer"; // Import NavDrawer component

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="Navbar">
      <div className="logo">
        <Text fontSize="xl" as="b">
          Harshavardhan Gaikwad
        </Text>
      </div>
      <div className="right">
        <ul className="hnav">
        <Link to="hero" smooth={true} duration={500}>
        <li>Home</li>
        </Link>
          
          <Link to="introduction" smooth={true} duration={500}>
          <li>About</li>
         </Link>
         <Link to="skills" smooth={true} duration={500}>
          <li>Skills</li>
         </Link>
         <Link to="workfolio" smooth={true} duration={500}>
          <li>Projects</li>
         </Link>
          <li>Contacts</li>
        </ul>
        <div className="hamburger">
          <HamburgerIcon onClick={onOpen} ref={btnRef} w={7} h={7} id="hamb"/>
        </div>
        <NavDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </div>
    </div>
  );
};

export default Navbar;
