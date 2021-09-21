import styled from "styled-components";
import {Link} from 'react-router-dom'

export const SignInCover = styled.div`
    background-color: #00B163;
    width: 100%;
    ${(height) => (height)};
`;
export const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const HomeBtn = styled(Link)`
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #f8f8f8;
    padding-top: 20px;
    padding-left: 20px;
`;

export const SignInContent = styled.div`
    width: 30%;
    flex-direction: column;
    color: #f8f8f8;
    background-color: #000405;
    padding: 80px 30px;
    border-radius: 3px;
    @media screen and (max-width: 1024px){
        width: 40%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
    }
    @media screen and (max-width: 500px){
        width: 80%;
        padding: 80px 20px;
    }
`;

export const SignInP = styled.p`
    font-size: 24px;
    text-align: center;
    padding-bottom: 40px;
    @media screen and (max-width: 500px){
        font-size: 20px;
    }
`;

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const SignInLabel = styled.label`
    font-size: 20px;
    padding-bottom: 10px;
    @media screen and (max-width: 500px){
        font-size: 16px;
    }
`;

export const SignInInput = styled.input`
    font-size: 16px;
    margin-bottom: 30px;
    padding: 12px 0;
    padding-left: 5px;
    border-radius: 3px;
    border: none;
    &:focus-visible{
        outline: none;
    }
    @media screen and (max-width: 500px){
        font-size: 16px;
    }
`;

export const SignInBtn = styled.button`
    font-size: 20px;
    border: none;
    background-color: #00B163;
    color: #f8f8f8;
    width: 100%;
    padding: 16px 0;
    border-radius: 3px;
    transition: all 0.3s ease;
    &:hover{
        background-color: #f8f8f8;
        color: #000405;
    }
    @media screen and (max-width: 500px){
        font-size: 16px;
    }
`;