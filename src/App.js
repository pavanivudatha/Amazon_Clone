import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
      <userContext.Provider value={users}>
    <Router>  
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product_details/:product_id" element={<ProductDetails />} />
      <Route path="/account" element={<Accounts />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    <Footer />
  </Router>
</userContext.Provider>;
    </div>
  );
}

export default App;
