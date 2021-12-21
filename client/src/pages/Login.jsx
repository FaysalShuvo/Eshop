import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ef233c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: #8d99ae;

  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  margin-top: 20px;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 20px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Do Not Remember Password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
