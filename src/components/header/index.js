import React, { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { RiAppsLine } from "react-icons/ri"

import { useScrollPosition } from "hooks/useScrollPosition"

import {
  HeaderWrapper,
  Nav,
  NavLogo,
  NavMenu,
  NavList,
  NavItem,
  NavLink,
  NavIcon,
  NavClose,
  NavButtons,
  ChangeTheme,
  NavToggle,
} from "./style"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [scrolledHeader, setScrolledHeader] = useState()
  useScrollPosition(function setScrollPosition({ currentPosition }) {
    setScrollY(currentPosition.y)
  })

  useEffect(() => {
    console.log(scrollY)
    if (scrollY <= -80) {
      setScrolledHeader(true)
    } else {
      setScrolledHeader(false)
    }
  }, [scrollY])

  return (
    <HeaderWrapper scrolled={scrolledHeader}>
      <Nav>
        <NavLogo href="/" class="nav__logo">
          Zaffron
        </NavLogo>
        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink to="/">
                <NavIcon></NavIcon> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#about">
                <i className="uil uil-user nav__icon"></i> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#skills">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#services">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#portfolio">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#contact">
                <i className="uil uil-message nav__icon"></i> Contactme
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog">
                <i className="uil uil-message nav__icon"></i> Blog
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
