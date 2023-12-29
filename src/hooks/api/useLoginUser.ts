import React, { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataContext"

const loginUrl = `https://api.blog.redberryinternship.ge/api/login`
const token = '99fab97bb692e3bc5aea12860a1614727c5771d588b8eb0e2d9cd413222653c8'


const useLoginUser = (setalerText:any) => {
    const data = useContext(DataContext)
    const [userEmail, setUserEmail] = useState<string | null>(null)

    useEffect(()=>{
        if(userEmail){
            (async ()=>{
                    const response = await fetch(loginUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json',
                            'authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({email:userEmail})
                    })
                    //if email is valid 
                    if(response.ok && response.status === 204){
                        data?.login()
                    }//if email is not valid 
                    else{
                        setalerText(true)
                    }   
            })()
    }
    },[userEmail, data, setalerText])

    return {setUserEmail}
}

//gigagiorgadze@redberry.ge
export default useLoginUser