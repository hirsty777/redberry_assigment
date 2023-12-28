import { useContext, useState } from "react"
import Header from "../layouts/Header"
import { DataContext } from "../context/DataContext"
import blogLogo from '../assets/blogLogo.png'
import Style from '../style/pages/Home.module.css'
import CategoriesList from "../components/CategoriesList"
import BlogsList from "../components/BlogsList"


const Home = () => {
    const data = useContext(DataContext)
    const [selected, setSelected] = useState<string[]>([])
    const currentDate = new Date()
  
    // if we have values in selected we filter data based on it or we just pass all blog from data
    const filteredBlogs = selected.length > 0 ? 
        data?.allBlogs?.data.filter((blog) => {
            const blogDate = new Date(blog.publish_date)
            return blogDate <= currentDate && blog.categories.some((category) => selected.includes(category.title))
        })
        :
        data?.allBlogs?.data.filter((blog) => {
            const blogDate = new Date(blog.publish_date)
            return blogDate <= currentDate
        })

    // we save value passed from categorieslist components to selelcted (if its olready there we romove it)
    const selecteElement = (value:string)=>{
        if(selected.find((el) => el === value)){
            setSelected((prev) => prev.filter((el) => el !== value))
        }
        else{
            setSelected((prev)=>[...prev, value]) 
        }
    }
    console.log(selected)

    return(
        <div>
            <Header />
            <main>
                <div className={Style['blog-title']}>
                    <h1>ბლოგი</h1>
                    <img src={blogLogo} alt="blog logo" />
                </div>
                <div className={Style["menu-box"]}>
                    <menu>
                        {data?.allCategories?.data && data.allCategories.data.map((el)=>(
                            <CategoriesList key={el.id} 
                                            title={el.title}
                                            background_color={el.background_color}
                                            selecteElement={selecteElement}
                                            isClickable = { true }/>
                        ))}
                    </menu>
                </div>  
                <div className={Style["blogs-box"]}>
                    {filteredBlogs?.map((blog)=>(
                            <BlogsList key={blog.id} 
                                        id={blog.id}
                                        author={blog.author}
                                        categories={blog.categories}
                                        description={blog.description}
                                        image={blog.image}
                                        publish_date={blog.publish_date}
                                        title={blog.title}/>
                    ))}    
                </div>
            </main>
        </div>
    )
}

export default Home