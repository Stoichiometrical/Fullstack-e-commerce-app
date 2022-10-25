import styled from 'styled-components'
import CategoryItem from "./CategoryItem";
import {categories} from "../data";
import {mobile} from "../responsive";



const Container = styled.div`
    display : flex;
    padding : 20px;
  justify-content: space-between;
  ${ mobile({   flexDirection : "column" , padding : "0"      }) }

`

export default function Categories(){
    return(
        <Container>
            {
                categories.map((item)=>(
                    <CategoryItem item={item} key={item.id}/>
                ))
            }

        </Container>
    )
}