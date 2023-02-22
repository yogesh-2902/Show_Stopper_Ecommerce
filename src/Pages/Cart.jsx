import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive.js';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight:300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && "none"};
    background-color: ${props => props.type === 'filled' ? "black" : "transparent"};
    color: ${props => props.type === 'filled' && "white"};
`

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px; 
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
flex: 3; 

`

const Product = styled.div`
    display: flex;
    justify-content: space-between; 
    ${mobile({flexDirection: "column"})}
`

const ProductDetails = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color : ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.span`
    flex: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px; 

`

const ProductAmount = styled.div`
    font-size: 24px; 
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
    
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200; 
    ${mobile({marginBottom: "20px"})}
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray; 
    border-radius: 10px;
    padding: 20px; 
    height: 50vh;
`

const SummaryTitle = styled.h1` 
    font-weight: 200; 
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    
`

const SummaryItemText = styled.span`
    font-weight: ${props => props.type === "total" && 600};
    font-size: ${props => props.type === "total" && "18px"};`

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width:100%;
    padding: 10px;
    background-color: black;
    color:white;
    curson: pointer; 
`

const Hr = styled.hr`
    background-color: lightgray;
`



const Cart = () => {
    return(
        <Container>
            <Navbar/>
            <Announcement/> 

            <Wrapper>
                <Title>Your Style.</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING.</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your WishList (4)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECK OUT.</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/XsdmR2c/3.png'/>
                                <Details>
                                    <ProductName>Product: <b>Lorem, ipsum.</b></ProductName>
                                    <ProductId>Product ID: <b>456645</b></ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>Product Size: <b>XL</b></ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetail>   
                                    <ProductAmountContainer>
                                         <AddIcon/>
                                         <ProductAmount>2</ProductAmount>
                                         <RemoveIcon/>
                                    </ProductAmountContainer>

                                    <ProductPrice>Rs. 1599</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr/>


                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/XsdmR2c/3.png'/>
                                <Details>
                                    <ProductName>Product: <b>Lorem, ipsum.</b></ProductName>
                                    <ProductId>Product ID: <b>456645</b></ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>Product Size: <b>XL</b></ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetail>   
                                    <ProductAmountContainer>
                                         <AddIcon/>
                                         <ProductAmount>2</ProductAmount>
                                         <RemoveIcon/>
                                    </ProductAmountContainer>

                                    <ProductPrice>Rs. 1599</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr/>

                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/XsdmR2c/3.png'/>
                                <Details>
                                    <ProductName>Product: <b>Lorem, ipsum.</b></ProductName>
                                    <ProductId>Product ID: <b>456645</b></ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>Product Size: <b>XL</b></ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetail>   
                                    <ProductAmountContainer>
                                         <AddIcon/>
                                         <ProductAmount>2</ProductAmount>
                                         <RemoveIcon/>
                                    </ProductAmountContainer>

                                    <ProductPrice>Rs. 1599</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr/>

                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/XsdmR2c/3.png'/>
                                <Details>
                                    <ProductName>Product: <b>Lorem, ipsum.</b></ProductName>
                                    <ProductId>Product ID: <b>456645</b></ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>Product Size: <b>XL</b></ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetail>   
                                    <ProductAmountContainer>
                                         <AddIcon/>
                                         <ProductAmount>2</ProductAmount>
                                         <RemoveIcon/>
                                    </ProductAmountContainer>

                                    <ProductPrice>Rs. 1599</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr/>

                    </Info>
                    <Summary>
                        <SummaryTitle>
                            Order Summary
                        </SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs. 5999</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs. 150.05</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs. -100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>Rs. 4500</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECK OUT NOW.</Button>
                    </Summary>
                </Bottom>
            </Wrapper>

            <Footer/> 
        </Container>
    )
}

export default Cart;