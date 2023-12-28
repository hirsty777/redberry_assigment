export type categoriesType = {
    id?:number,
    title:string,
    text_color?:string,
    background_color:string,
    selecteElement?:Function,
    addRemoveBtn?:boolean,
    isClickable?:boolean,
    isCatSelecTed?:boolean,
    choosenCategories?:any
}
export type allCategoriesType = {
    data:categoriesType[]
}


//fro blog with id
export type BlogType = {
    id:number,
    title:string,
    description:string,
    image:string,
    publish_date:string,
    categories:categoriesType[],
    author:string,
    email:string
}
//fro all blogs
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
    allCategories:allCategoriesType | null,
    loginStatus:boolean,
    login:any
}