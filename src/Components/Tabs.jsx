import { useState } from "react";
import parse from "html-react-parser";
import { motion } from "framer-motion";

const Tabs = ({ tabContent, setTabContent }) => {
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

  const variants = {
    hidden: { y:35, opacity: 0 },
    visible: { y:0, opacity: 1 },
    hidden1 : {y:-35, opacity:0},
    visible1 : {y:0, opacity:1}
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[4rem]">
      <div className="tabs tabs-boxed">
        {tabContent.map((tab) => {
          return (
            tab.isActive,
            (
              <a
                className={`tab tab-lg ${tab.isActive ? "tab-active" : ""}`}
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
                {parse(tab.content)}
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default Tabs;
