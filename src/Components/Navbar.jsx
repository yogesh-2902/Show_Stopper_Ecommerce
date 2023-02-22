import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive.js';

const Container = styled.nav`
        height : 60px;
        border-bottom: 1px solid gray;
        ${mobile({height : "50px"})}
       
    `

const Wrapper = styled.div`
        padding : 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${mobile({padding : "10px 0"})}
`

const Left = styled.div`
    display : flex;
    flex: 1;
    align-items : center;
    
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex : 1;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    flex: 1;
    ${mobile({flex: 2, justifyContent : "center"})}
`

const Langauage = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display : "none"})}
`

const SearchContainer = styled.div`
    display: flex;
    align-items : center;
    margin-left: 25px;
    border: 0.5px solid lightgray; 
    padding: 5px;
`

const Input = styled.input`
    border : none;
    padding: 5px;
    ${mobile({width : "50px"})}
`

const Logo = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    ${mobile({fontSize : "10px", fontWeight : "800"})}
`

const MenuItem = styled.div`
    font-size:16px;
    cursor: pointer; 
    margin-left: 25px;
    ${mobile({fontSize : "12px", marginLeft : "10px"})}
`



const Navbar = () => {

    return (
        <React.Fragment>
            <Container>
                <Wrapper>
                    <Left>
                        <Langauage>
                            EN
                        </Langauage>

                        <SearchContainer>
                            <Input placeholder='Search..'/>
                            <SearchOutlinedIcon style={{ color: "gray", fontSize: 16 }} />
                        </SearchContainer>
                    </Left>

                    <Center>
                        <Logo>
                            SHOW STOPPER.
                        </Logo>
                    </Center>

                    <Right>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign Up</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>

                        </MenuItem>
                    </Right>

                </Wrapper>
            </Container>
        </React.Fragment>
    )
}

export default Navbar;
