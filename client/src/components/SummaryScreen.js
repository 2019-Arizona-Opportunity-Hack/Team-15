import React, { Component } from 'react';
import {Row,Col,Button} from 'react-bootstrap';

export default class SummaryScreen extends Component {
    render() {
        return (
            <Row className="w-100">
                <Col>
                    <div className="input-create-control">
                    <p>Last Name:  {/* this.props.summary.lastName */}</p>
                    <p>First Name: { /* this.props.summary.firstName */}</p>
                    <p>Date of Birth: {/* this.props.summary.dob */}</p>
                    <p>Address: {/* this.props.summary.address */}</p>
                    <p>Apart Number: {/* this.props.summary.arptNum */}</p>
                    <p>Zip Code: {/*this.props.summary.zipcode */}</p>
                    <p>Phone number: {/* this.props.summary.phonenumber} */}</p>
                    <p>Gender: {/* this.props.summary.gender */}</p>
                    <p>Housing Type: {/* this.props.summary.maritalstatus */}</p>
                    <p>Maritaul status: {/* */}</p>
                    <p>Ethnicity: {/* */}</p>
                    <p>Self Identify: {/* */}</p>
                    <p>Education Level: {/* */} </p>
                    <p>Primary Language: {/* */}</p>
                    <p>Have Insurance: {/*  */}</p>
                    <p>Have Primary Care Doctor: {/* */}</p>
                    <p>Take Care of Children: {/* */}</p>
                    <p>Have A Job: {/* */}</p>
                    <p>Monthly Income: {/* */}</p>
                    <p>Income Type: {/* */}</p>
                    </div>
                    <Button onClick={this.props.onSubmit} className="mr-2" style={{float:"right"}}>Submit</Button>
                </Col>
            </Row>
        )
    }
}
