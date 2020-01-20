import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

export default class CustomerSplashScreen extends Component {
    render() {
        return (
            <Container>
                 <Row>
                    <Col style={{marginTop:"5em",textAlign: "center"}}>
                        <div className="splash-screen shadow-lg">
                            <h1 style={{textAlign:"left"}}><FaHome /> Welcome to Chandler Care Center!</h1>
                            <div className="border-divier"></div>
                            <p className="mt-1">Have you alreadly registered with us?</p>
                            <div>
                                <Button variant="primary" block> <Link to="/newuser">No!</Link></Button>
                            </div>
                            <br></br>
                            <div>
                                <Button variant="primary" block><Link to="/login">Yes!</Link></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
