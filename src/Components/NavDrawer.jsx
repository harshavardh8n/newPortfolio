// NavDrawer.js

import React from "react";
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
              <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }} className = "vnavitem">Home</li>
              <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }} className = "vnavitem">About</li>
              <li style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}className = "vnavitem" >Skills</li>
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
