import React from 'react'
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import { WrapperHeader } from './Header.styled'


const Header = () => {
  return (
    <header>
        <WrapperHeader>
          <Logo />
          <NavBar />
        </WrapperHeader>
    </header>
  )
}

export default Header