import styled from 'styled-components'
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@mui/icons-material";
import {mobile} from "../responsive";

const Container = styled.div`
    display : flex;
  ${ mobile({   flexDirection : "column"       }) }
  

`

const Left = styled.div`
    flex: 1;
  padding : 20px;

`
const Center = styled.div`
  flex: 1;
  padding : 20px;
  ${ mobile({   display : "none"       }) }
`
const Right = styled.div`
  flex: 1;
  padding : 20px;
  ${ mobile({   backgroundColor : "lightgray"       }) }
`

const Logo = styled.h1`

`

const Desc = styled.div`
    margin : 20px 0;
    
`

const SocialContainer = styled.div`
    display : flex;
    //justify-content: center;
    //align-items: center;
    
`

const SocialIcon = styled.div`
  width : 40px;
  height : 40px;
  border-radius :50%;
  color : white;
  background-color :#${props=>props.color};
  margin-right : 10px;
  display : flex;
  justify-content : center;
  align-items : center;
    
`

const Title = styled.h3`
    margin-bottom:30px;

`

const List = styled.ul`
  margin: 0;
  padding : 0;
  list-style : none;
  display : flex;
  flex-wrap : wrap;
`

const ListItem = styled.li`
    width: 50%;
  margin-bottom : 10px;
    

`

const ContactItem = styled.div`
    margin-bottom : 10px;
  display: flex;
  align-items : center;

`
const Payment = styled.img`
  width : 80%;
  height : 40px;
  margin-bottom: 10px;
`


export default function Footer(){
    return(
        <Container>
            <Left>
                <Logo>MARKET</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non massa et massa suscipit consectetur sit amet commodo urna. Nam laoreet dui id mattis hendrerit. Nulla ullamcorper dolor sed sapien egestas molestie.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                       <Instagram />
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>

                    <SocialIcon color="E60023">
                     <Pinterest/>
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
               <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Woman's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
              <Title>Contact Us </Title>
                <ContactItem><Room style={{ marginRight: "10px" }}/> 32 Andilson,Broming,Germany  </ContactItem>
                <ContactItem> <Phone style={{ marginRight: "10px" }} />  +23058417209</ContactItem>
                <ContactItem> <MailOutline style={{ marginRight: "10px" }} /> market@campus.com </ContactItem>
                <Payment src="https://img.favpng.com/7/1/14/paypal-the-next-level-service-payment-gateway-industry-png-favpng-EvXqtD4t2JHApuzBEBMCyZNa4.jpg"/>
            </Right>

        </Container>
    )

}