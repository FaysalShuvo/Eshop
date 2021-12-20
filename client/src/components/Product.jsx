import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(244, 194, 194, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 15, 15);
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgb(244, 194, 194, 0.3);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: crimson;
    transform: scale(1.1);
    color: white;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingBasketIcon />
        </Icon>
        <Icon>
          <SearchRoundedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
