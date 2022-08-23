import React, { memo} from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import { NavLink} from 'react-router-dom';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from '@chakra-ui/react';

export const SearchByPublisher = memo(({setReset}) => {
    const {getPublishers} = useHeroes()

    const publishers = getPublishers()

  return (
    <>


<Accordion  allowMultiple  className='animate__animated animate__lightSpeedInRight'>
  <AccordionItem className='finder' >
    <h2>
      <AccordionButton >
        <Box flex='1' textAlign='center' fontSize='4xl'>
          <h1 className='titulosFind animate__animated animate__lightSpeedInRight'>Find By Publisher</h1>          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2> 
    <AccordionPanel>
    {
        publishers?.map( publisher => (
            <Button className='m-1' key={publisher} onClick={setReset}> 
            <NavLink className="nav-item "  to={`/${publisher}`}
                    >
                        {publisher}
            </NavLink>
            </Button>

        ))
    }
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    
        <hr/>
    </>
  )
})