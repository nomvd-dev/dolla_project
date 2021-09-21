import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtn } from './HeroElements';
import {MdKeyboardArrowRight} from 'react-icons/md';

const HeroSection = (height) => {
    return (
        <>
            <HeroContainer id="home" height= {height}>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        Virtual Banking Made Easy
                    </HeroH1>
                    <HeroP>
                        Sign up for a new account today and receive $250 in credit towards your next payment
                    </HeroP>
                    <HeroBtn>
                        Get Started <MdKeyboardArrowRight className="ml-2" />
                    </HeroBtn>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;
