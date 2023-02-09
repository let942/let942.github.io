import './Profile.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import React from 'react';
import github from '../assets/svg/github.svg';
import linkedin from '../assets/svg/linkedin.svg';
import profilePicture from '../assets/jpeg/me.jpg';

function Contact() {
  return (
    <>
      <Container fluid className='container-profile'>
        <div className='mt-5'>
      
          <div className='d-flex justify-content-evenly mt-5'>
            <a className='mx-2' href='https://www.linkedin.com/in/leticia-chagas-marques/' target='_blank' rel='noreferrer'>
              <img className='sm' src={linkedin} alt='LinkedIn icon' />
            </a>
            <a href='https://github.com/let942' target='_blank' rel='noreferrer'>
              <img className='sm' src={github} alt='Github icon' />
            </a>
          </div>
        </div>
      </Container >
    </>
  );
}

export default Contact;