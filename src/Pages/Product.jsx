import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive.js';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"0px", flexDirection : "column"})}     
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "60vh"})}     
    
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}     
`

const Title = styled.h1`
    font-weight: 300;

`

const Description = styled.p`
    margin: 20px 0;
    line-spacing: 3px;
`

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    width : 50%;
    margin: 30px 0;
    justify-content: space-between;
    ${mobile({width: "100%"})}    
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid lightgray;
    background-color : ${props => props.color};
    margin: 0 5px;
    curson: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;     
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({width: "100%"})}  
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight : 600;
`

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid lightgray;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 1px solid white;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition : all 0.5s ease;
    }
`



const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://i.ibb.co/XsdmR2c/3.png' />
                </ImageContainer>

                <InfoContainer>
                    <Title>Product 1</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores placeat consequuntur quas ducimus quasi necessitatibus dicta reiciendis aut blanditiis illo animi veritatis consequatur mollitia voluptatum vel, earum in sapiente. Fugiat quos aut, culpa nam quas dignissimos eum con sequuntur repudiandae?</Description>
                    <Price>Rs. 4999</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='white' />
                            <FilterColor color='gray' />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>

                            <Button>ADD TO CART</Button>
                    </AddContainer>


                </InfoContainer>



            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product;