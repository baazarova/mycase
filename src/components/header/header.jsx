import React from "react";
import "./header.css";


export const Header = () => {
  return (
   <header className="header">
   <div className="container">
   <div className="header__wrapper">
      <a className="header__link" href="#works">
        Works
      </a>
       <a className="header__link" href="#contacts">
        Contact
      </a>
    </div>
   </div>
   </header>
  );
};
