import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHeroes } from "../../hooks/useHeroes";
import { Button, ButtonGroup } from '@chakra-ui/react'



export const HeroesPage = () => {

    const { heroId } = useParams(); 
    
    const { getHeroById } = useHeroes();


    const hero = getHeroById(parseInt( heroId ))

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }
    
    return (
        <div className="row mt-5 mb-5  " >
            <div className="col-4 animate__animated animate__fadeInLeft ">
            <img 
                src={hero.images.lg} 
                alt={hero.name} className='img-thumbnail'
                />
            </div>
            <div className="col-8">
            <h3 className='titulos2'>
                {hero.name}
            </h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <b>Alter ego: </b>
                    {hero.biography.alterEgos}
                </li>
                <li className='list-group-item'>
                    <b>Publisher: </b>
                    {hero.biography.publisher}
                </li>
                <li className='list-group-item'>
                    <b>First Appareance : </b>
                    {hero.biography.firstAppearance}
                </li>
                <li className='list-group-item'>
                    <b>Alias : </b>
                    {hero.biography.aliases}
                </li>
                <li className='list-group-item'>
                    <b>Connections : </b>
                    {hero.connections.groupAffiliation}
                </li>
            </ul><br/>

    
                <Button 
                colorScheme='whatsapp'
                onClick={onNavigateBack}
                >
                    Back 
                </Button>
        
            </div>
        </div>
    )
    }