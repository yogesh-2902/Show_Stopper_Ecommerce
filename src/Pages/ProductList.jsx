import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive.js";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 36px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sortPrice, setSortPrice] = useState("newest");

  const handleFilters = (event) => {
    const obtainedValue = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: obtainedValue,
    });
  };

//   console.log(filters);

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Dresses.</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>

            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Pink</Option>
            <Option>Yellow</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>

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

          <Select onChange={(event) => setSortPrice(event.target.value)}>
            <Option value="new"> Newest </Option>
            <Option value="ascending">Price (low to high)</Option>
            <Option value="descending">Price (high to low)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products categ={category} filters={filters} sort={sortPrice}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
