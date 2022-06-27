import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface PanelsProps {
  setPanelComplete?: Dispatch<SetStateAction<boolean>>;
  panelComplete: boolean;
}

export const Panels: React.FC<PanelsProps> = ({
  setPanelComplete,
  panelComplete,
}) => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

  function handlePanelComplete() {
    if (setPanelComplete !== undefined) setPanelComplete(!panelComplete);
  }

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="left-panel-background"
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
      ></motion.div>
      <motion.div
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
        onAnimationComplete={() => {
          handlePanelComplete();
        }}
      ></motion.div>
    </>
  );
};

export default Panels;
