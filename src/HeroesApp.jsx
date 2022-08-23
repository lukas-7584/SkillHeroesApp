import React from 'react'
import { AppRouter } from './router/AppRouter'
import './styles.css'

import 'animate.css';
import { AuthProvider } from './auth/context/AuthProvider';
import { ChakraProvider } from '@chakra-ui/react'

export const HeroesApp = () => {
  return (
    
    <>
        <ChakraProvider > 

                                <AuthProvider >

                                      <AppRouter  />

                                </AuthProvider>

        </ChakraProvider>

    </>
  )
}
