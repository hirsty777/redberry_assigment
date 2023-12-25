import { BlogsType } from "../interfaces/types"
import CategoriesList from "./CategoriesList"
import Style from "../style/components/BlogsList.module.css"
import { useNavigate } from "react-router-dom"

const BlogsList:React.FC<BlogsType> = ({id, author, categories, description, image, publish_date, title}) => {

    const navigate = useNavigate()

    return(
        <div className={Style.wrapper}>
            <div className={Style.image}>
                <img src={image} alt={title} />
            </div>
            <div>
                <p className={Style.author}>{author}</p>
                <p className={Style.date}>{publish_date}</p>
            </div>
            <h1 className={Style.title}>{title}</h1>
            <div className={Style.categories}>
                {categories.map((el)=>(
                    <CategoriesList key={el.id} 
                    title={el.title}
                    background_color={el.background_color}
                    text_color={el.text_color}/>
                ))}
            </div>
            <p className={Style.description}>{description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur ex fugit, quibusdam nisi provident ipsa ut vitae rerum numquam ipsam sunt, debitis odit error delectus. Voluptatem voluptas delectus repudiandae.</p>
            <p className={Style.link} onClick={()=> navigate(`/blog/${id}`)}>სრულად ნახვა <span className="link-arrow">&#129133;</span></p>
        </div>
    )
}

export default BlogsList