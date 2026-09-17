import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../../app/store'

const MainProtected = () => {

  let {user,isAuthenticated,isLoading} = useSelector((store)=>{
    return store.auth
  })

  if(isLoading) {
    return <h1>Loading state ...</h1>
  }

  if(!user){return <Navigate to={"/"}/>}
  return <Outlet/>
}

export default MainProtected