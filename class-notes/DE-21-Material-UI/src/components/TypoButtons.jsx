import React from 'react'
import {Box, Button, Container, Typography} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth>
        <Typography variant="h1" color="error" align='center' sx={{background:"#eee", mt:"4", border:"1px solid blue"}}>Typography Button Container Box</Typography>
        <Typography variant='button' color="primary.light" >Lorem ipsum color sit amet.</Typography>
        <Typography variant='body1' color="purple" align='center' >Lorem ipsum color sit amet.</Typography>
        {/* body: p etiketidir,body1 daha büyük fs ,body2 daha küçük font lu.  button=span etiketidir+büyük harf */}
      </Container>

      <Box sx={{display:"flex", flexDirection:"column", marginTop:4, gap:2}}>
        <Button variant="contained" color="error" startIcon={<SendIcon/>}>SEND</Button>
        <Button variant="outlined" color="success" endIcon={<DeleteSweepIcon/>}>DELETE</Button>
      </Box>
    </div>
  )
}

export default TypoButtons