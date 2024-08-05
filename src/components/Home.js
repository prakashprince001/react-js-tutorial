import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to Our Company</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
            </p>
            <Button variant="primary">Learn more</Button>
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel metus massa. Nulla facilisi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
