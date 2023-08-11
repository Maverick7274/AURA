/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import parse from "html-react-parser";
import JsxParser from "react-jsx-parser";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import logoipsum from "../assets/logoipsum.svg"

const Tabs = ({ tabContent, setTabContent, visibility }) => {

  const visibilityStyle = {visibility}
  
  function handleTabs(e) {
    const tabId = e.target.id;
    const newTabContent = [...tabContent];
    newTabContent.forEach((tab) => {
      tab.isActive = false;
      if (tab.id == tabId) {
        tab.isActive = true;
      }
    });
    setTabContent(newTabContent);
  }

  const [currentID, setCurrentID] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  function autoPlayTabs(){
    // autoplay handleTabs Function


    const newTabContent = [...tabContent];
    newTabContent.forEach((tab, index) => {
      if (tab.isActive === true) {
        setCurrentID(index);
        tab.isActive = false;
      }
    })

      if(currentID >= newTabContent.length - 1) {
          setCurrentID(0);
      } else {
          setCurrentID(currentID+1);
      }

    newTabContent[currentID].isActive = true;

    setTabContent(newTabContent);
  }

  
  let timeOut = null;

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        autoPlayTabs();
      }, 2500);
  });




  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
    hidden1 : {y:-35, opacity:0},
    visible1 : {y:0, opacity:1}
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[4rem]">
      <div className="tabs tabs-boxed" style={visibilityStyle}>
        {tabContent.map((tab) => {
          return (
            tab.isActive,
            (
              <a
                className={`tab tab-lg transition ease-in-out ${tab.isActive ? "tab-active" : ""}`}
                id={tab.id}
                onClick={handleTabs}
              >
                {tab.title}
              </a>
            )
          );
        })}
      </div>

      <div className="tab-content">
        {tabContent.map((tab) => {
          return (
            tab.isActive,
              <div className={`tab-pane ${tab.isActive ? "" : "hidden"}`}>
                    <JsxParser
                      components={{Timeline, logoipsum}}
                      jsx={tab.content} 
                    />
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default Tabs;
