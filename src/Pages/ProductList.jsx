import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
import {mobile} from '../responsive.js';

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
    font-size: 36px; 
`

const FilterContainer = styled.div`
    display: flex;
    justify-content : space-between;
    
`

const Filter = styled.div`
    display: flex;
    margin: 20px;
    ${mobile({margin : "0 20px", display:"flex", flexDirection: "column"})}   
`

const FilterText = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight : "0"})}     
    
`
const Select  = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin : "10px 0px"})}   
`

const Option = styled.option``




const ProductList = () => {
    console.log("ProductList");
    return(
        <Container>
            <Navbar/>
            <Announcement/>

            <Title>
                Dresses.
            </Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>

                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Black</Option>
                        <Option>Pink</Option>
                        <Option>Yellow</Option>

                    </Select>

                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>

                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>

                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    
                    <Select>
                        <Option selected>
                            Newest
                        </Option>

                        <Option>Price (low to high)</Option>
                        <Option>Price (high to low)</Option>

                    </Select>
                    
                    
                    </Filter>
            </FilterContainer>

            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductList;