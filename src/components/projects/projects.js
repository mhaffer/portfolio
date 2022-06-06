/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './projects.css';

import pdfPortfolio from '../../../src/pdf-portfolio.pdf';
import chuff from "../../assets/chuff.png"

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Portfolio = () => {
  const classes = useStyles();
  const greetings = "Check out my work";

  return (
    <section id="projects">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + chuff + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
                          </p>
            <a href=  'https://www.canva.com/design/DAFCYAKyik0/view?utm_content=DAFCYAKyik0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target = "_blank" className="contact-btn"> 
              <i className="fas fa-terminal"></i>
              <Typography component='span'> My portfolio</Typography>
            </a>
            <br />
            <a href=  'https://www.canva.com/design/DAFCf1s1DPA/ISp8UV0NKdy_L_sE9Jzseg/view?utm_content=DAFCf1s1DPA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target = "_blank" className="contact-btn"> 
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Daily UX Writing Challenge</Typography>
            </a>
            </div>
        </div>
      </Container>
    </section>
  );
};
