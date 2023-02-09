import './NotFound.css';
import '../components/RootLayout.css';

import { Link, useRouteError } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import IErrorObject from '../interfaces/IErrorObject';
import NavBar from '../components/NavBar';
import React from 'react';

function ErrorPage() {
  const error: IErrorObject = useRouteError() as IErrorObject;
  console.error('Erro: ', error);

  return (
    <>
      <NavBar />
      <main className='main-size'>
        <Container fluid id="error-page" className='container-nfound bg-light'>
          <h1>404</h1>
          <p>Parece que ocorreu um erro.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to='/'>
            <Button variant='dark'>Voltar para a página principal!</Button>
          </Link>
        </Container>
      </main>
    </>
  );
}

export default ErrorPage;
