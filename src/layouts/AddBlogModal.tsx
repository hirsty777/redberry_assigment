import Style from '../style/layouts/AddBlogModal.module.css'
import Confirm from "../assets/confirm.svg"
import Logo from "../assets/logo.png"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AddBlogModalI {
    postStatus:boolean
}

const AddBlogModal:React.FC<AddBlogModalI>= ({postStatus}) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(()=>{
        setIsActive(postStatus)
    },[postStatus])

    const onModalClose = () => {
        setIsActive(false)
    }

    return (
        <div className={Style["addblog-header"]}>
                <img src={Logo} alt="logo" width={150} height={24} onClick={()=>navigate("/")} style={{cursor:"pointer"}}/>
                <div className={Style.modal} style={{visibility:`${isActive? "visible" : "hidden"}`}}>
                    <div className={Style["modal-content-confirm"]}> 
                        <div className={Style["close"]} onClick={()=> onModalClose()}>&#10005;</div>
                        <div className={Style["confrim-box"]}>
                            <img src={Confirm} alt="confirm" width={64} height={64}/>
                            <h1>ჩანაწი წარმატებით დაემატა</h1>
                        </div>
                        
                        <button className={Style["enter-btn"]} onClick={() => {
                            navigate("/")
                            window.location.reload()
                            localStorage.clear()}}>
                            მთავარ გვერდზე დაბრუნება
                        </button>
                    </div>
                </div>
        </div>
        
    )
}


export default AddBlogModal