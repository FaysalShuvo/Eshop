import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #ef233c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: white;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: white;
  margin-bottom: 20px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  outline: none;
  padding: 10px;
`;
const Button = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: #2b2d42;
  color: white;
`;

const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title>NewsLetter</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          sit.
        </Description>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Container>
    </div>
  );
};

export default Newsletter;