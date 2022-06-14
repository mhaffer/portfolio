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
  const greetings1 = "UX Writing";
  const greetings2 = "UX Design";

  return (
    <section id="projects" className="indent">
      <Container component="main" className={classes.main} maxWidth="md">
        {/* <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + chuff + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div> */}
          <div className="">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings1}`} />
            </Typography>
          
            <a href=  'https://www.canva.com/design/DAFCYAKyik0/view?utm_content=DAFCYAKyik0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target = "_blank" className="contact-btn"> 
              <i className="fas fa-terminal"></i>
              <Typography component='span'> UX Writing Portfolio</Typography>
            </a>
            <br />
            
            <a href=  'https://www.canva.com/design/DAFCf1s1DPA/ISp8UV0NKdy_L_sE9Jzseg/view?utm_content=DAFCf1s1DPA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target = "_blank" className="contact-btn"> 
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Daily UX Writing Challenge</Typography>
            </a>

            <br />
              <a href=  'https://drive.google.com/file/d/1vu7lTRZHQKKnWxBo0o75sukeTljOPECg/view?usp=sharing' target = "_blank" className="contact-btn"> 
                <i className="fas fa-terminal"></i>
                <Typography component='span'> UX Writing Certifications</Typography>
              </a>

            
            </div>
        {/* </div> */}
      </Container>
    </section>
    
  );
};
