import { useState } from "react"
import ProductList from "./Components/ProducList/ProcusList"
import AddProduct from "./Components/AddProduct/AddPoduct";
const  App= ()=>{

  const [Products,setProducts] =useState([
    {id:1,title:'Book 1'},
    {id:2,title:'Book 2'},
    {id:3,title:'Book 3'},

])
const deleteProduct=(id)=>{

  setProducts(Products.filter((item)=>item.id !==id))
}
const addProduct=(title)=>{
  const id=Math.floor(Math.random()*1000)
  const newProduct= {id,...title}
  setProducts([...Products,newProduct])
}
console.log(Products)

  return (

    <div className="container">
      <AddProduct onAdd={addProduct}/>
    <ProductList Products={Products} onDelete={deleteProduct}/>
    </div>
    
   
    
    
  )
}

export default App