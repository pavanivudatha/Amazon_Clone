import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { FaStar, FaRegStar } from "react-icons/fa";
const ProductDetails = () => {
        const parameters=useParams()
        var product_id=parameters.product_id
        const [details,changedetails]=useState(null)
        const FetchData=async()=>{
            const data=new FormData()
            data.append("product_id",product_id)
            const response=await axios.post("https://amazon.indianhackerslab.com/get-product-details.php",data,{header:{'content-type':'multipart/form-data'}})
            if(response)
            {
                console.log(response)
                changedetails(response.data.product_data)
            }
        }
    useEffect(()=>{
        FetchData()
    },[product_id])
  return (
    <div className="container mt-5">
      {details ? (
        <div className="row shadow-lg p-4 bg-white rounded">
          {/* Left Section - Product Image */}
          <div className="col-md-5 text-center">
            <img
              className="img-fluid border rounded"
              src={details.images}
              alt={details.name}
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          {/* Right Section - Product Details */}
          <div className="col-md-7">
            {/* Product Name */}
            <h2 className="fw-bold">{details.name}</h2>

            {/* Brand & Category */}
            <p className="text-muted mb-1">
              Brand: <strong>{details.brand}</strong> | Category:{" "}
              <strong>{details.category_name}</strong>
            </p>

            {/* Ratings */}
            <p className="mb-2">
              {Array.from({ length: 5 }, (_, index) =>
                index < details.rating ? (
                  <FaStar key={index} color="#FFD700" />
                ) : (
                  <FaRegStar key={index} color="#ccc" />
                )
              )}
              <span className="ms-2 text-muted">({details.ratings} ratings)</span>
            </p>

            {/* Pricing Section */}
            <h3 className="text-success fw-bold">
              ₹{details.price}{" "}
              <span className="text-danger ms-2" style={{ fontSize: "18px" }}>
                <del>₹{details.cutoff_price}</del>
              </span>
              <span className="badge bg-danger ms-2">{details.discount}% OFF</span>
            </h3>

            {/* Description */}
            <p className="mt-3">{details.description}</p>

            {/* Stock Availability */}
            {details.stock_quantity > 0 ? (
              <p className="text-success fw-bold">In Stock</p>
            ) : (
              <p className="text-danger fw-bold">Out of Stock</p>
            )}

            {/* Buy Now & Add to Cart Buttons */}
            <div className="mt-4">
              <button className="btn btn-warning me-3 px-4 py-2">Add to Cart</button>
              <button className="btn btn-primary px-4 py-2">Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h5>Loading product details...</h5>
        </div>
      )}
    </div>
  )

}
export default ProductDetails