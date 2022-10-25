import styled from 'styled-components'
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";

const Container = styled.div`
    

`
const Wrapper = styled.div`
  padding : 50px;
  display : flex;
  ${ mobile({   flexDirection : "column" , padding: "10px"      }) }

`



const Title = styled.h1`
    font-weight: 200;

`

const InfoContainer= styled.div`
  flex:1;
  padding : 0 50px;
  ${ mobile({   padding: "10px"       }) }

`

const Desc = styled.div`
    margin: 20px 0;

`
const Price= styled.span`
    font-weight:100;
  font-size : 30px;

`


const ImgContainer=styled.div`
  flex:1;
`

const Img =styled.img`
    width:100%;
  height:90vh;
  object-fit: cover;
  ${ mobile({   height : "30vh"       }) }
  
  
`


const FilterContainer = styled.div`
  width : 50%;
    display : flex;
  justify-content : space-between;
  margin :30px 0;
  ${ mobile({   width : "100%"       }) }

`

const Filter =styled.div`
    display: flex;
  align-items: center;

`

const FilterTitle = styled.h1`
    font-size:20px;
  font-weight :200;

`

const FilterColor = styled.div`
  width : 20px;
  height : 20px;
  border-radius : 50%;
  background-color :${ props => props.color};
  margin : 0 5px;
  cursor : pointer;

`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  

`

const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
    display:flex;
  align-items:center;
  justify-content : space-between;
  width : 50%;
  ${ mobile({   width : "100%"       }) }

`

const AmountContainer = styled.div`
    display: flex;
    font-weight : 700;
    align-items: center;
  

`

const Amount = styled.span`
    width: 30px;
  height: 30px;
  border-radius : 10px;
  border : 1px solid teal;
  display : flex;
  align-items : center;
  justify-content : center;
  margin : 0 5px;

`

const Button =styled.button`
  padding : 15px;
  border : 2px solid teal;
  background-color : white;
  cursor : pointer;
  font-weight :500;
  
  &:hover{
    background-color : #f8f4f4;
  }
`

export default function Product(){
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Img src="https://images.pexels.com/photos/9725690/pexels-photo-9725690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Women's Blouse</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Hendrerit tortor. Duis ligula ipsum, consequat in fringilla ut, dapibus sit amet enim. Donec vestibulum feugiat purus fermentum dictum. Proin aliquet leo ac justo egestas, vitae posuere dolor congu</Desc>
                    <Price>$200</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Add/>
                            <Amount>1</Amount>
                            <Remove/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>

            </Wrapper>

            <Newsletter/>
            <Footer/>
        </Container>
    )
}