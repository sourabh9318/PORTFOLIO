import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import "./Layout.css";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggel] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggel(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggel sidebar" : "sidebar"}>
          <div className="sidebr-toggle-icons">
           


            <p onClick={handleToggle}>
              {toggle ? (
                <BsArrowBarLeft size={30} />
              ) : (
                <BsArrowBarRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />

        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
