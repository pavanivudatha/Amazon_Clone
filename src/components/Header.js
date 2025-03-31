import download from '../images/download.jpg'
import cart from '../images/cart.png'
import menu from '../images/menu.png'
import flag from '../images/flag.png'
import location from '../images/location.png'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import Checklogin from '../pages/Checklogin'
import userContext from '../pages/UserContext'
import image from '../images/image.png'



const Header = () => {
    const [loggedin,setLoggedin]=useState(Checklogin())
    var users=useContext(userContext)

  return (
    <div className='header'>
    <div className='primary-navbar'>
        <Link to="/"><img src={download} className='img' alt="Amazon" /></Link>
        <div className='location'>
        <img src={location} className="loc" alt=""></img>
            <div className="location-text">
                <p>Delivery to Eluru</p>
                <h5>Update Location</h5>
            </div>
        </div>
        <div >
            <img className="search-section" src={image} alt=''></img>
        </div>
        <div className='lang'>
            <img src={flag} className="flag" alt="" />
            <h5>EN</h5>
        </div>
        <div className='account'>
            {loggedin?<><p>Hello, {users? users.first_name:"Sign in"}</p>
            <h5>Accounts & Lists</h5></>:<>
            <p>Hello,Sign in</p>
            <h5>Accounts & Lists</h5>
            </>}
        </div>
        <div className='orders'>
            <p>Returns<br /> & Orders</p>
        </div>
        <Link to={'/cart'} className='text-decoration-none'>
        <div className='lang'> 
            <img src={cart} className='cartimg' alt="" />
            <h5>Cart</h5>
        </div>
        </Link>
        
    </div>
    

    <div className='secondary-navbar'>
        <div className='lang'>
            <img src={menu} alt="" className='menu' />
            <Link to="/" className="text-decoration-none text-dark"><p>All</p></Link>
        </div>
        <Link to="/products" className="text-decoration-none text-dark"> <p>MX Player</p> </Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>Sell</p></Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>Best Seller</p></Link>
        <Link to="/products" className="text-decoration-none text-dark"> <p>Today's Deals</p> </Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>Mobiles</p></Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>Customer Service</p></Link>
        <Link to="/products" className="text-decoration-none text-dark"> <p>Electronics</p> </Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>Prime</p></Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>New Releases</p></Link>
        <Link to="/products" className="text-decoration-none text-dark"> <p>Amazon Pay</p> </Link>
        <Link to="/products" className="text-decoration-none text-dark"><p>Home & Kitchen</p></Link>
        {loggedin?<>
        <Link to={'/account'}className='btn btn-primary'>Account</Link>
        </>:<>
        <Link to={'/login'} className='btn btn-primary'>Log in</Link>
        <Link to={'/signin'} className='btn btn-warning'>Sign in</Link>
        </>

        }
        
        {/*<img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/March2025/DupahiyaS1/400x39-SWM_NP._CB549153428_.jpg" alt="" />*/}
         </div>
   </div>

  )
}

export default Header