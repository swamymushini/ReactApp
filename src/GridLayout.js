import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppHeader from './header.js';
import Title from './Title.js';
import { Divider} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  title: {
    
    padding: theme.spacing(10),
   
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}  justify="space-around" alignItems="center">
       
        <Grid item xs={12}>
        <AppHeader /> 
        <Divider />
        </Grid>

        <Grid item xs={4}>
        
        <Grid container spacing={2} direction="column" alignItems="stretch">
        <Grid item xs={12}>
        <Title text="PERSONAL"/> 
        
        <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
        <Title text="SKILLS"/> 
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
        <Title text="SOFTWARE"/> 
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
        <Title text="CONTACT"/> 
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs={1}>
        <div className="vl"></div>
        </Grid>
        <Grid item xs={7}>
        <Grid container spacing={2} direction="column" alignItems="stretch"> 
        <Grid item xs={12}>
        <Title text="Objectives"/> 
          <p>I am a full-stack web developer with a 
          proven history of successful work with cross-functional teams like R&D, development, project management. I have well procured the skills of zkoss FrameWork, spring, java, javascript, Rest API's, proficient in all databases within two years of experience and we work on lending product development and this aided me to mast the knowledge on Lending functionalities as well.
          </p>
        </Grid>
        <Grid item xs={12}>
        <Title text="Education"/> 
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
        <Title text="Work and Experience"/> 
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid><Grid item xs={12}>
        <Title text="Hobbies and Interests  "/> 
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        </Grid>
        </Grid>
       
        
    </Grid>
    </div>
  );
}