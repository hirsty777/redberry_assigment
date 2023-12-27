import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataContext"

const loginUrl = `https://api.blog.redberryinternship.ge/api/login`
const token = '99fab97bb692e3bc5aea12860a1614727c5771d588b8eb0e2d9cd413222653c8'

const useLoginUser = () => {
    const data = useContext(DataContext)
    const [userEmail, setUserEmail] = useState<string | null>(null)
    const [result, setResult] = useState<boolean>(false)

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
                        setResult(true)
                    }//if email is not valid 
                    else{
                        setResult(false)
                        console.log("not valid email")
                    }   
            })()
    }
    },[userEmail, data])

    return {setUserEmail, result}
}

//gigagiorgadze@redberry.ge
export default useLoginUser