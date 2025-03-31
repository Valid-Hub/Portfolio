"user client";
import React, { useState, useEffect } from "react";

import "@/styles/NavbarStyles.css";

import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

export default function Navbar() {
  const [isLargeEnough, setIsLargeEnough] = useState(false);

  const handleResize3 = () => {
    if (window.innerWidth < 600) {
      setIsLargeEnough(false);
    } else {
      setIsLargeEnough(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize3);
    handleResize3();
  });

  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bar">
      <div className="holder">
        {isLargeEnough && (
          <div className="monitor">
            <a href="">Home</a>
            <a href="">Specialities</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
        )}
        {!isLargeEnough && (
          <div className="mobile-open">
            <div className="menu-open">
              <div className="title">Portfolio</div>
              <div className="button" onClick={setOpen}>
                <Icon path={mdiMenu} size={1} />
              </div>
            </div>
            {isOpen && (
              <div className="menu-items">
                <div className="line"></div>
                <a href="">Home</a>
                <a href="">Specialities</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
