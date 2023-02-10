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

function Profile() {
  return (
    <>
      <Container fluid className='container-profile'>
        <Image src={profilePicture} alt='Foto de perfil' className='rounded-circle profile-picture' />
        <h1 className='mt-2 mb-1'>&lt; Letícia Chagas Marques &gt;</h1>
        <h2 className='mt-2 mb-1'>Web Developer Full Stack (ela/dela)</h2>
        <div className='mt-5'>
          <ButtonGroup>
            <Button variant="dark">
              <Link to="/" className="text-decoration-none text-reset">Sobre Mim</Link>
            </Button>
            <Button variant="dark">
              <Link to="/contact" className="text-decoration-none text-reset">Entre em contato</Link>
            </Button>
            <Button variant="dark">
              <Link to="/projects" className="text-decoration-none text-reset">Meu Portifólio</Link>
            </Button>
          </ButtonGroup>
          <div className=' mt-5 mb-5'>
            <p>Olá, eu sou Letícia Chagas, tenho graduação e mestrado na área de Ciências Biologia e atualmente estou abraçando o desafio de me tornar uma desenvolvedora Full-Stack. Possuo ampla experiência em organização de eventos e em atendimento ao público. Criatividade, organização e resolução de problemas são meus principais talentos. </p>
            <p>Trabalho para promover com inovação soluções inteligentes no domínio tecnológico e acredito honestamente que relações genuínas com as pessoas são a chave transformar o mundo.</p>
            <p>Eu adoro tecnologia, música, jogos, artigos de papelaria e arte.</p>
          </div>
        </div>
      </Container >
    </>
  );
}

export default Profile;