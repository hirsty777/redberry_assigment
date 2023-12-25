import {  useContext, useEffect,  useState } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate   } from "react-router-dom";
import Style from '../style/pages/AddBlog.module.css'
import Logo from "../assets/logo.png"
import Gallery from "../assets/gallery.svg"
import DropZone from "../components/DropZone";

 
 
const AddBlog = () => {
    const data = useContext(DataContext)
    const navigate = useNavigate()
    const [imageInput, setImageInput] = useState<any>()
    
    // useEffect(() => {
    //     if(!data?.loginStatus){
    //         navigate("/")
    //      }
    // },[data?.loginStatus, navigate])
    
  
    const removeImage = () => {
        setImageInput(null)
    }
    
    return(
        <div className={Style.wrapper}>
            <div className={Style["addblog-header"]}>
                <img src={Logo} alt="logo" width={150} height={24}/>
            </div>
            <main className={Style["addblog-box"]}>
                <h1>ბლოგის დამატება</h1>
                <form>
                    {!imageInput? 
                        <DropZone setImageProp={setImageInput}/>
                    : // <------
                        <div className={Style["image-field"]}> {/*if image is uploaded*/}
                            <p className={Style["image-field-header"]}>ატვირთეთ ფოტო</p>
                            <div className={Style["custom-uploaded"]}>
                                <img src={Gallery} alt="picute icon" />
                                <span className={Style["file-name"]}>{imageInput.name}</span>
                                <span className={Style["close-image"]} onClick={()=> removeImage()}>&#10005;</span>
                            </div>
                        </div>
                    }
                    <div className={Style["author-and-title"]}>
                        <div className={Style["input-box"]}>
                            <label htmlFor="author">ავტორი *</label>
                            <input type="text"  id="author" placeholder="შეიყვნეთ ავტორი" className={Style["input-style"]}/>
                            <div className={Style.requirements}>
                                <span>&bull; მინიმუმ 4 სიმბოლო</span>
                                <span>&bull; მინიმუმ ორი სიტყვა</span>
                                <span>&bull; მხოლოდ ქართული სიმბოლოები</span>
                            </div>
                        </div>
                        <div className={Style["input-box"]}>
                            <label htmlFor="title">სათაური *</label>
                            <input type="text"  id="title" placeholder="შეიყვნეთ სათაური" className={Style["input-style"]}/>
                            <div className={Style.requirements}>
                                <span>&bull; მინიმუმ 4 სიმბოლო</span>
                            </div>
                        </div>
                    </div>
                    <div className={Style["description-box"]}>
                        <label htmlFor="description">აღწერა *</label>
                        <textarea name="description" id="description" placeholder="შეიყვნეთ აღწერა" className={Style["input-style"]}></textarea>
                        <div className={Style.requirements}>
                            <span>მინიმუმ 4 სიმბოლო</span>
                        </div>
                    </div>
                    <div className={Style["date-and-categorie"]}>
                        <div className={Style["input-box"]}>
                            <label htmlFor="date">გამოქვეყნების თარიღი *</label>
                            <input type="date"  id="date" className={Style["input-style"]}/>
                        </div>
                        <div className={Style["input-box"]}>
                            <label htmlFor="categories">კატეგორია *</label>
                            <div className={Style["custom-dropdown-box"]}>
                                some text
                            </div>
                        </div>
                    </div>
                    <div className={Style["email-box"]}>
                        <label htmlFor="email">ელ-ფოსტა</label>
                        <input type="text"  id="email" placeholder="Example@redberry.ge" className={Style["input-style"]}/>
                    </div>
                    <button type="submit" className={Style["submit-blog"]}>გამოქვეყნება</button>
                </form>
            </main>
        </div>
    )
}

export default AddBlog