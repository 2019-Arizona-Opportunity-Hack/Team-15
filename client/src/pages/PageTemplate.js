import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const PageTemplate = ({ children }) => (
    <div id="page-template">
        <Container>
            <Row id="logo-header">
                <Col className="bg-primary pt-1"><span className="arrow"></span><h1><Link to="/">Chandler Care Center</Link></h1></Col>
            </Row>
            {children}
        </Container>
    </div>
);

export default PageTemplate;