import React from 'react';
import { Footer, FooterContainer, FooterTop, TopWrapper, TopGroup, GroupName, GroupItem, Item, FooterBottom, BackToTop, Copyright, SocialMedia } from './FooterElements';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, FaRegCopyright } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <>
            <Footer>
                <FooterContainer>
                    <FooterTop>
                        <TopWrapper>
                            <TopGroup>
                                <GroupName>About Us</GroupName>
                                <GroupItem>
                                    <Item>How it works</Item>
                                    <Item>Testimonials</Item>
                                    <Item>Careers</Item>
                                    <Item>Investors</Item>
                                    <Item>Terms of Services</Item>
                                </GroupItem>
                            </TopGroup>
                            <TopGroup>
                                <GroupName>Contact Us</GroupName>
                                <GroupItem>
                                    <Item>Contact</Item>
                                    <Item>Support</Item>
                                    <Item>Destination</Item>
                                    <Item>Sponsorships</Item>
                                </GroupItem>
                            </TopGroup>
                        </TopWrapper>
                        <TopWrapper>
                            <TopGroup>
                                <GroupName>Videos</GroupName>
                                <GroupItem>
                                    <Item>Submit Video</Item>
                                    <Item>Ambassador</Item>
                                    <Item>Agency</Item>
                                    <Item>Influencer</Item>
                                </GroupItem>
                            </TopGroup>
                            <TopGroup>
                                <GroupName>Social Media</GroupName>
                                <GroupItem>
                                    <Item>Instagram</Item>
                                    <Item>Facebook</Item>
                                    <Item>Youtube</Item>
                                    <Item>Twitter</Item>
                                </GroupItem>
                            </TopGroup>
                        </TopWrapper>
                    </FooterTop>
                    <FooterBottom>
                        <BackToTop      activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>dolla</BackToTop>
                        <Copyright>dolla <FaRegCopyright /> 2021 All rights reserved.</Copyright>
                        <SocialMedia>
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaYoutube />
                            <FaTwitter />
                        </SocialMedia>
                    </FooterBottom>
                </FooterContainer>
            </Footer>
        </>
    )
}

export default FooterSection;
