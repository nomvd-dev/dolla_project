import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${({height})=>(height)};
    background-color: #000405;
`;
export const InfoContainer = styled.div`
    width: 100%;
    height: 80%;
    max-width: 1100px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 48px;
        padding-top: 80px;
    };
    @media screen and (max-width: 500px){
        padding: 0 24px;
        padding-top: 80px;
    };
`;

export const InfoImage = styled.img`
    width: 50%;
    height: 100%;
    @media screen and (max-width: 768px){
        padding-top: 20px;
        width: 100%;
    };
`;

export const InfoContent = styled.div`
    padding-right: 32px;
    @media screen and (max-width: 500px){
        height: 50%;
        padding-right: 0;
    };
`;

export const InfoP1 = styled.p`
    color: #00B163;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    @media screen and (max-width: 500px){
        font-size: 12px;
        margin-bottom: 5px;
    };
`;

export const InfoH1 = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    @media screen and (max-width: 500px){
        font-size: 24px;
        margin-bottom: 10px;
    };
`;

export const InfoP2 = styled.p`
    color: #fff;
    margin-bottom: 30px;
    @media screen and (max-width: 500px){
        font-size: 14px;
        margin-bottom: 15px;
    };
`;

export const InfoBtn = styled.button`
    white-space: nowrap;
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
    @media screen and (max-width: 500px){
        font-size: 12px;
    };
`;