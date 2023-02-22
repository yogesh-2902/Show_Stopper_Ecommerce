import React from 'react';
import styled from '@emotion/styled';
import {mobile} from '../responsive.js';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    ${mobile({height : "40vh"})}
`
const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px; 
`


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 400;
    color: white;
    background-color: gray;
    border: none;
    cursor: pointer; `


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />

            <InfoContainer>
                <Title>{item.title}</Title>

                <Button>Shop Now</Button>

            </InfoContainer>
        </Container>
    );
}

export default CategoryItem;