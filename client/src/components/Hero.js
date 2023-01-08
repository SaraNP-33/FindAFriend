import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Hero(){
    return(
<Container  className="container" maxWidth="100vw">
<Box
sx={{
    display: 'flex', justifyContent: 'center',
    height:200,
}}><h1 className='main-title'>Friend Finder</h1></Box>
</Container>
    )

}

export default Hero