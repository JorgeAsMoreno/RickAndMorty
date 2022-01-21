import React from "react";
import './header.scss'
import rm2 from './assets/rm2.png'
const Header = () => {
  return (
    <header className="header">
      <div className="header-container__img">
        <img src={rm2} alt="Rick y Morty" />
      </div>
      <div className="header-container__title">
        <h1>Rick and Morty</h1>
      </div>
    </header>
  )
}

export default Header