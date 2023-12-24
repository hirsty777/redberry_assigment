const blogsUrl = `https://api.blog.redberryinternship.ge/api/blogs`
const categoriesUrl = 'https://api.blog.redberryinternship.ge/api/categories'
const token = 'e0745b43af1331df063d656ab0179483c09f606d894873c76c5f2f2f85bc58bb'

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