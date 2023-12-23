import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate   } from "react-router-dom";

 
const AddBlog = () => {
    const data = useContext(DataContext)
    const navigate = useNavigate()
    

    useEffect(() => {
        if(!data?.loginStatus){
            navigate("/")
         }
    },[data?.loginStatus, navigate])
    
    return(
        <div>
            wewe
        </div>
    )
}

export default AddBlog