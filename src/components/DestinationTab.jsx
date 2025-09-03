import React from "react";

const DestinationTab = ({ destinationNames, handleTabChange, activeTab }) => {
  return (
    <div className={`h-8 flex  gap-8`}>
      {destinationNames.map((name, index) => (
        <button
          key={name}
          type={`button`}
          className={`cursor-pointer text-blue-300 transition-colors duration-500 hover:text-white text-8 uppercase relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:opacity-0 before:transition-opacity before:duration-500 ease-out hover:before:opacity-50 ${activeTab === index && `text-white before:opacity-100`}`}
          onClick={() => handleTabChange(index)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
export default DestinationTab;
