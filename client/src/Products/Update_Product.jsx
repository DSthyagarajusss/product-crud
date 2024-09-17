import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';

const Update_Product = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  });

  const [isUpdated, setUpdated] = useState(false);
  const [file, setFile] = useState(null); // For handling file input
  const { id } = useParams(); // Destructure id from useParams

  const updateInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the selected file
  };

  useEffect(() => { 
    const url = `http://127.0.0.1:5000/api/products/${id}`;
    Axios.get(url)
      .then((resp) => {
        setProduct(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]); // Add id to dependency array

  const submitHandler = (event) => {
    event.preventDefault();

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('qty', product.qty);
    formData.append('info', product.info);
    
    if (file) {
      formData.append('image', file); // Append the file
    }

    const url = `http://127.0.0.1:5000/api/products/${id}`;
    Axios.put(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Specify content type for file uploads
      }
    })
      .then((resp) => {
        console.log("Product updated successfully:", resp.data);
        setUpdated(true);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        {isUpdated && <Navigate to="/admin" />}
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3>Update Product</h3>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className='form-group'>
                    <input
                      name="name"
                      onChange={updateInput}
                      value={product.name}
                      placeholder='Product Name'
                      type="text"
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      name="image"
                      type="file"
                      className='form-control'
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      name="price"
                      onChange={updateInput}
                      value={product.price}
                      placeholder='Price'
                      type="number"
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      name="qty"
                      onChange={updateInput}
                      value={product.qty}
                      placeholder='QTY'
                      type="number"
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      name="info"
                      onChange={updateInput}
                      value={product.info}
                      placeholder='Additional Info'
                      type="text"
                      className='form-control'
                    />
                  </div>
                  <input
                    type="submit"
                    value="Update Product"
                    className='btn btn-primary'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update_Product;
