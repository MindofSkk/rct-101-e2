import React from "react";
import Addproduct from "../components/AddProduct";
import Pagination from "../components/Pagination";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios"
import { useEffect ,useState} from "react";
import Product from "./Product";
const Products = () => {

  const[page,setpage]=useState(1)
  const[lastpage,setlastpage]=useState(0)
  const[product,setproduct]=useState([])
  useEffect(()=>{
    const getdata=async()=>{
      let r=await axios.get(`http://localhost:8080/products?_page=${page}&_limit=5`);
      console.log(r.data)
      setproduct(r.data)
    }
    getdata()
  },[page])
  
  return (
    <Flex className="ui">
      {/*  AddProduct */}
      
      <Addproduct/> 

     {/* List of Products */}

     {product.map((post,index)=>{
      return(
        <Grid key={index}>
                 
       <div className="test">  <Product  {...post}/></div>
        
           
           
      </Grid>
       
      )
      })}
    
      <Pagination/>
      {/* Pagination */}
     
    </Flex>
  
      
  );
};

export default Products;