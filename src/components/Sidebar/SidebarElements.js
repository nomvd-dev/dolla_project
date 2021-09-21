import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0e0e0e;
    position: fixed;
    left: 0;
    top: -100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled.div`
    color: #fff;
    position: absolute;
    font-size: 24px;
    top: 24px;
    right: 24px;
    cursor: pointer;
`

export const SidebarMenu = styled.ul`
    font-size: 20px;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    color: #fff;
    margin-top: 80px;
    width: 100%;
`

export const SidebarItem = styled.li`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`

export const SidebarLink = styled(LinkS)`
    transition: all 0.2s ease;
    &:hover{
        color: #00B163;
    }
`

export const SidebarBtn = styled(LinkR)`
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: #010606;
    background-color: #01bf71;
    border: none;
    border-radius: 50px;
    padding: 10px 22px;
    cursor: pointer;
    width: 50%;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #fff;
    }
`