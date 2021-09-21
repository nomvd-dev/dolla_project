import styled from "styled-components";
import {Link} from 'react-scroll';

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #0C0F17;
    padding: 60px 0;
`;

export const FooterContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 0 48px;
`;

export const FooterTop = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 40px;
    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 20px;
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 500px){
        width: 100%;
    }
`;

export const TopGroup = styled.div`
    color: #f8f8f8;
    padding-bottom: 20px;
    width: 60%;
    @media screen and (max-width: 500px){
        width: 60%;
    }
`;

export const GroupName = styled.p`
    font-weight: bold;
    padding-bottom: 15px;
`;

export const GroupItem = styled.ul`
`;

export const Item = styled.li`
    list-style-type: none;
    padding-bottom: 5px;
`;

// BackToTop, Copyright, SocialMedia, FooterBottom
export const FooterBottom = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f8f8f8;
    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`;

export const BackToTop = styled(Link)`
    font-weight: bold;
    font-size: 24px;
`;

export const Copyright = styled.p`
    @media screen and (max-width: 500px){
        padding: 15px 0;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
    font-size: 24px;
    @media screen and (max-width: 500px){
        width: 70%;
    }
`;