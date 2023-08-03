import {useState} from "react";

const Tabs = ({tabContent, setTabContent}) => {


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

  return (
    <>
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
            (
              <div className={`tab-pane ${tab.isActive ? "" : "hidden"}`}>
                <div className="card w-96 bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">{tab.title}</h2>
                    <p>{tab.content}</p>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
