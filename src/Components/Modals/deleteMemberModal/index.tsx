import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@emotion/react';
import {  createTheme, Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Poppins",
        "sans-serif"
      ].join(",")
    },
    palette: {
      primary: {
        main:'#068FDB'
      }
   }})

 const DeleteMemberModal:React.FC=()=> {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}> 
    
    <Button onClick={handleOpen}>Open modal</Button>
  <Modal
      open={open}
      >
    <Box className='stylemember' >
    <Grid  container>
        <Grid item xs={12} >
        <p className='title3'>Komanda üzvünü silmək istədiyinizə əminsiniz mi ?</p>
        </Grid>
        <Grid item xs={12}><Button onClick ={handleClose}>Ləğv et</Button></Grid>
    </Grid>
      </Box>   
    </Modal>
  </ThemeProvider>
   
  );
}
export default DeleteMemberModal