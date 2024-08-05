import React from 'react';
import { Container, Pagination } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto fixed-bottom">
      <Container>
        <div className="mb-3">
          <p className="mb-1">&copy; 2024 Company Name. All rights reserved.</p>
          <p>Follow Us: 
            <a href="https://facebook.com" className="text-white mx-2">Facebook</a>|
            <a href="https://twitter.com" className="text-white mx-2">Twitter</a>|
            <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          </p>
        </div>
        {/* <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination> */}
      </Container>
    </footer>
  );
};

export default Footer;
