import React from 'react'
import HeaderComponent from '../../component/HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../../component/FooterComponent/FooterComponent'

const LayoutPage = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default LayoutPage
