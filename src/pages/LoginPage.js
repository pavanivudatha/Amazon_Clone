import axios from 'axios'
import { useState } from 'react'

const LoginPage = () => {
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
  const LoginUser=async()=>{
    const data=new FormData()
    data.append("email",email)
    data.append("password",password)
    const response=await axios.post("https://amazon.indianhackerslab.com/login-user.php",data,{header:{'content-type':'multipart/form-data'}})
    if(response)
    {
        console.log(response)
        if(response.data.status==='success')
        {
            console.log(response.data.data.user_id)
            localStorage.setItem("user_id",response.data.data.user_id)
            window.location.replace("/account")
        }
    }
  }


  return (
    <div align="center">
       <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" alt="Amazon Logo" className="mb-3" style={{ width: "150px" }} />
 <div className="d-flex justify-content-center vh-50">
     
     <div className="p-4 border rounded" 
         style={{ 
             width: "350px", 
             background: "linear-gradient(135deg,rgb(255, 255, 255),rgb(251, 251, 251))", 
             color: "black" 
         }}
     >
         <h1 className="h3 mb-3 font-weight-normal text-center">Please Login</h1>
 
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
 
         <div className="checkbox mb-3">
             <label>
                 <input type="checkbox" value="remember-me" className="me-2"/> Remember me
             </label>
         </div>
 
         <button 
             onClick={() => { LoginUser() }} 
             className="btn btn-lg btn-warning btn-block w-100" 
             type="submit"
         >
             Login
         </button>
 
         <p className="mt-4 mb-3 text-center" style={{ color: "#dcdcdc" }}>© 2017-2019</p>
     </div>
 </div>
    </div>
    
   

  )
}

export default LoginPage