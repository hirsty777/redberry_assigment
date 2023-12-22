import { useRef, useState } from 'react'
import Logo from '../assets/logo.png'
import Style from '../style/layouts/Header.module.css'
import Alert from "../assets/info-circle.svg"

const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [alert, setalerText] = useState<boolean>(false)
    const userInputRef = useRef<HTMLInputElement>(null)
    const alertText = "ელ-ფოსტა არ მოიძებნა"
    

    const verifyEmail = () => {
        if(userInputRef.current){
           if(!userInputRef.current.value.endsWith("@redberry.ge")){
            setalerText(true)
           }
        }
    }

    const onModalClose = () => {
        setIsActive(false)
        setalerText(false)
        if(userInputRef.current){
            userInputRef.current.value = ""
        }
    }

    return (
        <header className={Style.wrapper}>
            <img  src={Logo} alt='redberry logo' width={150} height={24}/>
            <button className={Style.login} onClick={()=>setIsActive(true)}>
                შესვლა
            </button>
            <div className={Style.modal} style={{visibility:`${isActive? "visible":"hidden"}`}}>
                <div className={Style["modal-content"]}>
                    <div className={Style["close"]} onClick={()=> onModalClose()}>&#10005;</div>
                    <h1>შესვლა</h1>
                    <div className={Style["input-box"]}>
                        <label htmlFor="email">ელ-ფოსტა</label>
                        <input type="text" id='email' placeholder='Example@redberry.ge' ref={userInputRef}/>
                        <span className={Style["alert-text"]} style={{display:`${alert? "flex":"none"}`}}>
                            <img src={Alert} alt="alert" width={20} height={20}/>{alertText}
                        </span>
                    </div>
                    <button className={Style["enter-btn"]} onClick={()=>verifyEmail()}>შესვლა</button>
                </div>
            </div>
        </header>
    )
}

export default Header