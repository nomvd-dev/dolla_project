import React from 'react';
import { Discover, DiscoverContainer, DiscoverImage, DiscoverContent, DiscoverP1, DiscoverH1, DiscoverP2, DiscoverBtn } from './DiscoverElements';

import Image from '../../images/saving.svg';

const DiscoverSection = (height) => {
    return (
        <>
            <Discover id="discover" height={height} >
                <DiscoverContainer>
                    <DiscoverImage src={Image}/>
                    <DiscoverContent>
                        <DiscoverP1>Unlimited Access</DiscoverP1>
                        <DiscoverH1>Login to your account at any time</DiscoverH1>
                        <DiscoverP2>We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.</DiscoverP2>
                        <DiscoverBtn>Learn More</DiscoverBtn>
                    </DiscoverContent>
                </DiscoverContainer>
            </Discover>
        </>
    )
}

export default DiscoverSection;
