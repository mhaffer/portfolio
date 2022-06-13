/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import './footer.css';


const useStyles = makeStyles((theme) => ({
    main: {
      maxWidth: '100vw',
      marginTop: '3em',
      marginBottom: "auto",
    },
  }));

export const Footer = () => {
    const classes = useStyles();
    const greetings = "Certified UX Writer";
  
    return (
      <section id="footer" className="">
        <Container component="main" className={classes.main} maxWidth="md">
            <div className="">
 
                <p component='span'> 2022 Maddison Haffer </p>
            
              
            </div>
          
      </Container>
    </section>
    );
};
