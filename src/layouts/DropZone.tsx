import { useCallback, useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import Style  from "../style/components/DropZone.module.css"
import AddIcon from "../assets/add.svg"
import Gallery from "../assets/gallery.svg"


interface DropZoneI {
    addImageToState?:Function,
    isUploaded:boolean,
    name?:string,
    remove?:Function
}

const DropZone:React.FC<DropZoneI> = ({addImageToState, isUploaded, name, remove}) => {
 
    const onDrop = useCallback((acceptedFiles:any) => {
        if(addImageToState) {
            addImageToState(acceptedFiles[0])
            //also store to local storage
            const file = acceptedFiles[0];
            const reader = new FileReader()
            reader.onload = function(base64:any) {
               localStorage.setItem("fileUrl", base64.currentTarget.result)
               localStorage.setItem("fileName", acceptedFiles[0].name)
               localStorage.setItem("fileType", acceptedFiles[0].type)
            }
            reader.readAsDataURL(file);
        }
    }, [addImageToState])

    const {getRootProps, getInputProps} = useDropzone({onDrop})
    
    return(
        <>
        {!isUploaded? 
           <div {...getRootProps()} className={Style["custom-upload"]}>
                <input {...getInputProps()}/>
                <img src={AddIcon} alt="add icon" width={40} height={40}/>
                <p>ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span></p>
            </div> 
        :
            <div className={Style["image-field"]}> {/*if image is uploaded*/}
                    <p className={Style["image-field-header"]}>ატვირთეთ ფოტო</p>
                    <div className={Style["custom-uploaded"]}>
                            <img src={Gallery} alt="picute icon" />
                            <span className={Style["file-name"]}>{name}</span>
                            <span className={Style["close-image"]} onClick={()=> remove!()}>&#10005;</span>
                    </div>
            </div>
        }
        </>          
    )

}

export default DropZone