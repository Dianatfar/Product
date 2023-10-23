
import Product from "../Product/Product";
import './ProductList.css'
const ProductList =({Products,onDelete})=>{
    return(<div className="product-List">
       {Products.map((item)=>{
        return <Product key={item.id} product={item} onDelete={onDelete}/>

       })}
    </div>)




}
export default ProductList;