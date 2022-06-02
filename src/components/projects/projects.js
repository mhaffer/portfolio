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
    <section id="portfolio">
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
            <a href=  'https://drive.google.com/file/d/1YkM1gRNFSr01BIxPJTBLynnwm_UcXlod/view?usp=sharing' target = "_blank" className="contact-btn"> 
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Open projects.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
