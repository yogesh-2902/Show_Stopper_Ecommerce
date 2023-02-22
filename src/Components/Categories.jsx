import React from 'react';
import styled from '@emotion/styled';
import { categories } from '../Data/data';
import CategoryItem from './CategoryItem';
import {mobile} from '../responsive.js';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({flexDirection : "column", padding: "0px"})}
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => <CategoryItem item={item} key={item.id} />)}
        </Container>

    );
}

export default Categories;