

export type categoriesType = {
    id?:number,
    title:string,
    text_color:string,
    background_color:string,
    selecteElement?:Function,
    isActive?:boolean
}
export type allCategoriesType = {
    data:categoriesType[]
}

export type BlogsType = {
    id:number,
    title:string,
    description:string,
    image:string,
    publish_date:string,
    categories:categoriesType[],
    author:string
}
export type AllBlogsType = {
    data:BlogsType[]
}

export type DataContextType = {
    allBlogs:AllBlogsType | null,
    allCategories:allCategoriesType | null
}