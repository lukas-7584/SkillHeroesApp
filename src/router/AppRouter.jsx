import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { Navbar } from '../ui/components/NavBar'
import { PrivateRout } from './PrivateRout'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>  


        <Routes>

              <Route path='login' 
              element={ 
              <PublicRoute>
                        <LoginPage/>
              </PublicRoute>
              } />


              <Route 
              path='/*' 
              element={
                <PrivateRout>
                  <HeroesRoutes/>
                </PrivateRout>              
              }/>  

          </Routes>      
    </>
  )
}
