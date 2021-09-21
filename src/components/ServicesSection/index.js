import React from 'react';
import { Services, ServicesContainer, ServicesListItems, ServicesItem, ServicesImage, ServicesHeader, ServicesDetail, ServicesTitle } from './ServicesElements';
import image1 from '../../images/off-road.svg';

const ServicesSection = (height) => {
    return (
        <>
            <Services id="services" height={height} >
                <ServicesContainer>
                    <ServicesTitle>Our Services</ServicesTitle>
                    <ServicesListItems>
                        <ServicesItem>
                            <ServicesImage src={image1} />
                            <ServicesHeader>Reduce Expenses</ServicesHeader>
                            <ServicesDetail>We help reduce your fees and increase your overall revenue.</ServicesDetail>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesImage src={image1} />
                            <ServicesHeader>Reduce Expenses</ServicesHeader>
                            <ServicesDetail>We help reduce your fees and increase your overall revenue.</ServicesDetail>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesImage src={image1} />
                            <ServicesHeader>Reduce Expenses</ServicesHeader>
                            <ServicesDetail>We help reduce your fees and increase your overall revenue.</ServicesDetail>
                        </ServicesItem>
                    </ServicesListItems>
                </ServicesContainer>
            </Services>
        </>
    )
}

export default ServicesSection;
