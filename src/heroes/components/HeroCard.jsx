import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id,name, biography, images }) => {
    return (
    <div className='col animate__animated animate__fadeInDownBig cardFondo'>
        <div className="card  mt-2">
            <div className="d-flex imgrespsection">
                <div className="col-5 imgrespcontainer">
                    <img src={images.sm}alt={name} className='imgresp' />
                </div>
                <div className="col-7 imgrespcontainer cardFondo" >
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ biography.fullName }</p>
                        <p className="card-text ">
                            <small className='text-muted'>
                                {biography.firstAppearance}
                            </small>
                        </p> <br/>

                        <Button colorScheme='orange'>
                                <Link to={`/hero/${id}`}>
                                    More info...
                                </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}
