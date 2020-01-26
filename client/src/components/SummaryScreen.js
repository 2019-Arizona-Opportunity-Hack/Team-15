import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class SummaryScreen extends Component {
    render() {
        return (
            <Row>
                <Row>
                    <Col>
                        <p>Family Name: {this.props.reviewForm.familyName}</p>
                    </Col>
                    <Col>
                        <p>First Name: {this.props.reviewForm.firstName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Last Name:  {this.props.reviewForm.lastName}</p>
                    </Col>
                    <Col>
                        <p>Date of Birth: {this.props.reviewForm.dateOfBirth}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Address Line 1: {this.props.reviewForm.addressLine1}</p>
                    </Col>
                    <Col>
                        <p>Address Line 2: {this.props.reviewForm.addressLine1}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Zip Code: {this.props.reviewForm.zipcode}</p>
                    </Col>
                    <Col>
                        <p>Phone number: {this.props.reviewForm.phoneNumber}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Gender: {this.props.reviewForm.gender}</p>
                    </Col>
                    <Col>
                        <p>Housing Type: {this.props.reviewForm.housingType}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Marital status: {this.props.reviewForm.maritalStatus}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Ethnicity: {this.props.reviewForm.ethnicity}</p>
                    </Col>
                    <Col>
                        <p> Self-Identity: {this.props.reviewForm.selfIdentity}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Highest Education: {this.props.reviewForm.highestEducation}</p>
                    </Col>
                    <Col>
                        <p>Primary Language: {this.props.reviewForm.primaryLanguage}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Have Insurance: {this.props.reviewForm.hasInsurance}</p>
                    </Col>
                    <Col>
                        <p>Have Primary Care Doctor: {this.props.reviewForm.primaryDoctor}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Medical Insurance Type: {this.props.reviewForm.medicalInsType}</p>
                    </Col>
                    <Col>
                        <p>Child Care Type: {this.props.reviewForm.childCareType}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Employee Type: {this.props.reviewForm.employeeType}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Monthly Income: {this.props.reviewForm.monthlyIncome}</p>
                    </Col>
                    <Col>
                        <p>Income Type: {this.props.reviewForm.incomeType}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.props.parentSubmit} className="mr-2" style={{ float: "right" }}>Submit</Button>
                    </Col>
                </Row>
            </Row>
        )
    }
}
