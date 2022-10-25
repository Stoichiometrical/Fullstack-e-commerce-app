import styled from 'styled-components'
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";


const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
  ${ mobile({  padding : "10px"       }) }

`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`

const Top = styled.div`
    display : flex;
  align-items : center;
  justify-content : space-between;
  padding:20px;
    
`

const TopButton = styled.button`
    padding: 10px;
    font-weight : 600;
    cursor: pointer;
    margin : 10px;
  border : ${props=>props.type==="filled" && "none"};
  background-color :${props=>props.type==="filled" ? "black" : "transparent"};
  color : ${props=>props.type==="filled" && "white"}
`

const TopTexts = styled.div`
  ${ mobile({  display : "none"       }) }
`

const TopText = styled.span`
    text-decoration: underline;
     cursor: pointer;
     margin: 0 10px;

`


const Bottom = styled.div`
    display : flex;
  justify-content : space-between;
  ${ mobile({  flexDirection : "column",margin : "10px 0"       }) }
`

const Info = styled.div`
   flex : 3;
  
`
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding : 20px;
  height : 60vh;
`

const Details = styled.div`
  padding : 20px;
  display : flex;
  flex-direction : column;
  justify-content : space-around;
`

const Product = styled.div`
   display: flex;
  justify-content : space-between;
  margin-top : 15px;
  ${ mobile({  flexDirection : "column"     }) }
`

const ProductName = styled.h1`
    font-size : 20px;

`

const Hr = styled.hr`
    background-color : #eeee;
  border : none;
  height : 1px;
  margin : 20px 0;
  
`

const ProductId = styled.span``

const ProductColor = styled.span`
  width : 20px;
  height : 20px;
  border-radius : 50%;
  background-color : ${props=>props.color};
`

const ProductDetail = styled.div`
  flex : 2;
  display :flex;
`

const ProductSize = styled.span``

const Image = styled.img`
width : 200px;
  `

const PriceDetail = styled.div`
  flex : 1;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`

const PriceAmountContainer = styled.div`
  display : flex;
  align-items : center;
  margin-bottom : 20px;
`

const ProductAmount = styled.div`
font-size : 24px;
  margin : 5px;
  ${ mobile({  margin : "5px 15px "       }) }
`

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${ mobile({  marginBottom : "20px "       }) }
`

const SummaryItem  = styled.div`
  margin : 30px 0;
  display : flex;
  justify-content : space-between;
  font-weight : ${ props=> props.type === "total" && "500" };
  font-size : ${ props=> props.type === "total" && "24px" };
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryTitle = styled.h1`
  font-weight : 200;
`

const Button = styled.button`
    width : 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight:600;

`



export default function Cart(){
    return(
        <Container>
            <Navbar/>
            <Announcement/>
           <Wrapper>
               <Title>YOUR BAG</Title>
               <Top>
                   <TopButton>CONTINUE SHOPPING</TopButton>
                   <TopTexts>
                       <TopText>Shopping Bag(2)</TopText>
                       <TopText>Wishlist(0)</TopText>
                   </TopTexts>
                   <TopButton type="filled">CHECKOUT NOW</TopButton>

               </Top>
               <Bottom>
                   <Info>
                       <Product>
                           <ProductDetail>
                               <Image src ="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                               <Details>
                                   <ProductName><b>Product :</b>BLACKSTONE THUNDERS</ProductName>
                                   <ProductId><b>ID :</b>1235098</ProductId>
                                   <ProductColor color="yellow"/>
                                   <ProductSize><b>Size:</b>78</ProductSize>

                               </Details>
                           </ProductDetail>
                           <PriceDetail>
                               <PriceAmountContainer>
                                   <Add/>
                                   <ProductAmount>300</ProductAmount>
                                   <Remove/>
                               </PriceAmountContainer>
                               <ProductPrice>$ 200</ProductPrice>

                           </PriceDetail>
                       </Product>

                       <Hr/>

                       <Product>
                               <ProductDetail>
                                   <Image src ="https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                                   <Details>
                                       <ProductName><b>Product :</b>COPA BLACKS</ProductName>
                                       <ProductId><b>ID :</b>12364</ProductId>
                                       <ProductColor color="black"/>
                                       <ProductSize><b>Size:</b>42</ProductSize>

                                   </Details>
                               </ProductDetail>
                               <PriceDetail>
                                   <PriceAmountContainer>
                                       <Add/>
                                       <ProductAmount>5</ProductAmount>
                                       <Remove/>
                                   </PriceAmountContainer>
                                   <ProductPrice>$ 700</ProductPrice>

                               </PriceDetail>
                           </Product>
                   </Info>
                   <Summary>
                       <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                       <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>$ 1500</SummaryItemPrice>
                       </SummaryItem>

                       <SummaryItem>
                           <SummaryItemText>Estimated Shipping</SummaryItemText>
                           <SummaryItemPrice>$ 100</SummaryItemPrice>
                       </SummaryItem>

                       <SummaryItem>
                           <SummaryItemText>Shipping Discount</SummaryItemText>
                           <SummaryItemPrice>$ -50</SummaryItemPrice>
                       </SummaryItem>

                       <SummaryItem type= "total">
                           <SummaryItemText >Total</SummaryItemText>
                           <SummaryItemPrice>$ 1000</SummaryItemPrice>
                       </SummaryItem>
                       <Button>CHECK OUT NOW</Button>
                   </Summary>

               </Bottom>
           </Wrapper>
            <Footer/>

        </Container>
    )
}