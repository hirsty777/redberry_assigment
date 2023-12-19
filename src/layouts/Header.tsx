import Logo from '../assets/logo.png'
import Style from '../style/layouts/Header.module.css'

const Header = () => {

    return (
        <header className={Style.wrapper}>
            <img  src={Logo} alt='redberry logo' width={150} height={24}/>
            <button className={Style.login}>
                შესვლა
            </button>
        </header>
    )
}

export default Header