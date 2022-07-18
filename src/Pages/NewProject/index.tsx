import './style.css';
import React from 'react'
import CreatePlan from '../../Components/Cards/createPlan';
import FirstProjectInfo from '../../Components/Cards/firstProjectInfo';
import Header from '../../Components/Header';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CreateNewTeam from '../../Components/Cards/createNewTeam';
import ContainedButton from '../../Components/Buttons/ContainedButton';
import { margin } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const NewProject: React.FC = () => {
    return (
        <div className='new-project'>
            <Header/>
            <Container style={{maxWidth:'1280px',padding:'0px', marginTop:'40px'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Item className='container-item' style={{ width: '1280px', justifyContent: 'flex-start' }}>
                                <Typography className='info'>
                                    Yeni layihə
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='container-item'>
                                <FirstProjectInfo />
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='container-item' style={{ justifyContent: 'flex-end' }}>
                                <ContainedButton text='Yeni Layihə Yarat' variantName='contained' paddingSize="16px 32px" maxWidth="202px" />
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='container-item'>
                                <CreateNewTeam />
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='container-item'>
                                <CreatePlan />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default NewProject;