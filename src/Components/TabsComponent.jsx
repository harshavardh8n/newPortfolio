"use client";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";
import { webCards } from "./webCards"
import { chromeExt } from "./chromeExt"
import { scraping } from "./scraping"
import { allworkfolio } from "./allworkfolio"
// import { webCards } from "../workfolio/webCards";
// import { webCards } from "../workfolio/webCards";
// import { webCards } from "../workfolio/webCards";

const TabsComponent = ({ lightMode }) => {
  const [selectedTab, setSelectedTab] = useState(0);



  return (
    <Box mt={"2rem"}>
      <Tabs
        variant={"solid-rounded"}
        colorScheme={"white"}
        onChange={(e) => {
          setSelectedTab(e);
        }}
        display={"flex"}
        flexDir={"column"}
        textAlign={"center"}
        w={"100%"}
        justifyContent={"center"}
        isLazy={true}
      >
        <TabList gap={"2rem"} justifyContent={"center"}>
          <Tab
            tabIndex={0}
            bgColor={
              selectedTab == 0 ? "#5580E9" : lightMode ? "#fff" : "#2c2c2c"
            }
            borderRadius={"0.6rem"}
            transition={"0.4s all"}
            _hover={{ bgColor: "#5580E9", color: "#fff" }}
            fontWeight={"500"}
            boxShadow={lightMode ? "1px 1px 2px #ddd": "0px 0px 3px #656565"}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            Web App
          </Tab>
          <Tab
            tabIndex={1}
            bgColor={
                selectedTab == 1 ? "#5580E9" : lightMode ? "#fff" : "#2c2c2c"
              }
            borderRadius={"0.6rem"}
            transition={"0.4s all"}
            _hover={{ bgColor: "#5580E9", color: "#fff" }}
            fontWeight={"500"}
            boxShadow={lightMode ? "1px 1px 2px #ddd": "0px 0px 3px #656565"}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            Chrome Extension
          </Tab>
          <Tab
            tabIndex={2}
            bgColor={
              selectedTab == 2 ? "#5580E9" : lightMode ? "#fff" : "#2c2c2c"
            }
            borderRadius={"0.6rem"}
            transition={"0.4s all"}
            _hover={{ bgColor: "#5580E9", color: "#fff" }}
            fontWeight={"500"}
            boxShadow={lightMode ? "1px 1px 2px #ddd": "0px 0px 3px #656565"}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            Scraping
          </Tab>
          <Tab
            tabIndex={3}
            bgColor={
              selectedTab == 3 ? "#5580E9" : lightMode ? "#fff" : "#2c2c2c"
            }
            borderRadius={"0.6rem"}
            transition={"0.4s all"}
            _hover={{ bgColor: "#5580E9", color: "#fff" }}
            fontWeight={"500"}
            boxShadow={lightMode ? "1px 1px 2px #ddd": "0px 0px 3px #656565"}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            All
          </Tab>
        </TabList>
        <TabPanels mt={"2rem"}>
        <TabPanel
            display={"flex"}
            justifyContent={"left"}
            gap={"3rem"}
            pl={"2.5rem"}
            flexWrap={"wrap"}
            h={"100%"}
          >
            {webCards.map((card) => {
              return (
                <Card
                  lightMode={lightMode}
                  key={card.key}
                  tag={card.tag}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  view={card.view}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            display={"flex"}
            justifyContent={"left"}
            gap={"3rem"}
            pl={"2.5rem"}
            flexWrap={"wrap"}
            h={"100%"}
          >
            {chromeExt.map((card) => {
              return (
                <Card
                lightMode={lightMode}
                  key={card.key}
                  tag={card.tag}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  view={card?.view}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            display={"flex"}
            justifyContent={"left"}
            gap={"3rem"}
            pl={"2.5rem"}
            flexWrap={"wrap"}
            h={"100%"}
          >
            {scraping.map((card) => {
              return (
                <Card
                lightMode={lightMode}
                  key={card.key}
                  tag={card.tag}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            display={"flex"}
            justifyContent={"left"}
            gap={"3rem"}
            pl={"2.5rem"}
            flexWrap={"wrap"}
            h={"100%"}
          >
            {allworkfolio.map((card) => {
              return (
                <Card
                lightMode={lightMode}
                  key={card.key}
                  tag={card.tag}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  view={card?.view}
                />
              );
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsComponent;