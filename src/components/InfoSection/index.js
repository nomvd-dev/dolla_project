import React from 'react';
import Image from '../../images/off-road.svg'
import { Info, InfoContainer, InfoImage, InfoContent, InfoP1, InfoH1, InfoP2, InfoBtn } from './InfoElements';

const InfoSection = (height) => {
    return (
        <>
            <Info height={height} id="about">
                <InfoContainer>
                    <InfoContent>
                        <InfoP1>Premium Bank</InfoP1>
                        <InfoH1>Unlimited <br/>Transaction with<br/> zero fees</InfoH1>
                        <InfoP2>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</InfoP2>
                        <InfoBtn>Get Started</InfoBtn>
                    </InfoContent>
                    <InfoImage src={Image} />
                </InfoContainer>
            </Info>
        </>
    )
}

export default InfoSection;
