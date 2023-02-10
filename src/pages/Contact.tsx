import './Contact.css';

import Container from 'react-bootstrap/Container';
import github from '../assets/svg/github.svg';
import linkedin from '../assets/svg/linkedin.svg';

function Contact() {
  return (
    <>
      <Container fluid className='contact-profile'>
        <div className='mt-5'>
          <div className='d-flex justify-content-evenly mt-5'>
            <h2>email: let942@gmail.com</h2>
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