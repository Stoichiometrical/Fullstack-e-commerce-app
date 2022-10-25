import "./navbar.css"
import styled from 'styled-components'
import {
    Search,
    ShoppingCartOutlined
} from '@mui/icons-material'
import {Badge} from "@mui/material";
import { mobile  } from "../../responsive"

const Container = styled.div`
    height:60px;
  ${ mobile({   height : "50px"       }) }
`

const Wrapper = styled.div`
    padding : 10px 20px;
  display : flex;
  align-items: center;
  justify-content: space-between;
  ${ mobile({   padding : "10px 0"       }) }
  
  `

const Left = styled.div`
    flex :1;
  display: flex;
  align-items: center;
    
`
const Language = styled.span`
    font-size: 15px;
  cursor: pointer;
  ${ mobile({   display : "none"       }) }

`
const SearchContainer = styled.div`
    border : solid 1px lightgray;
  display: flex;
  align-items: center;
  margin-left : 25px;
  padding : 5px;

`

const Input = styled.input`
    border : none;
  outline : none;
  ${ mobile({   width : "50px"       }) }
    
`

const Center = styled.div`
  flex :1;
  text-align :center;
    
`
const Logo = styled.h1`
  font-weight : bold;
  ${ mobile({   fontSize : "24px"       }) }
`

const Right = styled.div`
  flex :1;
  display : flex;
  align-items : center;
  justify-content : flex-end;
  ${ mobile({  flex: "2", justifyContent : "center" }  ) }
    
`
const MenuItem = styled.div`
    cursor: pointer;
  font-size:15px;
  margin-left: 25px;
  ${ mobile({   fontSize : "12px"  , marginLeft : "10px"     }) }
`

export default function Navbar(){
    return(
        <>
            <Container>
              <Wrapper>
                  <Left>
                     <Language>EN</Language>
                      <SearchContainer>
                          <Input placeholder="Search"/>
                          <Search style={{ color:"gray", fontSize:"15px" }}/>
                      </SearchContainer>
                  </Left>
                  <Center>
                      <Logo>MARKET</Logo>
                  </Center>
                  <Right>
                      <MenuItem>REGISTER</MenuItem>
                      <MenuItem>SIGN IN</MenuItem>
                      <MenuItem>
                          <Badge badgeContent={4} color="secondary">
                              <ShoppingCartOutlined  color="action" />
                              {/*<Mail color="action" />*/}
                          </Badge>
                      </MenuItem>

                  </Right>
              </Wrapper>
            </Container>

        </>
    )
}