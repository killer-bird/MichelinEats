import React from 'react'
import "./Actions.scss"
import { useSelector } from "react-redux"
import ActionItem from '../../components/ActionItem/ActionItem'
import SceletonActionIItem from "../../components/Sceleton/SceletonActionIItem"



const Actions = () => {

    const actions = useSelector(state => state.actions.actions)
    const loading = useSelector(state => state.actions.loader)


    return (
    <React.Fragment>      
        <div className="container">
            <div className="actions">
                <h2 className="title">Новости и акции</h2>
                <div className="actions__list">
                    {
                        loading ? [...Array(10).keys()].map(id => <SceletonActionIItem key={id} />) :
                        Object.keys(actions).map(id => <ActionItem  key={id} {...actions[id]} />)
                    }
                </div>      
            </div>
        </div>
        
    </React.Fragment>
    )
}

export default Actions