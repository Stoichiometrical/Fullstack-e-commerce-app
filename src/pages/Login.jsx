import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:  url("https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center no-repeat;
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
  flex-direction: column;
  ${ mobile({   textAlign: "center"  ,justifyContent : "center"     }) }
`

const Wrapper =styled.div`
    width : 25%;
  padding : 20px;
  background-color : white;
  ${ mobile({   width : "50vw"       }) }
   
`

const Input = styled.input`
   flex :1 ;
  min-width : 40%;
  margin :  10px 0;
  padding : 10px;
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

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom : 10px;
`

export default function Login(){
    return(

        <Container>
            <Wrapper>
                <Title>SIGN IN TO YOUR ACCOUNT</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>LOG IN</Button>
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>

        </Container>
    )
}