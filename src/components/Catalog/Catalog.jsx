import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SubCatalog from '../SubCatalog/SubCatalog';


import "./Catalog.scss"
const Catalog = React.memo(({cart}) => {
    
    const {category} = useParams()
    const categories = useSelector(state => state.categories.categories)
  
    return (
        <div className="catalog">
            {
                // если выбрана категория
                category ? 
                    <React.Fragment>
                        <h2 className="catalog__title">{categories[category]?.name}</h2>
                        <SubCatalog childs={categories[category]?.childs.length ? [...categories[category]?.childs, categories[category]] : [categories[category]]} />
                    </React.Fragment> 
                :

                // для всех категорий
                    Object.keys(categories).map(id => {
                        
                        return <React.Fragment key={id}>
                                    <h2 className="catalog__title">{categories[id]?.name}</h2>
                                    <SubCatalog childs={categories[id]?.childs ? [ categories[id], ...categories[id]?.childs ] : [categories[id]]}  />
                                </React.Fragment>
                    })
            }
            
        </div>
    )
})

export default Catalog