import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.user?.email
    console.log(email);
    if (email) {
        fetch(`http://localhost:5000/user/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('accessToken', data.token)
                setToken(data.token)
            })
    }
    return [token]
};

export default useToken;