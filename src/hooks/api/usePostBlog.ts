import { useEffect, useState } from "react"

const postUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = '99fab97bb692e3bc5aea12860a1614727c5771d588b8eb0e2d9cd413222653c8'


const usePostBlog = (setWasposted:any) => {
    const [form, setForm] = useState<any | null>(null)

    useEffect(() =>{
        if(form){
        (async () => {
            const response = await fetch(postUrl,{
                method:"POST",
                headers:{
                    'accept': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body:form
            })
            if(response.ok && response.status === 204){
                setWasposted(true)

            }else{
                setWasposted(false)
            }
        })()
    }
    },[form, setWasposted])

    return setForm
}

export default usePostBlog