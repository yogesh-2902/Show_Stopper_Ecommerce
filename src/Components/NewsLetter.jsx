import React from 'react';
import styled from 'styled-components';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import {mobile} from '../responsive.js';

const Container = styled.div`
    height: 60vh;
    display:flex;    
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size : 70px;
    margin-bottom: 20px;
    ${mobile({fontSize : "32px"})}
`
const Description = styled.div`
        font-size : 24px;
        margin-bottom: 20px;
        ${mobile({textAlign : "center"})}
`
const InputContainer = styled.div`
    width:50%;
    border: 2px solid red;
    display:flex;
    justify-content : space-between;
    border: 1px solid lightgray;
    ${mobile({width : "80%"})}
`
const Input = styled.input`
    border: none;
    flex : 6;
    font-size: 14px;
    padding-left : 10px;
`

const Button = styled.button`
    flex : 1;
    border: none;
    background-color: teal;
    color: white;
    padding: 10px
`

const NewsLetter = () => {

    return (<Container>
        <Title>Newsletter</Title>

        <Description>Get daily updates about our new products and discounts.</Description>

        <InputContainer>
            <Input placeholder="Your email..." />
            <Button>
                <ForwardToInboxIcon />
            </Button>
        </InputContainer>
    </Container>);

}

export default NewsLetter;