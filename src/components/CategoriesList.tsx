import { useState } from "react"
import { categoriesType } from "../interfaces/types"
import Style from '../style/components/CategoriesList.module.css'


const CategoriesList:React.FC<categoriesType>= ({title, background_color, selecteElement, addRemoveBtn, isCatSelecTed, choosenCategories}) => {
    const [active, setActive] = useState<boolean>(false)

    //conver hex to rgba 
    const hexToRgb = (hex:string)=>{
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255; 
        const a = 0.2 //for opacity
        return { r, g, b, a };
    }
    const rgba = hexToRgb(background_color)

    //addRemoveBtn i use it to check where this components is used if addRemoveBtn is true it means i use it on dropdown choosen elemnets
    //this needed bcs only in  dropdown choosen elemnets i need difrent styles
    const stylesObj = choosenCategories ?
    {   color:"#FFFFFF" ,
        backgroundColor:background_color ,
        border:"1px solid transparent"
    }
    :
    {
        color:addRemoveBtn? "#FFFFFF" : background_color,
        backgroundColor:addRemoveBtn? background_color : `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`,
        border:isCatSelecTed? "1px solid transparent": 
                       active? "1px solid #000000" : "1px solid transparent"
    }

    const onClickEvent = () =>{
        if(selecteElement){
            selecteElement(title)
        }
        setActive((prev) => !prev)
    }
    const removeElement = ()=>{
        if(selecteElement){
            selecteElement(title)
        }
    }

    return(
        <div className={Style.wrapper} onClick={onClickEvent} style={stylesObj}>
            <p>{title}</p>
            {addRemoveBtn && 
                <div className={Style["remove-btn"]} onClick={removeElement}>&#10005;</div>
            }
        </div>
        
    )
}

export default CategoriesList