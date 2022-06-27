import React, { Dispatch, SetStateAction } from "react";
import { ReactComponent as BrightLogo } from "../assets/images/bright_logo.svg";
import { ReactComponent as Github } from "../assets/images/github_fill.svg";
import { ReactComponent as Gmail } from "../assets/images/chat_1_fill.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin_fill.svg";
import { AnimatePresence, motion } from "framer-motion";
import Panels from "../components/Panels";

interface MenuProps {
  setButtonState?: Dispatch<SetStateAction<boolean>>;
  buttonState: boolean;
  setPanelComplete?: Dispatch<SetStateAction<boolean>>;
  panelComplete: boolean;
}

export const Menu: React.FC<MenuProps> = ({
  setButtonState,
  buttonState,
  setPanelComplete,
  panelComplete,
}) => {
  function handleButtonState() {
    if (setButtonState !== undefined) {
      setButtonState(!buttonState);
    }
  }

  const parent = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  };
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  const titleSlideUp = {
    initial: { y: 50 },
    animate: { y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.section exit={{ opacity: 0 }} className="menu">
        <div className="menu-top-bar">
          <div className="logo">
            <BrightLogo />
          </div>
          <div className="menu-button">
            <input
              className="menu-button__cheeckbox"
              type="checkbox"
              onClick={() => handleButtonState()}
              checked
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <motion.ul
          variants={parent}
          initial="initial"
          animate="animate"
          exit="exit"
          className="menu-items"
        >
          <motion.li>
            <motion.a variants={titleSlideUp} transition={transition} href="/">
              About
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a variants={titleSlideUp} transition={transition} href="/">
              Experience
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a variants={titleSlideUp} transition={transition} href="/">
              Work
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a variants={titleSlideUp} transition={transition} href="/">
              Contact
            </motion.a>
          </motion.li>
          <motion.li className="resume-button-mobile">
            <motion.a variants={titleSlideUp} transition={transition} href="/">
              Resume
            </motion.a>
          </motion.li>
        </motion.ul>
        <div className="menu-bottom-bar">
          <div className="social-media-wrapper">
            <div className="github-icon">
              <Github />
            </div>
            <div className="gmail-icon">
              <Gmail />
            </div>
            <div className="linkedin-icon">
              <Linkedin />
            </div>
          </div>
          <div className="change-language">
            <a href="/">PL</a>
            <span> | </span>
            <a href="/" className="active-language">
              EN
            </a>
          </div>
        </div>
      </motion.section>
      <Panels
        setPanelComplete={setPanelComplete}
        panelComplete={panelComplete}
      />
    </AnimatePresence>
  );
};

export default Menu;
