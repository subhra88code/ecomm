
import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        navbar
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout