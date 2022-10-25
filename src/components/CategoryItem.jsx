import styled from 'styled-components'
import {mobile} from "../responsive";
import {Link} from "react-router-dom";


const Container = styled.div`
    width: 100%;
    flex : 1;
    margin: 3px;
  height:70vh;
  position: relative;
 

`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit : cover;
  ${ mobile({   height : "30vh"       }) }
 
`
const Info = styled.div`
    width:100%;
    height:100%;
    top : 0;
    left : 0;
    position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Title = styled.h1`
  color: white;
  margin-bottom:20px;
`
const Button = styled.button`
    cursor : pointer;
  padding :10px;
  border :none;
  background-color : white;
  color: gray;
  font-weight : 600;

`



export default function CategoryItem({item}){
    return(
        <Container>
            <Link to={`/products/${item.cat}`} >
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}