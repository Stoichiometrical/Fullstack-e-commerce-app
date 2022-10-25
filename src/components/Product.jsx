import styled from 'styled-components'
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";


const Info =styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;


`
const Container =styled.div`
  flex: 1;
  margin: 5px;
  min-width : 280px;
  height:350px;
  display: flex;
  align-items : center;
  justify-content : center;
  background-color: #f5fbfd;
  position : relative;
  
  
  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle =styled.div`
    width: 200px;
    height: 200px;
  border-radius:50%;
  background-color : white;
  position : absolute;
  
`

const Icon =styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  margin-right : 10px;
  background-color : white;
  display: flex;
  align-items : center;
  justify-content : center;
  cursor : pointer;
  transition: all 0.5s ease;
  
  &:hover{
    background-color : #e9f5f5;
    transform : scale(1.2)
  }
  
`


const Image =styled.img`
    width:100%;
   height:75%;
  object-fit: cover;
  z-index:2;

`

export default function Product({product}) {
    return (
        <Container>
            <Circle/>
            <Image src={product.img}/>
            <Info>
                <Icon><ShoppingCartOutlined/></Icon>
                <Icon> <SearchOutlined/> </Icon>
                <Icon> <FavoriteBorderOutlined/> </Icon>
            </Info>
        </Container>
    )
}