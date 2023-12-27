import { useEffect, useState } from "react"

const postUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const token = 'e0745b43af1331df063d656ab0179483c09f606d894873c76c5f2f2f85bc58bb'


const usePostBlog = () => {
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
            console.log(response)
        })()
    }
    },[form])

    return setForm
}

export default usePostBlog