/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './certifications.css';

// Import ../../assets/recentprojects/
import uxcc from '../../assets/uxcc.PNG';
// import uxcel from '../../assets/uxcel.png';
// import certificationPdf from '../../../src/certifications.pdf'

const useStyles = makeStyles((theme) => ({
    main: {
      maxWidth: '100vw',
      marginTop: '3em',
      marginBottom: "auto",
    },
  }));

export const Certifications = () => {
    const classes = useStyles();
    const greetings = "Certified UX Writer";
  
    return (
      <section id="certifications" className="indent">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="about">
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
      </Container>
    </section>
    );
};
