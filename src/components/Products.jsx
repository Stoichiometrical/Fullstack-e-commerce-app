import styled from 'styled-components'
import {popularProducts} from "../data";
import Product from "./Product";
import {useEffect, useState} from "react";
import axios from "axios"


const Container =styled.div`
  display : flex;
  padding : 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function Products({cat,filters , sort}){
    // console.log(cat,filters , sort)

    const [products,setProducts] =useState([])
    const [filteredProducts,setFilteredProducts] =useState([])

    useEffect(() =>{
        const getProducts = async ()=>{
            try{
             const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products" )
                // console.log(res.data)
                setProducts(res.data)
            }catch (e) {
                console.log(e)
            }
        };
        getProducts();

    },[cat])

    useEffect(()=>{
        cat && setFilteredProducts(
            products.filter((item)=> Object.entries(filters).every(([key , value])=> item[key].includes(value)
            ))
        )
        console.log("Here are the filtered Products : " + filteredProducts)
    }, [products,cat, filters])


    return(
        <Container>
            {
              popularProducts.map((product)=>(
                    <Product product={product} key={product.id}/>
                ))

            }



        </Container>
    )
}