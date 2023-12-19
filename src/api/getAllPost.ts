const url = `https://api.blog.redberryinternship.ge/api/blogs`
const token = '97ce9e8afa68bd537baae12980fd36a0eb91b81d954ad31f2b4c824559836871'

const fethData = async () => {
    try{
        const res = await fetch(url,{
            headers:{
                'accept':'application/json',
                'authorization':`Bearer ${token}`
            }
        })
        const data = await res.json() 
        console.log(data)
    }
    catch(error){
        console.log(error)
        throw error
    }
}


export {fethData}