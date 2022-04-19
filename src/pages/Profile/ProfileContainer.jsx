import React from 'react'
import Profile from './Profile'
import withRequireAuth from '../../api/HOC/withRequireAuth'




const ProfileContainer = () => {
    
    const ReqAuth = withRequireAuth(Profile)
    return <ReqAuth />
}

export default ProfileContainer