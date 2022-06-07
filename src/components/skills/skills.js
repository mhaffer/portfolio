/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './skills.css';

import chuff from "../../assets/chuff.png"

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Skills = () => {
  const classes = useStyles();
  const greetings = "My skills";

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
        </div>
        <div className="_content_wrapper">
        <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="skills">
                          </p>
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
         
          </div>
      
    </Container>
  </section>
  
  );
};
