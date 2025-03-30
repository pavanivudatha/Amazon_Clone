import React from 'react'

const Checklogin = () => {
    const user_id=localStorage.getItem("user_id")
    console.log(user_id)
    if(user_id!==null && user_id!=="null" && user_id)
    {
        return true
    }
    else
    {
        return false
    }
}

export default Checklogin