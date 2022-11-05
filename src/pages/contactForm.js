import React from 'react';
import styles from './ContactForm.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Textarea } from '@mantine/core';

const ContactForm = () => {
    const title ="Risper"
    return (
        <form>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="first_name" required placeholder="Enter your first name"></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`${styles.lastName} form-group`}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="last_name" required placeholder="Enter your last name"></input>
                    </div>
                </div>
            </div><br></br>
            <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" id="email"  required placeholder="yourname@email.com"></input>
            </div><br></br>
            <div className="form-group">
                <p className={styles.message}>Message</p>
                <textarea id='message' required className="form-control" placeholder="Send me a message and I'll reply you as soon as possible" rows={4}></textarea>
            </div><br></br>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="agree" name="agree" value="agree"></input>
                <label htmlFor="agree">&nbsp;You agree to provide your data to {title} who may contact you</label>
            </div><br></br>
            <div className="form-group">
                <button id="btn__submit" className="btn btn-primary w-100">Send Message</button>
            </div>
      </form>
    );
  };
  
  export default ContactForm;
  