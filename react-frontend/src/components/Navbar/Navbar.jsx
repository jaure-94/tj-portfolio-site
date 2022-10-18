import React from 'react'

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['home', 'about', 'contact', 'work', 'skills'].map((menuItem) => (
          <li key={`link-${menuItem}`}>
            <div />
            <a href={`#${menuItem}`}>{menuItem}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar