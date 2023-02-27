import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../Data/data.js";
import ProductItem from "./ProductItem";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ categ, filters, sort }) => {
  // console.log(categ, filters, sort);
  //fetch data
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          categ
            ? `http://localhost:5000/api/products?category=${categ}`
            : "http://localhost:5000/api/products"
        );
        // console.log(response);
        setProducts(response.data);
      } catch (error) {}
    };
    getProducts();
  }, [categ]);

  useEffect(() => {
    categ &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, categ, filters]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
