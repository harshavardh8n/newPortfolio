// NavDrawer.js

import React from "react";
import { Link } from "react-scroll";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";

const NavDrawer = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {/* <DrawerHeader>Menu</DrawerHeader> */}

        <DrawerBody>
          <Box p={4} className = "vnavbar">
            <ul style={{ listStyle: "none", padding: 0 }}>
             <Link to="hero" smooth={true} duration={500}>
             <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }} className = "vnavitem">Home</li>
             </Link> 
             <Link to="introduction" smooth={true} duration={500}>
              <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }} className = "vnavitem">About</li>
             </Link>
             <Link to="skills" smooth={true} duration={500}>
              <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }} className = "vnavitem">Skills</li>
             </Link>
              <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}className = "vnavitem" >Projects</li>
              <li style={{ padding: "1rem" }} className = "vnavitem">Contacts</li>
            </ul>
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
