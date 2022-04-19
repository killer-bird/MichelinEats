import React, {useState} from 'react'
import Menu from './Menu'
import { useSelector } from 'react-redux'


const MenuContainer = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const categories = useSelector(state => state.categories.categories)
    const showMenu = () => {
        setActiveMenu(!activeMenu)
        document.body.classList.toggle("--no-scroll")
    }

    return (
        <Menu showMenu={showMenu} activeMenu={activeMenu} categories={categories}/>
    )
}

export default MenuContainer