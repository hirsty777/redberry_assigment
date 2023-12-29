import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataContext"

const loginUrl = `https://api.blog.redberryinternship.ge/api/login`
const token = 'e9759b1b62868dc0cfc3447b81bc01c79cc8ec41a3bd8a09e115346d58372de1'


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