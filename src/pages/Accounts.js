import React, { useContext } from 'react'
import userContext from './UserContext'


const Accounts = () => {

   var users=useContext(userContext) 
   const logout=()=>{
    localStorage.setItem("user_id",null)
    window.location.href = "/Amazon_Clone/#/";
}

  return (
    <div>
        <h1>  </h1>
        
        <div className="container mt-5">
            {users ? (
                <div className="card shadow-lg p-4">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center">
                            <img
                                className="img-fluid rounded-circle border border-3"
                                src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
                                alt="User"
                                style={{ width: "150px", height: "150px" }}
                            />
                            <h3 className="mt-3 text-primary">Hello, {users.username}!</h3>
                        </div>

                        {/* Right Section - User Details */}
                        <div className="col-md-8">
                            <div className="card-body itemss">
                                <h5><strong>User ID:</strong> {users.user_id}</h5>
                                <h5><strong>First Name:</strong> {users.first_name}</h5>
                                <h5><strong>Last Name:</strong> {users.last_name}</h5>
                                <h5><strong>Email:</strong> {users.email}</h5>
                                <h5><strong>Phone Number:</strong> {users.phone_number}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={()=>{logout()}} className="btn btn-danger px-4 py-2">
                            Log Out
                        </button>
                    </div>
                </div>
            ) : (
                <div className="alert alert-warning text-center">No user data available.</div>
            )}
        </div>
        
<div className='container'>
<h2>Your Account</h2>
    <div className='row'>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4 innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" alt="Your Orders" />
            <div>
                <h4>Your Orders</h4>
                <p>Track, return, or buy things again</p>
            </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4 innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" alt="Login & Security" />
            <div>
                <h4>Login & Security</h4>
                <p>Manage your login and security settings</p>
            </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4  innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png" alt="Prime" />
            <div>
                <h4>Prime</h4>
                <p>View benefits and payment settings</p>
            </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4 innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" alt="Your Address" />
            <div>
                <h4>Your Address</h4>
                <p>Edit addresses for orders and gifts</p>
            </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4 innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg" alt="Business Account" />
            <div>
                <h4>Your Business Account</h4>
                <p>Sign up for discounts and bulk purchases</p>
            </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4 innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png" alt="Payment Options" />
            <div>
                <h4>Payment Options</h4>
                <p>Edit or add payment methods</p>
            </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 p-2 border rounded mb-4 innerbox d-flex'>
            <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png" alt="Amazon Pay Balance" />
            <div>
                <h4>Amazon Pay Balance</h4>
                <p>Add money to your balance</p>
            </div>
        </div>
    </div>
</div>


</div>
    
  )
}

export default Accounts