import React from 'react'
import Sceleton from '../Sceleton/Sceleton';
import { useSelector } from 'react-redux';
import "./Subcatalog.scss"
import FoodCardContainer from '../FoodCard/FoodCardContainer';
import { Link } from 'react-router-dom';

const SubCatalog = ({childs}) => {

    // const subCategories = useSelector(state => state.categories.categories.sub).filter(el => el.parent === props.id)
    
    const foods = useSelector(state => state.foods.foodsByCategory)
    const loading = useSelector(state => state.foods.loader)
    return (
        <div className='subcatalog'>
            {
            loading ? 
            <div className="food__cards">
                {[...Array(10).keys()].map(id => <Sceleton key={id} />)}
            </div>
            :      
                childs.map(child => {
                    if (child?.parent) {
                        return (
                            <React.Fragment key={child?.id}>
                                <h2 className="subcatalog__title">{child?.name}</h2>
                                <div className="food__cards">
                                    {   
                                        foods[child?.id]?.map(card => {
                                            
                                            return <Link to={`/food/${card.id}`} key={card.id} className="foodCard__wrapper" ><FoodCardContainer  {...card}/></Link>
                                        })
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }
                    else {
                        
                        return (
                            <React.Fragment key={child?.id}>
                                {/* <div className="space"></div> */}
                                <div className="food__cards">
                                    
                                    {   
                                        
                                        foods[child?.id]?.map(card => {
                                            
                                            return <Link to={`/food/${card.id}`} key={card.id} className="foodCard__wrapper" ><FoodCardContainer  {...card}/></Link>
                                        })
                                    }
                            
                                </div>
                                
                            </React.Fragment>
                        )
                    }
                        
                    
                    
                })
            }
            {/* {Object.keys(subs).map(id => {
                console.log(subs[id])
                return <>
                    <h2 className="subcatalog__title">{subs[id].name}</h2>
                    <div className='food__cards'>
                        {   
                            loading ? [...Array(10).keys()].map(id => <Sceleton key={id} />) :
                            foods?.filter(food => food.category === id.id).map(card => {
                                return <FoodCardContainer key={card.id} {...card}/>
                            })
                        }
                    </div>
                </>
            })} */}
        </div>
        
    )
}
SubCatalog.defaultProps = {
    childs: []
}

export default SubCatalog