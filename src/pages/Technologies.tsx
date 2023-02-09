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

function Technologies() {
  return (
    <>
      <Container fluid className='container-profile'>
        <h2 className='mt-2 mb-1'>Linguagens e Technologias</h2>
        <div className='mt-1'>
        <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Docker</li>
        </ul>
          
        </div>
      </Container >
    </>
  );
}

export default Technologies;