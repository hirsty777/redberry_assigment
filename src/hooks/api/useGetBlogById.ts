import { useEffect, useState } from "react"
import { BlogType } from "../../interfaces/types"

const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = 'e9759b1b62868dc0cfc3447b81bc01c79cc8ec41a3bd8a09e115346d58372de1'

const useGetBlogById = (id:number|null) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [response, setResponse] = useState<BlogType>()
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        (async () =>{
        if(id){
            setLoading(true)
            try {
                const res = await fetch(blogsUrl+`/${id}`,{
                    headers:{
                        'accept':'application/json',
                        'authorization':`Bearer ${token}`
                    }
                })
                const data = await res.json()
                setResponse(data)
            } catch (error) {
                setError(true)
            }finally{
                setLoading(false)
            }
        }
        })()
    },[id])

    return {response, loading, error}
}


export default useGetBlogById