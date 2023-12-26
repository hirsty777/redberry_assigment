import { createContext, useEffect, useState } from "react"
import { fethBlogs, fethCategories } from "../hooks/api/getData"
import { AllBlogsType, DataContextType, allCategoriesType } from "../interfaces/types"

type DataContextProviiderProps = {
    children:React.ReactNode
}

const DataContext = createContext<DataContextType | null>(null)

const DataProvider = ({children}:DataContextProviiderProps) => {
    const [allBlogs, setAllBlogs] = useState<AllBlogsType | null>(null)
    const [allCategories, setAllCategories] = useState<allCategoriesType | null>(null)
    const [loginStatus, setLoginStatus] = useState<boolean>(true) //default false

    useEffect(()=>{ 
        fethBlogs()
        .then((res:AllBlogsType)=>setAllBlogs(res))

        fethCategories()
        .then((res:allCategoriesType)=>setAllCategories(res))
    },[])

    const contextValue = {
        allBlogs,
        allCategories,
        loginStatus, 
        login:()=>setLoginStatus(true)
    }
    return <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
}


export {DataContext, DataProvider}
