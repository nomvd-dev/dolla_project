import styled from "styled-components";

export const Services = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ height }) => (height)};
    background-color: #000405;
    width: 100%;
`;

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    max-height: 100%;
    height: 100%;
    padding: 0 80px;
    @media screen and (max-width: 500px){
        padding: 0 24px;
        padding-top: 80px;
    }
`;

export const ServicesTitle = styled.h1`
    color: #f8f8f8;
    padding: 50px 0;
    text-align: center;
    @media screen and (max-width: 768px){
        padding-bottom: 30px;
        padding-top: 80px;
    }
    @media screen and (max-width: 500px){
        padding-top: 0;
        padding-bottom: 10px;
        font-size: 24px;
    }
`;

export const ServicesListItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        padding: 0 48px;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 48px;
        height: 80%;
    }
    @media screen and (max-width: 500px){
        padding: 0;
        height: 80%;
    }
`

export const ServicesItem = styled.div`
    max-width: 30%;
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 24px 20px;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
    @media screen and (max-width: 768px){
        margin: 10px 0;
        max-width: 100%;
        width: 100%;
        max-height: 30%;
        height: 100%;
    }
    @media screen and (max-width: 500px){
        padding: 10px 10px;
    }
`;

export const ServicesImage = styled.img`
    width:  100%;
    height: 100%;
    @media screen and (max-width: 768px){
        max-height: 100%;
        width: 100%;
        height: 50%;
    }
`;

export const ServicesHeader = styled.p`
    color: #000405;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    @media screen and (max-width: 500px){
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 5px;
    }
`;

export const ServicesDetail = styled.p`
    color: #000405;
    text-align: center;
    @media screen and (max-width: 500px){
        font-size: 12px;
    }
`;