import React, { useContext, useState, useEffect } from 'react';
import UserContext from './UserContext';
import axios from 'axios';


const CartPage = () => {
  const userdata = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  
  
    const fetchCartData = async () => {
      if (!userdata || !userdata.user_id) {
        console.error("User data is missing or null");
        return;
      }

      const data = new FormData();
      data.append("user_id", userdata.user_id);
        const response = await axios.post('https://amazon.indianhackerslab.com/get-carts.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (response.data.status === 'success') {
          setCartItems(response.data.data);
        }
    };
    useEffect(() => {
    fetchCartData();
  }, [userdata]); 

  const removeCartData = async (product) => {
    if (!userdata || !userdata.user_id) {
      console.error("User data is missing or null");
      return;
    }
      const data = new FormData();
      data.append("cart_id", product.cart_id);

      const response = await axios.post(
        'https://amazon.indianhackerslab.com/delete-cart.php',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data.status === 'success') {
        fetchCartData();
      } else {
        console.error("Failed to remove cart item:", response.data.message);
      }

  };

  return (
    <div className='container mt-4'>
      <h2 className="mb-4">Your Cart</h2>
        <div className='d-flex flex-row flex-wrap'>
          
          {cartItems.map((product) => (
            <div key={product.cart_id} className='card mx-2 my-2' style={{ width: '18rem' }}>
             
              <img src={product.images} className='card-img-top' alt={product.name} style={{ height: '150px', objectFit: 'cover' }} />
              <div className='card-body itemss'>
                <h5 className='card-title'>{product.name}</h5>
                <button onClick={()=>{removeCartData(product)}}className='btn btn-danger'>Remove Cart</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );

  
};

export default CartPage;




