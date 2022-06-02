/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import dsk from '../../assets/recentprojects/dsk.png';
import breedmatch from '../../assets/recentprojects/breedmatch.png';
import conversationdesign from '../../assets/recentprojects/conversationdesign.png';
import dailyux from '../../assets/recentprojects/dailyux.png';
import handshake from '../../assets/recentprojects/handshake.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
   const [projects, setProjects] = useState([
    { 
      id: 1,
      title: "Dog Sports At Kim's", 
      description: `UX Research & Writing. To discover the user's response to the current Dog Sports at Kim's website, discover pain points and propose a solution to improve their experiences.`,
      alter: 'Dog Sports Case Study',
      image: `${dsk}`,
    },
    { 
      id: 2,
      title: 'K9 Breed Match App', 
      description: `UX Research, Writing & React Development. The journey from idea to app, finding the perfect dog breed to mesh with your lifestyle.`,
      alter: 'K9 Breed Match App',
      image: `${breedmatch}`,
    },
    { 
      id: 3,
      title: 'Handshake App', 
      description: `UX Writing. Make billing & project tracking between Freelancers & Business Owners easy.`,
      alter: 'LoFo Project',
      image: `${handshake}`,
    },
    { 
      id: 4,
      title: 'Daily UX Writing Challenge', 
      description: `UX Writing. A UX writing prompt in your inbox every day for 14 days from Daily UX Writing.`,
      alter: 'Daily UX Writing Challenge',
      image: `${dailyux}`,
    },
    { 
      id: 5,
      title: 'Conversation Design Challenge', 
      description: `A UX writing prompt in your inbox every day for 14 days from Daily UX Writing focusing on Chat Bot Conversation.`,
      alter: 'Conversation Design Challenge',
      image: `${conversationdesign}`,
    },
  ]);

  return (
    
    
     <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              {<h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3> }
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  ); 
};
