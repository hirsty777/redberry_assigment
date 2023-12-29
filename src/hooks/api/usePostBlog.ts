import { useEffect, useState } from "react"

const postUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = 'e9759b1b62868dc0cfc3447b81bc01c79cc8ec41a3bd8a09e115346d58372de1'


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