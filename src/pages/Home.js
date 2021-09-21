import  React, { useState } from 'react'
import DiscoverSection from '../components/DiscoverSection';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import SignupSection from '../components/SignupSection';
import Sidebar from '../components/Sidebar';
import {getWindowDimensions} from '../util/index';
import FooterSection from '../components/FooterSection';

const Home = () => {
    const height = getWindowDimensions();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection height={height} />
            <InfoSection height={height} />
            <DiscoverSection height={height} />
            <ServicesSection height={height} />
            <SignupSection height={height} />
            <FooterSection />
        </>
    )
}

export default Home;
