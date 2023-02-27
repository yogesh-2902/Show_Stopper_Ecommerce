import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../responsive.js';


const Container = styled.div`
    display: flex;
    background-color: black;
    ${mobile({flexDirection : "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    color: white;
    font-size: 35px;
`

const Description = styled.p`
    color: white;
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width : 40px;
    height: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display : "none"})}
`
const Title = styled.h3`
    color: white;
    margin-bottom: 30px;
`

const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display : flex;
        flex-wrap: wrap;
`

const ListItem = styled.li`
        color: white;
        width : 50%;
        margin-bottom:10px; 
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div` 
    color: white;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;
    height: 30px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    SHOW STOPPER.
                </Logo>

                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum facere numquam aliquid. Voluptates, blanditiis ab. Architecto quas voluptates, sint ea voluptatum unde consequatur magnam veritatis perferendis corporis suscipit inventore.
                </Description>

                <SocialContainer>

                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>

                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon />
                    </SocialIcon>

                    <SocialIcon>
                        <PinterestIcon />
                    </SocialIcon>

                </SocialContainer>


            </Left>

            <Center>
                <Title>
                    Useful Links.
                </Title>

                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Orders Tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact Us.</Title>
                <ContactItem>
                    <LocationOnIcon style={{ marginRight: "10px" }} />
                    #11, 1st Cross, ABC Road, ABC, Bangalore - 560023
                </ContactItem>

                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} />
                    +91 83174-36906
                </ContactItem>

                <ContactItem>
                    <EmailIcon style={{ marginRight: "10px" }} />
                    yogeshjanardhan2902@gmail.com
                </ContactItem>

                <Payment src="https://i.ibb.co/XsdmR2c/1.png" />
            </Right>
        </Container>

    )
}

export default Footer;