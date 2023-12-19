import { useContext } from "react"
import Header from "../layouts/Header"
import { DataContext } from "../context/DataContext"

const Home = () => {
    const data = useContext(DataContext)

    console.log(data)

    return(
        <div>
            <Header />
        </div>
    )
}

export default Home