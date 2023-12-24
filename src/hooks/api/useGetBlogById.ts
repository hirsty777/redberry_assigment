import { useEffect, useState } from "react"

const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = 'e0745b43af1331df063d656ab0179483c09f606d894873c76c5f2f2f85bc58bb'

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