import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
var QRCode = require('qrcode.react')

class CustomerViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            familyName: "",
            visitedDate: "",
            vistsLeft: "",
            badrequest: false,
            loading: true,
            visitId: ""
        }
    }

    componentDidMount() {

        fetch('/test.json').then(response => response.json())
            .then((result) => {
                let myarray = result.map(item => { return item; });
                this.setState({
                    familyName: myarray[0].familyName,
                    visitedDate: myarray[0].visitedDate,
                    vistsLeft: myarray[0].vistsLeft,
                    vistsId: myarray[0].visitsID
                });
            })
        console.log("Component did mount went through");
        this.setState({
            loading: false
        })
    }
    render() {
        if (this.state.badrequest) {
            return <Redirect to="/whoops" />
        }
        if (this.state.loading) {
            return (
                <PageTemplate>
                    <p className="text-white-plain">Loading</p>
                    <div className="sk-fading-circle">
                        <div className="sk-circle1 sk-circle"></div>
                        <div className="sk-circle2 sk-circle"></div>
                        <div className="sk-circle3 sk-circle"></div>
                        <div className="sk-circle4 sk-circle"></div>
                        <div className="sk-circle5 sk-circle"></div>
                        <div className="sk-circle6 sk-circle"></div>
                        <div className="sk-circle7 sk-circle"></div>
                        <div className="sk-circle8 sk-circle"></div>
                        <div className="sk-circle9 sk-circle"></div>
                        <div className="sk-circle10 sk-circle"></div>
                        <div className="sk-circle11 sk-circle"></div>
                        <div className="sk-circle12 sk-circle"></div>
                    </div>
                </PageTemplate>
            );
        } else {
            return (
                <PageTemplate>
                    <div className="splash-screen shadow" style={{ textAlign: "center" }}>
                        <Row>
                            <Col>
                                <h2>Welcome {this.state.familyName}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>User: {this.state.familyName}</p>
                                <p>Visited Since: {this.state.visitedDate}</p>
                                <p>Vists Left: 1</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <p>QR Code Scanner</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <QRCode value={this.state.visitId} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </PageTemplate>
            )
        }
    }
}
export default CustomerViewPage;
