import React, { useState, memo } from "react";
import { pageTransition, tabContentTransition } from "../constants.js";
import { AnimatePresence, motion } from "motion/react";
import { useAppContext } from "../hooks/useAppContext.jsx";
import MainContainer from "../components/MainContainer.jsx";
import Caption from "../components/Caption.jsx";
import DestinationTab from "../components/DestinationTab.jsx";

const DestinationImage = memo(({ destination, activeTab }) => (
  <AnimatePresence mode="wait">
    {destination && (
      <motion.div
        key={activeTab}
        className="flex items-center justify-center py-7 px-22 md:py-10 md:px-48 lg:px-7 lg:py-32"
        {...tabContentTransition}
      >
        <img
          src={destination.images.webp}
          alt={destination.name}
          className="size-37.5 md:size-75 lg:size-120 object-contain"
        />
      </motion.div>
    )}
  </AnimatePresence>
));

DestinationImage.displayName = "DestinationImage";

const DestinationDetails = memo(({ destination, activeTab }) => (
  <AnimatePresence mode="wait">
    <motion.div
      className="flex flex-col gap-y-6 md:gap-y-8"
      key={activeTab}
      {...tabContentTransition}
    >
      <div className="text-center lg:text-left">
        <h2 className="text-2 text-white uppercase">{destination.name}</h2>
        <p className="text-9 text-blue-300">{destination.description}</p>
      </div>
      <hr className="text-white opacity-25" />
      <div className="flex flex-col md:flex-row gap-6 md:justify-around lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-7 text-blue-300 uppercase">avg. distance</p>
          <p className="text-6 text-white uppercase">{destination.distance}</p>
        </div>
        <div className="space-y-3 text-left">
          <p className="text-7 text-blue-300 uppercase">est. travel time</p>
          <p className="text-6 text-white uppercase">{destination.travel}</p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
));

DestinationDetails.displayName = "DestinationDetails";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { destinations } = useAppContext();
  const destinationNames = destinations.map((destination) => destination.name);
  const handleTabChange = (index) => setActiveTab(index);
  const currentDestination = destinations?.[activeTab];

  return (
    <>
      <motion.div
        className="absolute inset-0 w-full h-full bg-main bg-destination -z-10"
        {...pageTransition}
      />
      <MainContainer>
        <div className="lg:grid lg:grid-rows-[max-content_1fr] h-full">
          <Caption
            number="01"
            text="choose your destination"
            className="mb-6"
          />
          <section className="grid grid-rows-[min-content_1fr] gap-6 md:gap-8 lg:grid-rows-none lg:grid-cols-2">
            <DestinationImage
              destination={currentDestination}
              activeTab={activeTab}
            />
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="md:w-4/5 flex flex-col items-center lg:items-start">
                <DestinationTab
                  destinationNames={destinationNames}
                  handleTabChange={handleTabChange}
                  activeTab={activeTab}
                />
                {currentDestination && (
                  <DestinationDetails
                    destination={currentDestination}
                    activeTab={activeTab}
                  />
                )}
              </div>
            </div>
          </section>
        </div>
      </MainContainer>
    </>
  );
};

export default Destination;
