import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { SidebarContainer, SidebarMenu, SidebarItem, SidebarLink, SidebarBtn, CloseIcon } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <CloseIcon onClick={toggle}>
                    <FaTimes />
                </CloseIcon>
                <SidebarMenu>
                    <SidebarItem>
                        <SidebarLink onClick={toggle}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>About</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink onClick={toggle}
                            activeClass="active"
                            to="discover"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Discover</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink onClick={toggle}
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Services</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink onClick={toggle}
                            activeClass="active"
                            to="signup"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Sign Up</SidebarLink>
                    </SidebarItem>
                </SidebarMenu>
                <SidebarBtn to="/sign-in" onClick={toggle}>Sign In</SidebarBtn>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
