import { useContext, useRef, useState } from 'react'
import Logo from '../assets/logo.png'
import Style from '../style/layouts/Header.module.css'
import Alert from "../assets/info-circle.svg"
import useLoginUser from '../api/useLoginUser'
import { DataContext } from '../context/DataContext'
import Confirm from "../assets/confirm.svg"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const data = useContext(DataContext)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [alert, setalerText] = useState<boolean>(false)
    const userInputRef = useRef<HTMLInputElement>(null)
    const {setUserEmail} = useLoginUser()
    const navigate = useNavigate()


    const onLoginButtonClick = () => {
        if(data?.loginStatus){
            navigate("/AddBlog")
        }else{
            setIsActive(true)
        }
    }

    const verifyEmail = () => {
        if(userInputRef.current){
            
           if(!userInputRef.current.value.endsWith("@redberry.ge")){   
            setalerText(true)
           }
           else{ setUserEmail(userInputRef.current.value) }
        }
    }

    const onModalClose = () => {
        setIsActive(false)
        setalerText(false)
        if(userInputRef.current) userInputRef.current.value = ""
    }

    return (
        <header className={Style.wrapper}>
            <img  src={Logo} alt='redberry logo' width={150} height={24}/>
            <button className={Style.login} onClick={()=> onLoginButtonClick()}>
                {data?.loginStatus? "დაამატე ბლოგი" : "შესვლა"}
            </button>
            <div className={Style.modal} style={{visibility:`${isActive? "visible" : "hidden"}`}}>

                {/*check if loged in show success mesage if not login form*/}
                {data?.loginStatus? 

                    <div className={Style["modal-content-confirm"]}> 
                        <div className={Style["close"]} onClick={()=> onModalClose()}>&#10005;</div>
                        <div className={Style["confrim-box"]}>
                            <img src={Confirm} alt="confirm" width={64} height={64}/>
                            <h1>წარმატებული ავტორიზაცია</h1>
                        </div>
                        
                        <button className={Style["enter-btn"]} onClick={()=>onModalClose()}>კარგი</button>
                    </div> 
                    :  
                    <div className={Style["modal-content-login"]}> 
                        <div className={Style["close"]} onClick={()=> onModalClose()}>&#10005;</div>
                        <h1>შესვლა</h1>
                        <div className={Style["input-box"]}>
                            <label htmlFor="login-email">ელ-ფოსტა</label>
                            <input type="text" id='login-email' placeholder='Example@redberry.ge' ref={userInputRef}/>
                            <span className={Style["alert-text"]} style={{display:`${alert? "flex" : "none"}`}}>
                                <img src={Alert} alt="alert" width={20} height={20}/>
                                "ელ-ფოსტა არ მოიძებნა"
                            </span>
                        </div>
                        <button className={Style["enter-btn"]} onClick={()=>verifyEmail()}>შესვლა</button>
                    </div>
                } 
            </div>
        </header>
    )
}

export default Header