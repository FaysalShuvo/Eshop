import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;

  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 10px;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ESHOP.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est
          temporibus veritatis ex sunt at, perferendis maxime. Eaque aperiam,
          harum qui numquam modi assumenda, asperiores distinctio et suscipit
          culpa quis.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Accessories </ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Useful Links</Title>
        <ContactItem>
          <HomeIcon style={{ marginRight: "10px" }} />
          Omuk, Bangladesh
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +8 00 88 00 00
        </ContactItem>
        <ContactItem>
          <AlternateEmailIcon style={{ marginRight: "10px" }} />
          contact@eshop.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
