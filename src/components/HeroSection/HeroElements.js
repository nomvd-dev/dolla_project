import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    ${({height}) => (height)};
    position: relative;
    z-index: 1;
    margin-top: -80px;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    z-index: 10;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 52px;
    text-align: center;
    @media screen and (max-width: 1280px){
        font-size: 48px;
    }
    @media screen and (max-width: 1024px){
        padding: 0 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 44px;
    }
    @media screen and (max-width: 540px){
        font-size: 24px;
    }
`

export const HeroP = styled.p`
    color: #fff;
    font-size: 28px;
    text-align: center;
    padding: 20px 40px;
    @media screen and (max-width: 1280px){
        font-size: 24px;
    }
    @media screen and (max-width: 1024px){
        padding: 20px 30px;
    }
    @media screen and (max-width: 768px){
        padding: 20px 0;
    }
    @media screen and (max-width: 540px){
        font-size: 16px;
    }
`
export const HeroBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #010606;
    background-color: #01bf71;
    border: 1px solid transparent;
    border-radius: 50px;
    padding: 10px 22px;
    cursor: pointer;
    width: 25%;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #fff;
    }
    @media screen and (max-width: 1280px){
        width: 30%;
    }
    @media screen and (max-width: 1024px){
        font-size: 16px;
    }
    @media screen and (max-width: 540px){
        width: 40%;
        font-size: 12px;
    }
    @media screen and (max-width: 400px){
        width: 50%;
        font-size: 12px;
    }
`