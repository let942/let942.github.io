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
      
      <div className='mt-3 mb-1 d-flex  ' > 
      
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="svg/github.svg" /> */}
      <Card.Body>
        <Card.Title>Calculator</Card.Title>
        <Card.Text>
        Uma calculadora desenvolvida em JavaScript com estrutura em html e CSS
        </Card.Text>
        <Button variant="info">

        <a className='mx-2' href='https://github.com/let942/calculator' target='_blank' rel='noreferrer'>
        Acesse o repositório
            </a>
        </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="svg/github.svg" /> */}
      <Card.Body>
        <Card.Title>Movie-manager</Card.Title>
        <Card.Text>
          Uma API para gerenciar filmes em TypeScript
        </Card.Text>
        <Button variant="info">

        <a className='mx-2' href='https://github.com/let942/movie-manager' target='_blank' rel='noreferrer'>
        Acesse o repositório
            </a>
        </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="svg/github.svg" /> */}
      <Card.Body>
        <Card.Title>Trybesmith</Card.Title>
        <Card.Text>
        Um CRUD (Create, Read, Update and Delete) de itens medievais no formato de uma API, utilizando Typescript. Foram criados endpoints que leem e escrevem em um banco de dados, utilizando o MySQL.
        </Card.Text>
        <Button variant="info">

        <a className='mx-2' href='https://github.com/let942/trybe-trybesmith' target='_blank' rel='noreferrer'>
        Acesse o repositório

            </a>
        </Button>
      </Card.Body>
    </Card>
      
      </div>
          
        </div>
  
      </Container >
    </>
  );
}

export default Projects;