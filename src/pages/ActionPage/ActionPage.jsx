import React from 'react'
import SceletonActionPage from "../../components/Sceleton/SceletonActionPage"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import "./ActionPage.scss"


const ActionPage = () => {
    
    const {id} = useParams()
    const actions = useSelector(state => state.actions.actions)
    const loading = useSelector(state => state.actions.loader)
    const action = actions[id]

    console.log(id)
    return (
        <React.Fragment> 
            <div className="container">
                <div className="action-page">
                    {loading ? <SceletonActionPage /> :
                       <React.Fragment>
                            <div className="action-page__content">
                                <h2 className="acton-page__name title">
                                    {
                                        action?.name
                                    }
                                </h2>
                                <div className="action-page__text">
                                    {
                                        action?.content
                                    }
                                </div>
                            </div>
                            <div className="action-page__img">
                                <img src={`https://zabqer.net/images/${action?.image}.webp`} alt="" />
                            </div>
                       </React.Fragment>
                    }
                </div>                    
            </div>
            
        </React.Fragment>
    )
}

export default ActionPage