import styled from "styled-components";

export const Discover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${({ height }) => (height)};
    background-color: #f8f8f8;
`;

export const DiscoverContainer = styled.div`
    padding-left: 48px;
    padding-right: 48px;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
        padding-left: 48px;
        padding-right: 48px;
    };
    @media screen and (max-width: 500px){
        padding-left: 24px;
        padding-right: 24px;
    };
`;

export const DiscoverImage = styled.img`
    width: 50%;
    height: 100%;
    @media screen and (max-width: 768px){
        padding-top: 20px;
        width: 100%;
    };
`

export const DiscoverContent = styled.div`
    padding-left: 32px;
    @media screen and (max-width: 500px){
        height: 50%;
        padding-left: 0;
    };
`;

export const DiscoverP1 = styled.p`
    color: #00B163;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    @media screen and (max-width: 500px){
        font-size: 12px;
        margin-bottom: 5px;
    };
`;

export const DiscoverH1 = styled.h1`
    color: #000405;
    margin-bottom: 20px;
    @media screen and (max-width: 500px){
        font-size: 24px;
        margin-bottom: 10px;
    };
`;

export const DiscoverP2 = styled.p`
    color: #000405;
    margin-bottom: 30px;
    @media screen and (max-width: 500px){
        font-size: 14px;
        margin-bottom: 15px;
    };
`;

export const DiscoverBtn = styled.button`
    white-space: nowrap;
    font-size: 16px;
    color: #f8f8f8;
    background-color: #000405;
    border: 1px solid transparent;
    border-radius: 50px;
    padding: 10px 22px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #00B163;
        color: #f8f8f8;
    }
    @media screen and (max-width: 500px){
        font-size: 12px;
    };
`;