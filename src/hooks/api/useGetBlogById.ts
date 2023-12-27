import { useEffect, useState } from "react"

const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = '99fab97bb692e3bc5aea12860a1614727c5771d588b8eb0e2d9cd413222653c8'

const useGetBlogById = (id:number|null) => {
    const [response, setResponse] = useState<any>()

    useEffect(() => {
       async function dataFetch(){
        if(id){
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
                console.log(error)
            }
        }
       }
       dataFetch()
    },[id])

    return response
}


export default useGetBlogById