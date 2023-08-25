import React from 'react'
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import { WrapperHeader } from './Header.styled'
import {Container} from '../../globalStyles'


const Header = () => {
  return (
    <header>
      <Container>
        <WrapperHeader>
          <Logo />
          <NavBar />
        </WrapperHeader>
      </Container>
    </header>
  )
}

export default Header