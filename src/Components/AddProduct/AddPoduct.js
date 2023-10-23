import {useState} from 'react'
import './AddProduct.css'
const AddProduct =({onAdd})=>{
    const [title,setTitle]=useState('');
    const SubmitForm =(event)=>{
        event.preventDefault()
        onAdd({title})
        setTitle('')
    }

    return(
    <div>

        <form className='add-product-form' onSubmit={SubmitForm}>
            <div className='form-control'>
                <input type="text" placeholder="Add Product" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <button type="submit" className='form-btn' >Add</button>
        </form>
    </div>
    )


}

export default AddProduct;