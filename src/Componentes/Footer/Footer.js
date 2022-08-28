import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import Footer from "../Footer/Footer.css";



const Footer = () => {
  return (
    <Container-Footer>
      <Left>
        <Logo>DECOR-INSPIRE</Logo>
        <Desc>
          Buscamos hacer tu hogar un lugar confortable para vivir y soñar.
        </Desc>
        <SocialContainer>
          <SocialIcon >
            <Facebook />
          </SocialIcon>
          <SocialIcon >
            <Instagram />
          </SocialIcon>
          <SocialIcon >
            <Twitter />
          </SocialIcon>
          <SocialIcon >
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Utiles</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Sillones</ListItem>
          <ListItem>Sillas</ListItem>
          <ListItem>Iluminacion</ListItem>
          <ListItem>Varios decoracion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Avda. Libertador 1850 Ciudad de Buenos Aires
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +54911 4381 9574
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@decorationinspire.com.ar
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container-Footer>
  );
};

export default Footer;
