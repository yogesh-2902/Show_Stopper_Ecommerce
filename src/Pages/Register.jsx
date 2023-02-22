import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive.js';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255,255 , 0.5), rgba(255, 255,255 , 0.5)) ,
                 url("https://i.ibb.co/XsdmR2c/3.png") center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center; 
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white; 
    ${mobile({width : "80%"})}      
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap; 
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px; 
     
`

const Agreement = styled.p`
    font-size: 12px;
    margin: 20px 0; 
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor:pointer;
    font-size: 16px;
    font-weight: 600;
`

const Register = () => {
    return(
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="user name" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm-password" />

                    <Agreement>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel iste ab voluptate suscipit enim, in ratione error amet maxime. <b>Privacy Policy</b>
                    </Agreement>

                    <Button>Create</Button>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Register;