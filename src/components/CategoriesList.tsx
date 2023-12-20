import { categoriesType } from "../interfaces/types"
import Style from '../style/components/CategoriesList.module.css'


const CategoriesList:React.FC<categoriesType>= ({title, background_color, text_color}) => {

    const stylesObj = {
        backgroundColor:background_color,
        color:text_color
    }

    return(
        <div className={Style["menu-button"]} style={stylesObj}>
            {title}
        </div>
    )
}

export default CategoriesList