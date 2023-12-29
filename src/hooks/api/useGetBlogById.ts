import { useEffect, useState } from "react"
import { BlogType } from "../../interfaces/types"

const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = '99fab97bb692e3bc5aea12860a1614727c5771d588b8eb0e2d9cd413222653c8'

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