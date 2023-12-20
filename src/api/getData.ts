const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const categoriesUrl = 'https://api.blog.redberryinternship.ge/api/categories'
const token = '97ce9e8afa68bd537baae12980fd36a0eb91b81d954ad31f2b4c824559836871'

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