import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { RiAppsLine } from 'react-icons/ri'

import { HeaderWrapper, Nav, NavLogo, NavMenu, NavList, NavItem, NavLink, NavIcon, NavClose, NavButtons, ChangeTheme, NavToggle } from './style';

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLogo href="#" class="nav__logo">Zaffron</NavLogo>
        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink href="#home">
                <i class="uil uil-estate nav__icon"></i> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">
                <i class="uil uil-user nav__icon"></i> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">
                <i class="uil uil-file-alt nav__icon"></i> Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">
                <i class="uil uil-briefcase-alt nav__icon"></i> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">
                <i class="uil uil-scenery nav__icon"></i> Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                <i class="uil uil-message nav__icon"></i> Contactme
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                <i class="uil uil-message nav__icon"></i> Blog
              </NavLink>
            </NavItem>
          </NavList>
          <NavClose>
            <FaTimes />
          </NavClose>
        </NavMenu>
        <NavButtons>
          <ChangeTheme />

          <NavToggle>
            <RiAppsLine />
          </NavToggle>
        </NavButtons>
      </Nav>
    </HeaderWrapper>
  )
}
