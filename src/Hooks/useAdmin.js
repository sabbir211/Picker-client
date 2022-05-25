import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
   
    const [admin, setAdmin] = useState(false)
    const [adminLoading,setAdminLoading]=useState(true)
    const email = user?.email
    console.log(email);
    useEffect(()=>{
         fetch(`http://localhost:5000/admin/${email}`, {
            method: "get",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    },[user,email])
       
    
    return [admin,adminLoading]

};

export default useAdmin;