import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Big Deal! Free Shipping on Orders Over $60</Container>;
};

export default Announcement;
