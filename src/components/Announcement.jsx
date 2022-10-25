import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
  background-color:teal;
  color: white;
  display :flex;
  align-items: center;
  justify-content: center;
  font-size:14px;
  font-weight :500;
    
`
export default function Announcement(){
    return(
        <>
            <Container>
                Super Deal ! Get a Rs200 Discount on orders above Rs2000
            </Container>
        </>
    )
}