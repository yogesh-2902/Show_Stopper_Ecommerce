import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #000000a3;
    color: white;
`

const Announcement = () => {
    return (
        <React.Fragment>
            <Container>
                Huge discounts!!! To stop the show.
            </Container>
        </React.Fragment>

    )
}

export default Announcement;