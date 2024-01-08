import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Lilac1 from './img/Lilac.jpg';
import LovePoem1 from './img/LovePoem.jpg';
import Palette1 from './img/Palette.jpg';


const album = () => {

    return (
    
          <Container>
            <Row className="justify-content-center">
              <Col md={4} className="image">
                <Link to="/albums/LovePoem">
                  <img className="img-fluid" alt="LovePoem" src={LovePoem1}></img>
                </Link>
                <h3>Love poem</h3>
                <p>The 5th Mini Album</p>
              </Col>
              <Col md={4} className="image">
                <Link to="/albums/Lilac">
                  <img className="img-fluid" alt="Lilac" src={Lilac1}></img>
                </Link>
                <h3>LILAC</h3>
                <p>The 5th Album</p>
              </Col>
              <Col md={4} className="image">
                <Link to="/albums/Palette">
                  <img className="img-fluid" alt="Palette" src={Palette1}></img>
                </Link>
                <h3>Palette</h3>
                <p>The 4th Album</p>
              </Col>
            </Row>
          </Container> 
      );
    };

export default album;
