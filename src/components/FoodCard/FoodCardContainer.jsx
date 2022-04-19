import React, {useRef, useState} from 'react'
import FoodCard from './FoodCard'
import { useSelector, useDispatch } from 'react-redux'
// import { cartAdd, updateSum, countItems } from '../../redux/actions'
import { cartAdd, updateSum, updateCount } from '../../redux/cartReduser'

const FoodCardContainer = (props) => {
    
    const [isAdded, setIsAdded]= useState("")
    const cartRef = useSelector(state => state.ref.cart)
    const items = useSelector(state => state.cart.cartItems)
    const counter = items[props.id]?.counter
    const dispatch = useDispatch()

    const onClick = (e)=>{
        e.preventDefault()
        console.log(document.documentElement.clientWidth)
        if(document.documentElement.clientWidth <= 1300) {
          dispatch(cartAdd(props))
          dispatch(updateSum())
          dispatch(updateCount())
        } else {   
        let current = e.currentTarget.parentElement.parentElement.parentElement
        console.log(current)
        let currentLeft = current.getBoundingClientRect().left
        let currentTop = current.getBoundingClientRect().top
        let node = e.currentTarget.parentElement.parentElement.parentElement.cloneNode(true)
        let card = cartRef
        let cartLeft = card.getBoundingClientRect().left + card.offsetWidth * 0.5
        let cartTop = card.getBoundingClientRect().top + card.offsetHeight * 0.5
        node.style.cssText = 'overflow: hidden; position: absolute; top: 0; z-index:20; left: 0; opacity: .5;';
        current.after(node)
        
    
        const flyToCart = ({timing, draw, duration}) => {
          let now = performance.now()
          requestAnimationFrame(function flyToCart(time){
            let timeFraction = (time - now) / duration
      
            if(timeFraction > 1) {
              timeFraction = 1
            }
    
            let progress = timing(timeFraction)
            if(progress >= 1) {
              node.remove()
              setIsAdded("node")
              
              
              
              dispatch(cartAdd(props))
              dispatch(updateSum())
              dispatch(updateCount())
            }
            draw (progress)
            if(timeFraction < 1) {
              requestAnimationFrame(flyToCart)
            }
          })
        }
        
        flyToCart({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction
          },
          draw(progress){
            node.style.left = progress * (cartLeft - currentLeft) + "px"
            node.style.top = progress * (cartTop - currentTop) + "px"
            node.style.width = 100 - (progress * 100) + "%"
            node.style.height = 100 - (progress * 100) + "%"
          }
        })
        }
      }

  return (
    <FoodCard onClick={onClick} counter={counter}  {...props} />
  )
}

export default FoodCardContainer