import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { height } from '@mui/system';


function Start(){
    return(
        <Container  className="start-container" maxWidth="100vw">
        <Box
        sx={{
            display:'flex', alignItems:'center',flexDirection:"column",
            height:"50vh",  textAlign:"center", marginTop:'20vh'
            
        }}>
        <h3>Want to Find your Perfect Friend? Take the Quiz</h3>
        <Button id="quiz-btn"  variant="contained" size="medium">
          Take Quiz!
        </Button>
        </Box>
        </Container>
            )

}

export default Start