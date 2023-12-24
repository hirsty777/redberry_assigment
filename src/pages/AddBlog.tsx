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
                        <div className={Style["author-box"]}>
                            
                        </div>
                        <div className={Style["title-box"]}>

                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default AddBlog