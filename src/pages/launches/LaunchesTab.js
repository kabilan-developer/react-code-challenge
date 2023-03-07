import React from "react";

const LaunchesTab = (props) => {
  const { activeTab, setActiveTab } = props;
  return (
    <div className="d-flex">
      <div
        className="tab_boxes center"
        style={{
          backgroundColor: activeTab == "All" ? "#ebebeb" : "transparent",
        }}
        onClick={() => setActiveTab("All")}
      >
        <span>All</span>
      </div>
      <div
        className="tab_boxes center"
        style={{
          backgroundColor: activeTab == "Launched" ? "#ebebeb" : "transparent",
        }}
        onClick={() => setActiveTab("Launched")}
      >
        <span>Launched</span>
      </div>
      <div
        className="tab_boxes center"
        style={{
          backgroundColor: activeTab == "Upcoming" ? "#ebebeb" : "transparent",
        }}
        onClick={() => setActiveTab("Upcoming")}
      >
        <span>Upcoming</span>
      </div>
    </div>
  );
};

export default LaunchesTab;
