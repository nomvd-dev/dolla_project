import React from 'react';
import { getWindowDimensions } from '../../util/index';
import { SignInCover, SignInContainer, HomeBtn, SignInContent, SignInP, SignInForm, SignInLabel, SignInInput, SignInBtn } from './SignInElements';

const SignIn = () => {
    const height = getWindowDimensions();

    return (
        <>
            <SignInCover height={height}>
                <HomeBtn to="/">dolla</HomeBtn>
                <SignInContainer>
                    <SignInContent>
                        <SignInP>Sign in to your account</SignInP>
                        <SignInForm>
                            <SignInLabel>Email</SignInLabel>
                            <SignInInput />
                            <SignInLabel>Password</SignInLabel>
                            <SignInInput />
                        </SignInForm>
                        <SignInBtn>Continue</SignInBtn>
                    </SignInContent>
                </SignInContainer>
            </SignInCover>
        </>
    )
}

export default SignIn;
