import { createContext, useEffect, useState } from "react"
import { fethBlogs, fethCategories } from "../api/getData"
import { AllBlogsType, DataContextType, allCategoriesType } from "../interfaces/types"

type DataContextProviiderProps = {
    children:React.ReactNode
}

const DataContext = createContext<DataContextType | null>(null)

const DataProvider = ({children}:DataContextProviiderProps) => {
    const [allBlogs, setAllBlogs] = useState<AllBlogsType | null>(null)
    const [allCategories, setAllCategories] = useState<allCategoriesType | null>(null)

    useEffect(()=>{ 
        fethBlogs()
        .then((res:AllBlogsType)=>setAllBlogs(res))

        fethCategories()
        .then((res:allCategoriesType)=>setAllCategories(res))
    },[])

    const contextValue = {
        allBlogs,
        allCategories
    }
    return <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
}


export {DataContext, DataProvider}
