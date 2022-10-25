import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:  url("https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Title = styled.h1`
  font-size : 24px;
  font-weight : 300;

`

const Form = styled.div`
  display :flex;
  flex-wrap : wrap;
  //flex-direction: column;
`

const Wrapper =styled.div`
    width : 40%;
  padding : 20px;
  background-color : white;
  ${ mobile({   width : "60vw"       }) }
   
`

const Input = styled.input`
   flex :1 ;
  min-width : 40%;
  margin : 20px 10px 0 0;
  padding : 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin : 20px 0;
`

const Button = styled.button`
  width : 40%;
  border : none;
  padding : 15px 20px;
  cursor : pointer;
  background-color: teal;
  color : white;
  ${ mobile({   width : "50%"    }) }
`

export default function Register(){
    return(

        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>By creating an account,l consent to processing of my personal data according to the <b>Privacy Policy</b></Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>

        </Container>
    )
}