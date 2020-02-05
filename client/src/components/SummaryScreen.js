import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class SummaryScreen extends Component {
    render() {
        return (
            <Col>
                <Row>
                    <Col>
                        <h3> 1 - Personal Information</h3>
                        <p>Family Name: {this.props.reviewForm.familyName}</p>
                        <p>First Name: {this.props.reviewForm.firstName}</p>
                        <p>Last Name:  {this.props.reviewForm.lastName}</p>
                        <p>Date of Birth: {this.props.reviewForm.dateOfBirth}</p>
                        <p>Gender: {this.props.reviewForm.gender}</p>
                        <p>Marital status: {this.props.reviewForm.maritalStatus}</p>

                        <h3>2 - Personal Information Continued...</h3>
                        <p>Ethnicity: {this.props.reviewForm.ethnicity}</p>
                        <p>Self-Identity: {this.props.reviewForm.selfIdentity}</p>
                        <p>Highest Education: {this.props.reviewForm.highestEducation}</p>
                        <p>Primary Language: {this.props.reviewForm.primaryLanguage}</p>
                        <p>Child Care Type: {this.props.reviewForm.childCareType}</p>

                        <h3>3 - Housing Information</h3>
                        <p>Address Line 1: {this.props.reviewForm.addressLine1}</p>
                        <p>Address Line 2: {this.props.reviewForm.addressLine1}</p>
                        <p>Zip Code: {this.props.reviewForm.zipcode}</p>
                        <p>Housing Type: {this.props.reviewForm.housingType}</p>
                        <p>Phone number: {this.props.reviewForm.phoneNumber}</p>

                        <h3>4 - Medical and Finacial Information</h3>
                        <p>Have Insurance: {this.props.reviewForm.hasInsurance}</p>
                        <p>Medical Insurance Type: {this.props.reviewForm.medicalInsType}</p>
                        <p>Have Primary Care Doctor: {this.props.reviewForm.primaryDoctor}</p>
                        <p>Employee Type: {this.props.reviewForm.employeeType}</p>
                        <p>Monthly Income: {this.props.reviewForm.monthlyIncome}</p>
                        <p>Income Type: {this.props.reviewForm.incomeType}</p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between">
                    <Button onClick={() => this.props.changeButton(3)}>Previous Button</Button>
                    <Button onClick={this.props.parentSubmit} className="mr-2">Submit</Button>
                </div>

            </Col >
        )
    }
}
