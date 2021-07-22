import React, { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { BsHouse, BsCardImage } from "react-icons/bs"
import {
  RiAppsLine,
  RiBriefcase2Line,
  RiMessage3Line,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"
import { MdComputer } from "react-icons/md"

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
  const [scrolledHeader, setScrolledHeader] = useState(false)
  const [navbarToggled, toggleNavbar] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  useScrollPosition(function setScrollPosition({ currentPosition }) {
    setScrollY(currentPosition.y)
  })

  useEffect(() => {
    if (scrollY <= -40) {
      setScrolledHeader(true)
    } else {
      setScrolledHeader(false)
    }
  }, [scrollY])

  return (
    <HeaderWrapper scrolled={scrolledHeader}>
      <Nav>
        <NavLogo to="/">Zaffron</NavLogo>
        <NavMenu toggled={navbarToggled}>
          <NavList>
            <NavItem>
              <NavLink to="/">
                <NavIcon>
                  <BsHouse />
                </NavIcon>{" "}
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#about">
                <NavIcon>
                  <AiOutlineUser />
                </NavIcon>{" "}
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#skills">
                <NavIcon>
                  <MdComputer />
                </NavIcon>{" "}
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#services">
                <NavIcon>
                  <RiBriefcase2Line />
                </NavIcon>{" "}
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#portfolio">
                <NavIcon>
                  <BsCardImage />
                </NavIcon>{" "}
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#contact">
                <NavIcon>
                  <RiMessage3Line />
                </NavIcon>{" "}
                Contactme
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog">
                <NavIcon>
                  <AiOutlineUser />
                </NavIcon>{" "}
                Blog
              </NavLink>
            </NavItem>
          </NavList>
          <NavClose onClick={() => toggleNavbar(false)}>
            <FaTimes />
          </NavClose>
        </NavMenu>
        <NavButtons>
          <ChangeTheme onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? <RiMoonLine /> : <RiSunLine />}
          </ChangeTheme>

          <NavToggle onClick={() => toggleNavbar(true)}>
            <RiAppsLine />
          </NavToggle>
        </NavButtons>
      </Nav>
    </HeaderWrapper>
  )
}
