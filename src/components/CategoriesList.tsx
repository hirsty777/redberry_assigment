import { useState } from "react"
import { categoriesType } from "../interfaces/types"
import Style from '../style/components/CategoriesList.module.css'


const CategoriesList:React.FC<categoriesType>= ({title, background_color, text_color, selecteElement}) => {
    const [active, setActive] = useState<boolean>(false)

    const stylesObj = {
        color:background_color,
        backgroundColor:background_color,
        border:active? "1px solid #000000" : "1px solid transparent"
    }

    const onClickEvent = () =>{
        if(selecteElement)selecteElement(title)
        setActive((prev) => !prev)
    }

    return(
        <div className={Style.wrapper} onClick={onClickEvent} style={{color:stylesObj.color}}>
            {title}
            <div className={Style["menu-background"]} style={stylesObj}></div>
        </div>
        
    )
}

export default CategoriesList