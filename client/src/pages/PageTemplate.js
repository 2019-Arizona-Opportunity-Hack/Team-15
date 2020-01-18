import React from 'react';
import { Container, Row,Col } from 'react-bootstrap'
import { Navbar } from  'react-bootstrap'
import {Link} from 'react-router-dom';

const PageTemplate = ({ children }) => (
    <div id="page-template">
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand><Link to="/">Chandler Care Center</Link> </Navbar.Brand>
    {/* <Nav className="mr-auto">
    </Nav> */}
  </Navbar>
        <Container>
            <Row id="logo-header">
                <Col></Col>
            </Row>
            {children}
        </Container>
    </div>
);

export default PageTemplate;