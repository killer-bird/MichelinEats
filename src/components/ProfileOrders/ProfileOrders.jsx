import React from 'react'
import Order from '../Order/Order'
import "./ProfileOrders.scss"

const ProfileOrders = () => {
  return (
    <div className="orders">
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </div>
  )
}

export default ProfileOrders