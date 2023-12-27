import {  useContext, useEffect,  useRef,  useState } from "react"
import { DataContext } from "../context/DataContext"
import { Form, useNavigate   } from "react-router-dom";
import Style from '../style/pages/AddBlog.module.css'
import Logo from "../assets/logo.png"
import DropZone from "../layouts/DropZone";
import CategoriesList from "../components/CategoriesList";
import DownArrow from "../assets/downArrow.svg"
import AlertIcon from "../assets/info-circle.svg"
import { json } from "stream/consumers";
 
 
const AddBlog = () => {
    const data = useContext(DataContext)
    const navigate = useNavigate()
    const [imageInput, setImageInput] = useState<any>()
    const [choosCat, setChoosCat] = useState<any[]>([])        //== choosen categories
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [verifyAllInputs, setVerifyAllInputs] = useState<boolean[]>([...Array(6).fill(false), true])
    const authorInputRef = useRef<HTMLInputElement>(null)      //== author
    const authorRef1 = useRef<HTMLSpanElement>(null)
    const authorRef2 = useRef<HTMLSpanElement>(null)
    const authorRef3 = useRef<HTMLSpanElement>(null)
    const titleInputRef = useRef<HTMLInputElement>(null)       //== title
    const titlerRef = useRef<HTMLSpanElement>(null)
    const descInputRef = useRef<HTMLTextAreaElement>(null)     //== description
    const descRef = useRef<HTMLSpanElement>(null)
    const custDropInputRef = useRef<HTMLDivElement>(null)      //== custom dropdown input 
    const emailAlertRef = useRef<HTMLSpanElement>(null)        //== emai
    const initRef = useRef<boolean>(true)

    useEffect(() => {
        if(!data?.loginStatus){
            navigate("/")
        }

        if(choosCat.length>0){
            setVerifyAllInputs(prev => [...prev.slice(0, 5), true, ...prev.slice(6)])
            if(custDropInputRef.current) custDropInputRef.current.style.borderColor = "#14D81C"
        }else if(choosCat.length === 0 && !initRef.current){
            setVerifyAllInputs(prev => [...prev.slice(0, 5), false, ...prev.slice(6)])
            if(custDropInputRef.current) custDropInputRef.current.style.borderColor = "#EA1919"
        }
        initRef.current = false
    },[data?.loginStatus, navigate, choosCat.length])

    const addImageToState = (imageProps:any) => {
        setImageInput(imageProps)
        setVerifyAllInputs(prev => [true, ...prev.slice(1)])
    }
    const removeImage = () => {
        setImageInput(null)
        setVerifyAllInputs(prev => [false, ...prev.slice(1)])
    }

    const selecteElement = (title:string) => {
        if(choosCat.some(el => el.title === title)){
            setChoosCat((prev) => [...prev.filter((cat) => cat.title !== title)])
        }
        else if(data?.allCategories?.data !== undefined){
            setChoosCat(prev => [...prev, data?.allCategories?.data.find((cat)=> cat.title === title)])
        }
    }

    const removeCategorie = (value:string) => {
        if(choosCat.length > 0){
            setChoosCat(prev => prev.filter((category) => category.title !== value))
        }
    }

    // verifying
    const authorVerify = (e:string) => {
        const verifysObj = [false, false, false]
        //min 4 symbols
        if(e.length >= 4 && authorRef1.current){
            authorRef1.current.style.color="#14D81C"
            verifysObj[0]=true
        }else if(authorRef1.current){
            authorRef1.current.style.color="#EA1919"
            verifysObj[0]=false
        }
        //min 2 words
        if(e.split(/\s+/).length >= 2 && authorRef2.current){
            authorRef2.current.style.color="#14D81C"
            verifysObj[1]=true
        }else if(authorRef2.current){
            authorRef2.current.style.color="#EA1919"
            verifysObj[1]=false
        }
        //only georgian letters
        const regex = /^[\u10A0-\u10FF]+$/;
        if(regex.test(e.split(" ").join("")) && authorRef3.current){
            authorRef3.current.style.color="#14D81C"
            verifysObj[2]=true
        }else if(authorRef3.current){
            authorRef3.current.style.color="#EA1919"
            verifysObj[2]=false
        }
        //border  // <-- if all requirements valid
        if(verifysObj.every(value => value === true) && authorInputRef.current){
            authorInputRef.current.style.borderColor = "#14D81C"
            setVerifyAllInputs(prev => [...prev.slice(0, 1), true, ...prev.slice(2)])
        }else if(authorInputRef.current){
            authorInputRef.current.style.borderColor = "#EA1919"
            setVerifyAllInputs(prev => [...prev.slice(0, 1), false, ...prev.slice(2)])
        }
    }
    const titleVerify = (e:string) => {
        if(e.length >= 4 && titlerRef.current && titleInputRef.current){
            titlerRef.current.style.color="#14D81C"
            titleInputRef.current.style.borderColor = "#14D81C"
            setVerifyAllInputs(prev => [...prev.slice(0, 2), true, ...prev.slice(3)])
        }else if(titlerRef.current &&  titleInputRef.current){
            titlerRef.current.style.color="#EA1919"
            titleInputRef.current.style.borderColor = "#EA1919"
            setVerifyAllInputs(prev => [...prev.slice(0, 2), false, ...prev.slice(3)])
        }
    }
    const descriptionVerify = (e:string) => {
        if(e.length >= 4 && descRef.current && descInputRef.current){
            descRef.current.style.color="#14D81C"
            descInputRef.current.style.borderColor = "#14D81C"
            setVerifyAllInputs(prev => [...prev.slice(0, 3), true, ...prev.slice(4)])
        }else if(descRef.current && descInputRef.current){
            descRef.current.style.color="#EA1919"
            descInputRef.current.style.borderColor = "#EA1919"
            setVerifyAllInputs(prev => [...prev.slice(0, 3), false, ...prev.slice(4)])
        }
    }
    const verifyDate = (e:HTMLInputElement ) => {
        if(e.value.length > 0){
            e.style.borderColor = "#14D81C"
            setVerifyAllInputs(prev => [...prev.slice(0, 4), true, ...prev.slice(5)])
        }else{
            e.style.borderColor = "#EA1919"
            setVerifyAllInputs(prev => [...prev.slice(0, 4), false, ...prev.slice(5)])
        }
    }
   
    const emailVerify = (e:HTMLInputElement) => {
        if(e.value.trim().length > 0){          // <-- if somthing entered verify 
            if(e.value.endsWith("@redberry.ge") && e.value.length > 12 && emailAlertRef.current){
                e.style.borderColor = "#14D81C"
                emailAlertRef.current.style.display = "none"
                setVerifyAllInputs(prev => [...prev.slice(0, 6), true])
            }else if(emailAlertRef.current){
                e.style.borderColor = "#EA1919"
                emailAlertRef.current.style.display = "flex"
                setVerifyAllInputs(prev => [...prev.slice(0, 6), false])
            }
        }else if(emailAlertRef.current){      // <--  if entered text removed  set to default
            e.style.borderColor = "#E4E3EB"
            emailAlertRef.current.style.display = "none"
            setVerifyAllInputs(prev => [...prev.slice(0, 6), true])
        }
    }

    
    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(verifyAllInputs.every(val => val === true)){
            const catArray = choosCat.map((cat) => cat.id)

            const formData =  new FormData(e.target)
            formData.append("image", imageInput)
            formData.append("categories", JSON.stringify(catArray))
        }
    }

    return(
        <div className={Style.wrapper}>
            <div className={Style["addblog-header"]}>
                <img src={Logo} alt="logo" width={150} height={24}/>
            </div>
            <main className={Style["addblog-box"]}>
                <h1>ბლოგის დამატება</h1>
                <form onSubmit={handleSubmit}>
                    {!imageInput? 
                        <DropZone addImageToState={addImageToState} isUploaded={false}/> //if image is not uploade 
                    : // <------
                        <DropZone remove={removeImage}  isUploaded={true} name={imageInput.name}/> // if image is uploade
                    }
                    <div className={Style["author-and-title"]}>
                        <div className={Style["input-box"]}>
                            <label htmlFor="author">ავტორი *</label>
                            <input type="text" name="author" ref={authorInputRef}  id="author" placeholder="შეიყვნეთ ავტორი" className={Style["input-style"]} onChange={(e)=>authorVerify(e.target.value.trim())}/>
                            <div className={Style.requirements}>
                                <span ref={authorRef1}>&bull; მინიმუმ 4 სიმბოლო</span>
                                <span ref={authorRef2}>&bull; მინიმუმ ორი სიტყვა</span>
                                <span ref={authorRef3}>&bull; მხოლოდ ქართული სიმბოლოები</span>
                            </div>
                        </div>
                        <div className={Style["input-box"]}>
                            <label htmlFor="title">სათაური *</label>
                            <input type="text" name="title" ref={titleInputRef}  id="title" placeholder="შეიყვნეთ სათაური" className={Style["input-style"]} onChange={(e)=>titleVerify(e.target.value.trim())}/>
                            <div className={Style.requirements}>
                                <span ref={titlerRef}>&bull; მინიმუმ 4 სიმბოლო</span>
                            </div>
                        </div>
                    </div>
                    <div className={Style["description-box"]}>
                        <label htmlFor="description">აღწერა *</label>
                        <textarea name="description" ref={descInputRef} id="description" placeholder="შეიყვნეთ აღწერა" className={Style["input-style"]} onChange={(e)=>descriptionVerify(e.target.value.trim())}>
                        </textarea>
                        <div className={Style.requirements}>
                            <span ref={descRef}>მინიმუმ 4 სიმბოლო</span>
                        </div>
                    </div>
                    <div className={Style["date-and-categorie"]}>
                        <div className={Style["input-box"]}>
                            <label htmlFor="date">გამოქვეყნების თარიღი *</label>
                            <input type="date" name="publish_date"  id="date" className={Style["input-style"]} onChange={(e) => verifyDate(e.target)}/>
                        </div>
                        <div className={Style["input-box"]}>
                            <label>კატეგორია *</label>
                            <div className={Style["custom-dropdown-box"]} ref={custDropInputRef}>
                                <div className={Style["custom-dropdown-input"]} style={{fontSize:12}} >
                                    {choosCat.length > 0 ? 
                                        choosCat.map((el) =>(
                                        <CategoriesList key={el.id} 
                                            title={el.title}
                                            background_color={el.background_color}
                                            selecteElement={removeCategorie}
                                            isCatSelecTed={true}
                                            addRemoveBtn={true}/>
                                        )):"შეიყვნეთ სათაური" 
                                    }
                                    <div className={Style["custom-dropdown-arrow"]} onClick={()=>setIsVisible(prev=>!prev)}>
                                        <img src={DownArrow} alt="down arrow" />
                                    </div>
                                </div>
                                <div className={Style["custom-dropdown-list"]} style={{display:`${isVisible? "flex" : "none"}`}}>
                                    {data?.allCategories?.data && 
                                        data.allCategories.data.map((el)=>(
                                            <CategoriesList key={el.id} 
                                            title={el.title}
                                            background_color={el.background_color}
                                            selecteElement={selecteElement}
                                            isCatSelecTed={true}
                                            choosenCategories={choosCat.some(cat => cat.title === el.title)}/> ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style["email-box"]}>
                        <label htmlFor="email">ელ-ფოსტა</label>
                        <input type="text" name="email"  id="email" placeholder="Example@redberry.ge" className={Style["input-style"]} onChange={(e)=>emailVerify(e.target)}/>
                        <span className={Style["alert-text"]} ref={emailAlertRef}>
                                <img src={AlertIcon} alt="alert" width={20} height={20}/>
                                მეილი უნდა მთავრდებოდეს @redberry.ge-ით
                            </span>
                    </div>
                    <button type="submit"
                            disabled={!verifyAllInputs.every(val => val === true)} 
                            className={Style["submit-blog-btn"]}
                            style={{backgroundColor:`${ verifyAllInputs.every(val => val === true)? "#5D37F3":"#E4E3EB" }`}}>
                    გამოქვეყნება</button>
                </form>
            </main>
        </div>
    )
}

export default AddBlog