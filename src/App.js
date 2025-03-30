import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import { Routes,BrowserRouter,Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Accounts from "./pages/Accounts";
import userContext from "./pages/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Checklogin from "./pages/Checklogin";
import CartPage from "./pages/CartPage";

function App() {
  const [users,userDetails]=useState(null)
const user_id=localStorage.getItem("user_id")
const FetchData=async()=>{
    const data=new FormData()
    data.append("user_id",user_id)
    const response=await axios.post("https://amazon.indianhackerslab.com/get-account.php",data,{header:{'content-type':'multipart/form-data'}})
    if(response)
    {
        console.log(response.data.data)
        userDetails(response.data.data[0])
    }
}
useEffect(()=>{
if(Checklogin()){
  FetchData()
}
},[])



  return (
    <div className="App">
      <userContext.Provider value={users} >
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/product_details/:product_id" element={<ProductDetails></ProductDetails>}></Route>
      <Route path="/account" element={<Accounts></Accounts>}></Route>
      <Route path="/cart" element={<CartPage></CartPage>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
