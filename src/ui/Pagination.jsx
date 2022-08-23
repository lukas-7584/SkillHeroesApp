import { Button } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({page, increment, decrement, lastPage}) => {
    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }
    

    return (
    <>
        <div className="container d-flex m-4 justify-content-center animate__animated animate__lightSpeedInRight">
            <Button className='col-3 ' onClick={prevPage} colorScheme='green'> &lt;</Button>
            
                <div className="page m-2  Paginas"  >Page <span className='page_color' >{page} of {lastPage}</span></div>
                <Button className='col-3' onClick={nextPage} colorScheme='green'> &gt;</Button>
        </div>
    </>
    )
}