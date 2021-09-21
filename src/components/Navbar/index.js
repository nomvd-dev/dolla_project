import { React, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, MobileIcon, NavBtn } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <Nav className={navbar ? 'navbar changeBg' : 'navbar'}>
                <NavbarContainer>
                    <NavLogo activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClass="active"
                                to="discover"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClass="active"
                                to="signup"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn to="/sign-in">Sign In</NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;