import React, { Dispatch, SetStateAction } from "react";
import { ReactComponent as DarkLogo } from "../assets/images/dark_logo.svg";
import Panels from "./Panels";

interface NavigationBarProps {
  setButtonState?: Dispatch<SetStateAction<boolean>>;
  buttonState: boolean;
  setPanelComplete?: Dispatch<SetStateAction<boolean>>;
  panelComplete: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
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

  return (
    <>
      <nav className="navigation-bar">
        <div className="logo">
          <DarkLogo />
        </div>
        <div className="menu-button">
          <input
            className="menu-button__cheeckbox"
            type="checkbox"
            onClick={() => handleButtonState()}
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="menu-items">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="navigation-bar-right-area">
          <div className="change-language">
            <a href="/">PL</a>
            <span> | </span>
            <a href="/" className="active-language">
              EN
            </a>
          </div>
          <button className="resume-button">Resume</button>
        </div>
      </nav>
      <Panels
        setPanelComplete={setPanelComplete}
        panelComplete={panelComplete}
      />
    </>
  );
};

export default NavigationBar;
