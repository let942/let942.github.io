import './Technologies.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import ListGroup  from 'react-bootstrap/ListGroup';
import React from 'react';
import github from '../assets/svg/github.svg';
import linkedin from '../assets/svg/linkedin.svg';
import profilePicture from '../assets/jpeg/me.jpg';

function Technologies() {
  return (
    <>
      <Container fluid className='container-tecnologies'>
        <h1 className='mt-2 mb-1'>Linguagens e Technologias</h1>
        <div className='mt-1 mb-5 d-flex justify-content-evenly mt-5'>
          <div >
          </div>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Linguagens e Ferramentas</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>TypeScript</ListGroup.Item>
                  <ListGroup.Item>Python</ListGroup.Item>
                  <ListGroup.Item>HTML</ListGroup.Item>
                  <ListGroup.Item>CSS</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Bancos de dados</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>MySQL</ListGroup.Item>
                  <ListGroup.Item>Mondodb</ListGroup.Item>
                  <ListGroup.Item>Postgres</ListGroup.Item>
                  <ListGroup.Item>Sequelize</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Testes</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Jest</ListGroup.Item>
                  <ListGroup.Item>Testing Library</ListGroup.Item>
                  <ListGroup.Item>Mocha.js</ListGroup.Item>
                  <ListGroup.Item>Chai.js</ListGroup.Item>
                  <ListGroup.Item>Sinon.js</ListGroup.Item>
                </ListGroup>
              </Card>
        </div>
      </Container >
    </>
  );
}

export default Technologies;
