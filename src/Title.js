import React from 'react';
import './App.css';
import { Typography} from '@material-ui/core';
const Title  = (props) =>{
    return (
<div>
<Typography className="title"  variant = "p" >{props.text}</Typography>
</div>  
    )}


export default Title;

