import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderInfo } from "../Data/data.js";
import {mobile} from '../responsive.js';

const Container = styled.div`
    position: relative;
    width : 100%;
    height: 100vh;
    display:flex;
    overflow: hidden;
    ${mobile({display : "none"})}
`

const Arrow = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    top:0;
    bottom: 0;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer; 
    opacity: 0.7;
    z-index: 1;
`

const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width : 100vw;
    height: 100vh;
    display: flex;
    align-items : center;
    background-color : #${props => props.bg};
    
`

const ImageContainer = styled.div`
    flex:1;
    height: 100%;
    width: 50%;
`

const Image = styled.img`
    height: 80%;
    width : 100%;
    
  
`

const InformationContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px
`

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
`



const Slider = () => {
    //handle Click
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };




    return (
        <React.Fragment>
            <Container>

                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlinedIcon />
                </Arrow>

                <Wrapper slideIndex={slideIndex}>

                    {sliderInfo.map((item) =>
                        <Slide bg={item.bg} key={item.id}>

                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>

                            <InformationContainer>
                                <Title>{item.heading}</Title>
                                <Description>{item.desc}</Description>
                                <Button>Shop Now</Button>
                            </InformationContainer>
                        </Slide>)}

                </Wrapper>



                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlinedIcon />
                </Arrow>
            </Container>
        </React.Fragment>
    )
}

export default Slider;