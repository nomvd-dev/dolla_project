import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: transparent;
    font-size: 16px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.5s ease;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    padding: 0 48px;
    z-index: 1;
    @media screen and (max-width: 500px){
        padding: 0 24px;
    };
`

export const NavLogo = styled(LinkS)`
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:960px){
        display: flex;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
    };
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    @media screen and (max-width:960px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    list-style-type: none;
`

export const NavLink = styled(LinkS)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    text-decoration: none;
    padding: 0 16px;
    cursor: pointer;
    &:active{
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled(LinkR)`
    text-decoration: none;
    font-size: 16px;
    color: #010606;
    background-color: #01bf71;
    border: 1px solid transparent;
    border-radius: 50px;
    padding: 10px 22px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #fff;
    }
    @media screen and (max-width:960px){
        display: none;
    }
`