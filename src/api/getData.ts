const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const categoriesUrl = 'https://api.blog.redberryinternship.ge/api/categories'
const token = '4467c3bc01c8c016481658a2fe80e00964a2f2ec30f4db589f6c1b8de79544f6'

const fethBlogs = async () => {
    try{
        const res = await fetch(blogsUrl,{
            headers:{
                'accept':'application/json',
                'authorization':`Bearer ${token}`
            }
        })
        const data = await res.json() 
        return data
    }
    catch(error){
        console.log(error)
        throw error
    }
}

const fethCategories = async () => {
    try{
        const res = await fetch(categoriesUrl,{
            headers:{
                'accept':'application/json',
            }
        })
        const data = await res.json() 
        return data
    }
    catch(error){
        console.log(error)
        throw error
    }
}


export {fethBlogs, fethCategories}