import React, { useState } from 'react'
import hamburgerIcon from '../../images/icon-hamburger.svg'
import logo from '../../images/logo.svg'
import closeIcon from '../../images/icon-close.svg'
import './Navigation.css'

const Navigation = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)

  return (
    <div className="header-container">
      <div className="menu-desktop">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="menu-mobile">
        <section className="icons-wrapper">
          <img
            src={hamburgerIcon}
            alt="menu"
            onClick={() => toggleMenu()}
            className="menu"
          />
          <img src={logo} alt="logo" />
        </section>
        <nav className={menu ? 'nav-menu nav-menu__active' : 'nav-menu'}>
          <img src={closeIcon} alt="close" onClick={() => toggleMenu()} />
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
