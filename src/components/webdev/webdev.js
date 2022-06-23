/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import './certifications.css';



const useStyles = makeStyles((theme) => ({
    main: {
      maxWidth: '100vw',
      marginTop: '3em',
      marginBottom: "auto",
    },
  }));

export const WebDev = () => {
    const classes = useStyles();
    const greetings = "Web Development";
  
    return (
      <section id="certifications" className="indent">
        <Container component="main" className={classes.main} maxWidth="md">
          
        <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <a href=  'https://github.com/mhaffer' target = "_blank" className="contact-btn"> 
              <i className="fas fa-terminal"></i>
              <Typography component='span'>Check out my github</Typography>
            </a>
            <br />
          
          
          {/* <div className="">
            <div className="">
              <Typography component='h2' variant="h5">
                <TextDecrypt text={`${greetings}`} />
              </Typography>
              <a href=  'https://drive.google.com/file/d/1vu7lTRZHQKKnWxBo0o75sukeTljOPECg/view?usp=sharing' target = "_blank" className="contact-btn"> 
                <i className="fas fa-terminal"></i>
                <Typography component='span'> See my certifications</Typography>
              </a>
              
            </div>
            
          </div>
            */}
      </Container>
    </section>
    );
};


 {/* <div className="">
             <Typography component='h2' variant="h5" indent>
              <TextDecrypt text="My Skills" />
            </Typography>
            <p className="about"></p>
            <Typography component='span'> Figma</Typography>
            <br />
            <Typography component='span'> JavaScript</Typography>
            <br />
            <Typography component='span'> HTML/CSS</Typography>
            <br />
            <Typography component='span'> React</Typography>
            <br />
            <Typography component='span'> HTML/CSS</Typography>
            <br />
            <Typography component='span'> React</Typography>
            </div> */}