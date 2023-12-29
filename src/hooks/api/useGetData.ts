const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const categoriesUrl = 'https://api.blog.redberryinternship.ge/api/categories'
const token = 'e9759b1b62868dc0cfc3447b81bc01c79cc8ec41a3bd8a09e115346d58372de1'

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