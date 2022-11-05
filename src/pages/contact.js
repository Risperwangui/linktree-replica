import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import Footer from './Footer';

const Contact = () => {
    return (
        <section className={styles['contact__page__header']}>
        <div className={styles.container}>
          <div className={styles['content']}>
            <div className={styles['content__container']}>
              <div className={styles['heading__supportingtext']}>
                <h3 className={styles.title}>Contact Me</h3>
                <p className={styles.greeting}>
                  Hi there,contact me to ask me about anything you have in mind.
                </p>
              </div>
              <div>
                  <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    );
  };
  
  export default Contact;
  

    
    