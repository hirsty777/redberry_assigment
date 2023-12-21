import { useState } from "react"
import { categoriesType } from "../interfaces/types"
import Style from '../style/components/CategoriesList.module.css'


const CategoriesList:React.FC<categoriesType>= ({title, background_color, text_color, selecteElement}) => {
    const [active, setActive] = useState<boolean>(false)

    const stylesObj = {
        backgroundColor:background_color,
        color:text_color,
        border:active? "1px solid #000000" : "1px solid transparent"
    }

    const onClickEvent = () =>{
        if(selecteElement)selecteElement(title)
        setActive((prev) => !prev)
    }

    return(
        <div className={Style["menu-button"]} style={stylesObj}  onClick={onClickEvent}>
            {title}
        </div>
    )
}

export default CategoriesList