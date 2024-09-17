import React,{useEffect, useState} from 'react'
import  Axios  from 'axios'
const Products = () => {
  let [products,setProducts]=useState([])
  useEffect(()=>{
    Axios.get(' http://127.0.0.1:5000/api/products')
    .then((response)=>{
      setProducts(response.data)
    })
    .catch()
  },[])
  return <>
           <pre>{JSON.stringify(products)}</pre>
           <div className="container">

           <div className="row">
            {
              products.length>0 ? <>
              {
                  products.map((product)=>{
                    return <div className='col-md-4'>
                            <div className="card">
                              <div className="card-header">
                                <img src={product.image} alt="" width={'220px'} />
                              </div>
                              <div className="card-body">
                                <ul className='list-group'>
                                  <li className='list-group-item'>{product.name}</li>
                                  <li className='list-group-item'>{product.price}</li>
                                  <li className='list-group-item'><button className='btn btn-warning'>Add2Cart</button></li>
                                </ul>
                              </div>
                            </div>
                           </div>

                  })


              }
              
              </>:<>No Data</>
            }    
           </div>
           </div>
        </>
}

export default Products