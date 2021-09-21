import React from 'react';
import Image from '../../images/working.svg';
import { Signup, SignupContainer, SignupImage, SignupContent, SignupP1, SignupH1, SignupP2, SignupBtn } from './SignupElements';


const SignupSection = (height) => {
    return (
        <>
            <Signup height={height} id="signup">
                <SignupContainer>
                    <SignupContent>
                        <SignupP1>Jion out team</SignupP1>
                        <SignupH1>Create an <br/>account is<br/> extremely easy</SignupH1>
                        <SignupP2>Get every thing set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.</SignupP2>
                        <SignupBtn>Start now</SignupBtn>
                    </SignupContent>
                    <SignupImage src={Image} />
                </SignupContainer>
            </Signup>
        </>
    )
}

export default SignupSection;
