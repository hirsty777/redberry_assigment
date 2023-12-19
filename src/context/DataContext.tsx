import { createContext, useEffect, useState } from "react"
import { fethData } from "../api/getAllPost"

type DataContextProviiderProps = {
    children:React.ReactNode
}

const DataContext = createContext<object | null>(null)

const DataProvider = ({children}:DataContextProviiderProps) => {
    const [allBlogs, setAllBlogs] = useState<object | null>(null)

    useEffect(()=>{ 
        setAllBlogs(fethData())
    },[])


    return <DataContext.Provider value={allBlogs}>
            {children}
        </DataContext.Provider>
}


export {DataContext, DataProvider}
