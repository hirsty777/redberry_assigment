import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Style  from "../style/pages/AddBlog.module.css"
import AddIcon from "../assets/add.svg"

const DropZone:React.FC<any> = ({setImageProp}) => {

    const onDrop = useCallback((acceptedFiles:any) => {
        setImageProp(acceptedFiles[0])
      }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return(
        <div {...getRootProps()} className={Style["custom-upload"]}>
            <input {...getInputProps()} />
            <img src={AddIcon} alt="add icon" width={40} height={40}/>
            <p>ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span></p>
        </div>
    )

}

export default DropZone