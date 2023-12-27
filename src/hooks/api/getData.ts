const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const categoriesUrl = 'https://api.blog.redberryinternship.ge/api/categories'
const token = '99fab97bb692e3bc5aea12860a1614727c5771d588b8eb0e2d9cd413222653c8'

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