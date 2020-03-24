import React from 'react';
import Section from '../Components/Section'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DebugLog from 'Tech/DebugLog';
import { Grid, TextField, Button } from '@material-ui/core';
import {SmallView} from 'Tech/Breakpoints'

import "./Contact.css";

export default function Contact() {

    return(
    <Section id="contact" title="contact">
        <ContactForm></ContactForm>
    </Section>
    );
}

function ContactForm(props) {

    const [email, setEmail] = React.useState('');

    const {small, extraSmall} = SmallView();

    function handleChange(event) {
        const emailObj = Object.assign(email, event.target.value);
        setEmail(emailObj);
        DebugLog(...emailObj);
    }

    function handleSubmit(event) {
        console.log(email);
    }

    return(
        <ValidatorForm
            onSubmit={handleSubmit}
            onError={errors=>DebugLog(errors)}
            id="emailForm" 
            className={extraSmall? "extraSmall" : "" + small ? "small" : "'"}
        >
        <Grid item xs={12} id="emailGrid">
            <Grid container direction="row" className="nameInputs" spacing={4}>
                <Grid item xs={4}>
                    <TextValidator
                        onChange={handleChange}
                        name="name"
                        value={email.name}
                        
                        variant="outlined"
                        label="Name"

                        required
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                    </TextValidator>
                </Grid>
                <Grid item xs={4}>
                    <TextValidator
                        onChange={handleChange}
                        name="email address"
                        value={email.replyTo}

                        variant="outlined"
                        label="Email Address"
                        
                        required
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'not a valid email']}
                    >
                    </TextValidator>
                </Grid>
                <Grid item xs={4}>
                    <TextValidator
                        onChange={handleChange}
                        name="company"
                        value={email.company}

                        variant="outlined"
                        label="Company"
                        
                        required
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                    </TextValidator>
                </Grid>
            </Grid>
            <Grid container direction="row" className="emailInputs" spacing={4}>
                <Grid item xs={6}>
                    <TextValidator
                        onChange={handleChange}
                        name="cc"
                        value={email.cc}

                        validators={['isEmail']}
                        errorMessages={['not a valid email']}

                        variant="outlined"
                        label="CC"
                    >
                    </TextValidator>
                </Grid>
                <Grid item xs={6}>
                    <TextValidator
                        onChange={handleChange}
                        name="bcc"
                        value={email.bcc}

                        validators={['isEmail']}
                        errorMessages={['not a valid email']}

                        variant="outlined"
                        label="BCC"
                    >
                    </TextValidator>
                </Grid>
            </Grid>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <TextField
                    onChange={handleChange}
                    name="message"
                    value={email.message}

                    multiline
                    rows="5"

                    variant="outlined"
                    label="Message"
                    placeholder="I'd like to get in touch!"


                    ></TextField>
                </Grid>
            </Grid>
        
            <Grid container spacing={4}>
                <Grid item xs={12} id="contactSubmitContainer">
                <Button
                    id="contactSubmit"
                    variant="outlined"
                    >
                        Submit
                </Button>
                </Grid>
            </Grid>

        </Grid>
        </ValidatorForm>
    );
}