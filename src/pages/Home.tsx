import { useContext } from "react"
import Header from "../layouts/Header"
import { DataContext } from "../context/DataContext"
import blogLogo from '../assets/blogLogo.png'
import Style from '../style/pages/Home.module.css'
import CategoriesList from "../components/CategoriesList"
import Blogs from "../layouts/Blogs"


const Home = () => {
    const data = useContext(DataContext)
    
    if(!data) return <div>no data</div>

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
                                            text_color={el.text_color}
                            />
                        ))}
                    </menu>
                </div>
                <Blogs/>
            </main>
        </div>
    )
}

export default Home