import axios from 'axios'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const SigninPage = () => {
    const [firstname,setFirstName]=useState(null)
    const [lastname,setLastName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [phonenum,setPhone]=useState(null)
    const SignupUser=async()=>{
        
        const data=new FormData()
        data.append("email",email)
        data.append("password",password)
        data.append("first_name",firstname)
        data.append("last_name",lastname)
        data.append("phone_number",phonenum)
        const response=await axios.post("https://amazon.indianhackerslab.com/signup.php",data,{header:{'content-type':'multipart/form-data'}})
        if(response)
        {
            setLoading(true)
            console.log(response.data.status)
            if(response.data.status==='success')
            {
                setDisplayModal(true)
            }
            else
            {
                setErrorModal(true)
            }

        }
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [loading,setLoading]=useState(false)
    const [errormodel,setErrorModal]=useState(false)
    const [displaymodal,setDisplayModal]=useState(false)
  return (
    <div align="center">
      
        <Modal open={displaymodal} onClose={()=>setDisplayModal(false)}>
            <Box sx={style}>
                <h2>Successfully Created</h2>
                <p>Your account has been created</p>
                <button onClick={()=>{setDisplayModal(false)}} className='btn btn-warning'>Close</button>
            </Box>
        </Modal>
        <Modal open={errormodel} onClose={()=>setErrorModal(false)}>
            <Box sx={style}>
                <h2>Error</h2>
                <p>Something went wrong!!!</p>
                <button onClick={()=>{setErrorModal(false)}} className='btn btn-warning'>Close</button>
            </Box>
        </Modal>

        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" alt="Amazon Logo" className="mb-5" style={{ width: "150px" }} />
        <div className="d-flex justify-content-center vh-90">
        
    <div className="p-4 border rounded" 
        style={{ 
            width: "350px", 
            background: "linear-gradient(135deg,rgb(254, 254, 254),rgb(255, 255, 255))", 
            color: "black",
            marginTop: "-50px"  // Moves the container slightly up
        }}
    >
        <h1 className="h3 mb-3 font-weight-normal text-center">Please Sign Up</h1>

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input 
            onChange={(event) => { setEmail(event.target.value) }} 
            type="email" 
            id="inputEmail" 
            className="form-control mb-2" 
            placeholder="Email address" 
            required 
            autoFocus
        />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input 
            onChange={(event) => { setPassword(event.target.value) }} 
            type="password" 
            id="inputPassword" 
            className="form-control mb-2" 
            placeholder="Password" 
            required
        />

        <label htmlFor="inputFirstName" className="sr-only">First Name</label>
        <input 
            onChange={(event) => { setFirstName(event.target.value) }} 
            type="text" 
            id="inputFirstName" 
            className="form-control mb-2" 
            placeholder="First Name" 
            required
        />

        <label htmlFor="inputLastName" className="sr-only">Last Name</label>
        <input 
            onChange={(event) => { setLastName(event.target.value) }} 
            type="text" 
            id="inputLastName" 
            className="form-control mb-2" 
            placeholder="Last Name" 
            required
        />

        <label htmlFor="inputPhoneNumber" className="sr-only">Phone Number</label>
        <input 
            onChange={(event) => { setPhone(event.target.value) }} 
            type="number" 
            id="inputPhoneNumber" 
            className="form-control mb-2" 
            placeholder="Phone Number" 
            required
        />

        <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" className="me-2"/> Remember me
            </label>
        </div>

        <button 
            onClick={() => { SignupUser() }} 
            className="btn btn-lg btn-warning btn-block w-100" 
            type="submit"
        >
            {loading ? <>Account Created</> : <>Create Account</>}
        </button>

        <p className="mt-4 mb-3 text-center" style={{ color: "#dcdcdc" }}>© 2017-2019</p>
    </div>
</div>

    </div>
  )
}

export default SigninPage