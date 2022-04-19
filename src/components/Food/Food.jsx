import React from 'react'
import "./Food.scss"
import Cart from '../Cart/Cart'
import Catalog from '../Catalog/Catalog'
import {Outlet} from "react-router-dom"

const Food = ( ) => {
  

  return (  
    <div className="food">
        <Outlet />
        {/* <Catalog /> */}
        <Cart />
    </div>
  )
}

export default Food