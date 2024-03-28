import React from "react";
import "./Menu.css";
import {LuHome} from 'react-icons/lu'
import { FcAbout } from 'react-icons/fc';
import { MdDesignServices } from 'react-icons/md';
import { GrUserWorker } from "react-icons/gr";

const Menu = ({ toggle }) => {
  return (
    <>
    {/* {toggle && (
        <div className="navBar-profile-pic">
          <img src="/images/blackPanther.jpg" alt="profile pic"></img>
        </div>
      )} */}


      {/* TERNARY OPRATION */}
      {toggle ? (
        <>
         <div className="navBar-profile-pic">
          <img src="/images/blackPanther.jpg" alt="profile pic"></img>
        </div>

        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                <LuHome /> Home</div>
            </div>

            <div className="nav-item">
                <div className="nav-link"><FcAbout/>About </div>
            </div>

            <div className="nav-item">
                <div className="nav-link"><MdDesignServices  /> Services</div>
            </div>

            <div className="nav-item">
                <div className="nav-link">Experience</div>
            </div>

            <div className="nav-item">
                <div className="nav-link"><GrUserWorker/>works</div>
            </div>

            <div className="nav-item">
                <div className="nav-link">Blog</div>
            </div>

            <div className="nav-item">
                <div className="nav-link">contact</div>
            </div>

            <div className="nav-item">
                <div className="nav-link">Home</div>
            </div>
        </div>

        </>
      ):(
        <h1>Icons</h1>
      )}
    </>
  );
};

export default Menu;
