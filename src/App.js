import React, { useEffect } from "react";
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import Layout from "./Layout/Layout";
import Delivery from "./pages/Delivery/Delivery";
import Favorites from "./components/Favorites/Favorites";
import About from "./pages/About/About";
import Index from "./pages/Index/Index";
import Checkout from "./pages/Checkout/Checkout";
import "./App.scss";
import { fetchCategories } from "./redux/categoriesReduser"
import { fetchFoods } from "./redux/foodsReduser"
import { fetchActions } from "./redux/actionReducer";
import { getProfile, renew } from "./redux/authReducer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import Catalog from "./components/Catalog/Catalog";
import ProfileIndex from "./components/ProfileIndex/ProfileIndex";
import ProfileAdress from "./components/ProfileAdress/ProfileAdress";
import ProfileOrders from "./components/ProfileOrders/ProfileOrders";
import ProfileLoyal from "./components/ProfileLoyal/ProfileLoyal";
import ProfilePoints from "./components/ProfilePoints/ProfilePoints";
import FoodPageContainer from "./pages/FoodPage/FoodPageContainer";
import Actions from "./pages/Actions/Actions"
import ActionPage from "./pages/ActionPage/ActionPage"
import Profile from "./pages/Profile/Profile"



const  App = () =>  {

    const dispatch = useDispatch()
    const {isAuth, error} = useSelector( state => state.auth)

    
     useEffect(()=>{  
        dispatch(fetchCategories())
        dispatch(fetchFoods())
        dispatch(fetchActions())
        dispatch(getProfile())    
    },[]);

    useEffect(()=> {
      console.log(error, isAuth)
      if(error) {
        console.log(error, "ERROR")
        dispatch(renew())
      }
    }, [error]);

    return (
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Index/>}>
            <Route path="/" element={<Catalog/>} />
              <Route path="category/:category" element={<Catalog/>} />
            </Route>
            <Route path="/food/:id" element={<FoodPageContainer/>}/>
            <Route path="/actions/*" element={<Actions/>}/>
            <Route path="/actions/:id" element={<ActionPage/>}/>
            <Route path="/delivery" element={<Delivery/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/profile/*" element={<Profile/>}>
                <Route path='index' element={<ProfileIndex/>}/>
                <Route path='adress' element={<ProfileAdress/>}/>
                <Route path='orders' element={<ProfileOrders/>}/>
                <Route path='loyal' element={<ProfileLoyal/>}/>
                <Route path='balls' element={<ProfilePoints/>}/>
            </Route>
        </Route>
          
      </Routes>
    );
  
}
export default App;

