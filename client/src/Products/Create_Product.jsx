import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
import Axios from 'axios'
const Create_Product = () => {
    let [isCreated,setCreated] = useState(false)
    let [product,setProduct]=useState({
        name:"",
        price:"",
        image:"",
        qty:"",
        info:""
    })
   let updateHandler = (event)=>{
    setProduct({...product,[event.target.name]:event.target.value})
   } 
   let imageHandler = (event)=>{
    let reader = new FileReader();
    let imageFile = event.target.files[0];
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load",()=>{
            console.log();
            setProduct({...product,image:reader.result})
    })
   }
   let submitHandler=(event)=>{
        event.preventDefault()
        Axios.post('http://127.0.0.1:5000/api/products/',product)
              .then((response)=>{
                setCreated(true)
              })
              .catch(()=>{})    
   }
   
   return (
    <div className='container mt-5'>
    <pre>{JSON.stringify(product)}</pre>    
    <pre>Value:{isCreated}</pre>
    <div className="row">
    {
        isCreated? <><Navigate to="/products"  /></> : <>
          <div className="col-md-4">
               <div className="card">
                <div className="card-header btn btn-dark ">
                    <h4>Create New Product</h4>
                </div>
                <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className='form-group'>
                        <input onChange={updateHandler} name="name" className='form-control' type="text" placeholder='Product Name' />
                    </div>
                    <div className='form-group'>
                        <input onInput={imageHandler} name="image" className='form-control' type="file" />
                    </div>
                    <div className='form-group'>
                        <input onChange={updateHandler} name="price" className='form-control' type="number" placeholder='Price' />
                    </div>
                    <div className='form-group'>
                        <input onChange={updateHandler} name="qty" className='form-control' type="number" placeholder='QTY' />
                    </div>
                    <div className='form-group'>
                        <input onChange={updateHandler} name="info" className='form-control' type="text" placeholder='Additional Info' />
                    </div>
                    <input type="submit" value="Create Product" className='btn btn-warning' />
                </form>
                </div>
               </div>
            </div>
        </>
    }
          
        </div>
    </div>
  )
}

export default Create_Product