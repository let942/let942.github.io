import './Projects.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import React from 'react';
import github from '../assets/svg/github.svg';
import linkedin from '../assets/svg/linkedin.svg';
import profilePicture from '../assets/jpeg/me.jpg';

function Projects() {
  return (
    <>
      <Container fluid className='container-projects'>
      <h2 className='mt-2 mb-1'>Projetos</h2>
      <div className='mt-3 mb-1 d-flex  ' >

        <div>
      <a href='https://github.com/let942' target='_blank' rel='noreferrer'>
      Acesse meu repositório no GitHub! 
            </a>

        </div>
      
      </div>
          
  
      </Container >
    </>
  );
}

export default Projects;