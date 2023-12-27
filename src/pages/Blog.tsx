import { useParams } from "react-router-dom"
import { BlogType, BlogsType } from "../interfaces/types"
import Style from "../style/pages/Blog.module.css"
import Header from "../layouts/Header"
import CategoriesList from "../components/CategoriesList"
import useGetBlogById from "../hooks/api/useGetBlogById"
import { useContext, useEffect, useRef, useState } from "react"
import { DataContext } from "../context/DataContext"
import BlogsList from "../components/BlogsList"

const Blog = () => {
    const data = useContext(DataContext)
    const {id} = useParams()
    const response:BlogType = useGetBlogById(id? Number(id) : null)
    const [similarData, setSimilarData] = useState<BlogsType[] | []>([])
    const [similaBlogNav, setSimilaBlogNav] = useState<{index:number, pos:number}>({index:0, pos:0})
    const leftArrowRef = useRef<HTMLDivElement | null>(null)
    const righttArrowRef = useRef<HTMLDivElement | null>(null)



    useEffect(() => {
        if(data?.allBlogs && response){
            const currentCategories = [...response.categories.map((cat) => cat.title)]
            const similars = data?.allBlogs?.data.filter((blog) => blog.categories.some((category) => currentCategories.includes(category.title)))
            setSimilarData(similars)
        }
        if(similarData.length > 0){
            setSimilaBlogNav({index:similarData.length,pos:0})
        }//when page load set arrows backgrounds(to default)
        if(leftArrowRef.current)leftArrowRef.current.style.backgroundColor = "#E4E3EB"
        if(righttArrowRef.current)righttArrowRef.current.style.backgroundColor="#5D37F3"
    },[data?.allBlogs, response, similarData.length])
    
    const onPrevButtonClick= () => {
        // make sure index is not more then length of all blogs 
        if(similaBlogNav.index <= similarData.length-1){
            setSimilaBlogNav((prev) =>({index:prev.index+1, pos:prev.pos+440}))
            if(righttArrowRef.current)righttArrowRef.current.style.backgroundColor="#5D37F3"//wen we move to left we change right arrow bakcground
        }//if index and blog length are same it means we are on 1st elemnt( give white background to arrow)
        if(similaBlogNav.index === similarData.length-1){
            if(leftArrowRef.current)leftArrowRef.current.style.backgroundColor = "#E4E3EB"
        }
    }
    const onNextButtonClick = () => {
        // make sure index is not less then 3 (so we stop at last 3 elemnts of blogs) 
        if(similaBlogNav.index >3){
            setSimilaBlogNav((prev) =>({index:prev.index-1, pos:prev.pos-440}))
            if(leftArrowRef.current)leftArrowRef.current.style.backgroundColor = "#5D37F3"//wen we move to right we change left arrow bakcground
        }//if index is equal or less then 4 it means we show last 3 element of blogs (so we prevent sroll and change background to white)
        if(similaBlogNav.index <= 4){
            if(righttArrowRef.current)righttArrowRef.current.style.backgroundColor="#E4E3EB"
        }
    }

    if(!response) return <div style={{color:"red"}}>no data &#11044;</div>

    return(
        <div className={Style.wrapper}>
            <Header />
            <div className={Style.blog}>
                <div className={Style["image-div"]}>
                    <img src={response.image} alt={response.title} />
                </div>
                <div >
                    <p className={Style.author}>{response.author}</p>
                    <div className={Style.info}>
                        <span className={Style.date}>{response.publish_date}</span>
                        <span className={Style.dot}>&#11204;</span>
                        <span className={Style.email}>{response.email}</span>
                    </div>
                </div>
                <h1 className={Style.title}>{response.title}</h1>
                <div className={Style.categories}>
                    {response.categories.map((el)=>(
                        <CategoriesList key={el.id} 
                        title={el.title}
                        background_color={el.background_color}
                        />
                    ))}
                </div>
                <p className={Style.description}>{response.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo pariatur deserunt quia nisi velit quos eligendi, quis repudiandae eos eum odit aspernatur vel. Tempore quidem corporis deleniti reiciendis, debitis magnam!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsum ducimus ullam natus. Asperiores placeat qui expedita vero, pariatur architecto minima, illum consectetur ipsum quibusdam voluptatum? Quos praesentium modi aliquam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatem vel nisi dolor esse reprehenderit eum dicta sequi! Nulla hic culpa exercitationem sint enim officiis fugiat, corrupti repudiandae corporis soluta. lor lor</p>
            </div>
            <div className={Style["similar-blogs-box"]}>
                <div className={Style["similar-blogs-nav"]}>
                    <h1>მსგავსი სტატიები</h1>
                    <div className={Style["arrows-box"]}>
                        <div className={Style["left-box"]} onClick={() => onPrevButtonClick()} ref={leftArrowRef}>
                            <div>{/*left arrow*/}</div>
                        </div>
                        <div className={Style["right-box"]} onClick={() => onNextButtonClick()} ref={righttArrowRef}>
                            <div>{/*right arrow*/}</div>
                        </div>
                    </div>
                </div>
                <div className={Style["similar-blogs"]} style={{transform:`translateX(${similaBlogNav.pos}px)`}}>
                    {similarData?.map((blog)=>(
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
            </div>
        </div>
    )
}

export default Blog