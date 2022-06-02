/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Contact.css';

import profile2 from '../../assets/profile2.png';
//import { Email } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Get in touch";
  const aboutme = ``;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile2 + ")",
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
            <a href="mailto:maddisonhaffer@gmail.com" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send an email</Typography>
            </a> <br></br>
            <a href="https://www.linkedin.com/in/maddisonhaffer/" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Connect on LinkedIn</Typography>
            </a>
            
          </div>
        </div>
      </Container>
    </section>
  );
};











// /* eslint-disable no-unused-vars */
// import React from "react";
// import { useRef } from "react";
// import { Container, Typography, TextField, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextDecrypt } from "../content/TextDecrypt";
// import Swal from 'sweetalert2';

// import emailjs from '@emailjs/browser';

// import './Contact.css';

// const useStyles = makeStyles((theme) => ({
//   main: {
//     maxWidth: '100vw',
//     marginTop: '3em',
//     marginBottom: "3em",
//   },
//   form: {
//     width: '100%',
//   },
//   formfield: {
//     width: '100%',
//     marginBottom: '2rem',
//   },
// }));



// export const Contact = () => {
//   const classes = useStyles();
//   const greetings = "Say hello.";

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_gi4lhnv', 'template_0g6y8mc', form.current, 'dtf4BS7osBaF4EMXo')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: "Thanks for reaching out! I'll be in touch soon",
//       showConfirmButton: false,
//       timer: 1500
//     })
//     e.target.reset()



    
//   };



//     return (
//       <section id="contact">
//         <Container component="main" className={classes.main} maxWidth="md">
//           <div className="contact">
//             <div className="_form_wrapper">
//               <form ref={form} onSubmit={sendEmail} className={classes.form}>
//                 <TextField
//                   id="outlined-name-input"
//                   label="Name"
//                   type="text"
//                   size="small"
//                   variant="filled"
//                   name="name"
//                   className={classes.formfield}
//                 />
//                 <TextField
//                   id="outlined-password-input"
//                   label="Email"
//                   type="email"
//                   size="small"
//                   variant="filled"
//                   name="email"
//                   className={classes.formfield}
//                 />
//                 <TextField
//                   id="outlined-password-input"
//                   label="Message"
//                   type="textarea"
//                   size="small"
//                   multiline
//                   minRows={5}
//                   variant="filled"
//                   name="message"
//                   className={classes.formfield}
//                 />
//                 <button type="submit" value="Send" className="submit-btn">
//                 <i className="fas fa-terminal"></i>
//                   <Typography component='span'> Send Message</Typography>
//                 </button>
//               </form>
//             </div>
//             <h1 className="contact_msg">
//               <TextDecrypt text={greetings}/>
//             </h1>
//           </div>
//         </Container>
//       </section>
      
//   );

  
// };
