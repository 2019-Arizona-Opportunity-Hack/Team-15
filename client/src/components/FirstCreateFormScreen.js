import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
    familyName: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string(),
    zipcode: Yup.number().test('len', 'Must be exactly 5 characters', val => val.toString().length === 5),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    gender: Yup.string().required("Required"),
    housingType: Yup.string().required("Required"),
    maritalStatus: Yup.string().required("Required")
});


export default class FirstCreateFormScreen extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            form1: props.currentForm
        }
        this.next = this.next.bind(this);
    }

    next(values) {
        this.setState({ form1: values });
        this.props.handler(this.state);
        this.props.changeButton(1);
    }

    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h2 className="text-center">1st Step / Four Steps</h2>
                    <Formik
                        initialValues={{
                            familyName: this.state.form1.familyName,
                            firstName: this.state.form1.firstName,
                            lastName: this.state.form1.lastName,
                            dateOfBirth: this.state.form1.dateOfBirth,
                            addressLine1: this.state.form1.addressLine1,
                            addressLine2: this.state.form1.addressLine2,
                            zipcode: this.state.form1.zipcode,
                            phoneNumber: this.state.form1.phoneNumber,
                            gender: this.state.form1.gender,
                            housingType: this.state.form1.housingType,
                            maritalStatus: this.state.form1.maritalStatus
                        }}
                        validationSchema={validationSchema}
                        onSubmit={this.next}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field name="familyName" className="input-create-control mb-3" placeholder="Family Name" />
                                {errors.familyName && touched.familyName ? (
                                    <div>{errors.familyName}</div>
                                ) : null}

                                <Field name="firstName" className="input-create-control mb-3" placeholder="First Name" />
                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}
                                <Field name="lastName" className="input-create-control mb-3" placeholder="Last Name" />
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}

                                <Field type="date" name="dateOfBirth" className="input-create-control mb-3" placeholder="Date Of Birth" />
                                {errors.dateOfBirth && touched.dateOfBirth ? (
                                    <div>{errors.dateOfBirth}</div>
                                ) : null}
                                <Field name="addressLine1" className="input-create-control mb-3" placeholder="Address Line 1" />
                                {errors.addressLine1 && touched.addressLine1 ? (
                                    <div>{errors.addressLine1}</div>
                                ) : null}
                                <Field name="addressLine2" className="input-create-control mb-3" placeholder="Address Line 2" />
                                {errors.addressLine2 && touched.addressLine2 ? (
                                    <div>{errors.addressLine2}</div>
                                ) : null}
                                <Field name="zipcode" className="input-create-control mb-3" placeholder="Zipcode" />
                                {errors.zipcode && touched.zipcode ? (
                                    <div>{errors.zipcode}</div>
                                ) : null}
                                <Field name="phoneNumber" className="input-create-control mb-3" placeholder="Phone Number" />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <div>{errors.phoneNumber}</div>
                                ) : null}

                                <div><label name="gender">Gender</label></div>
                                <Field name="gender" as="select" className="input-create-control mb-3" placeholder="Gender">
                                    <option defaultValue>Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                                {errors.gender && touched.gender ? (
                                    <div>{errors.gender}</div>
                                ) : null}

                                <div><label name="housingType">Housing Type</label></div>
                                <Field name="housingType" as="select" className="input-create-control mb-3" placeholder="Housing Type">
                                    <option defaultValue>Select...</option>
                                    <option value="emergency">Emergency Housing Shelter/Mission/Transistional</option>
                                    <option value="evacuee">Evacuee</option>
                                    <option value="own home">Own Home</option>
                                    <option value="private Rental">Private Rental</option>
                                    <option value="public Housing">public housing</option>
                                    <option value="Undisclosed">Undisclosed</option>
                                    <option value="unhoused">Unhoused</option>
                                    <option value="with family">With family/friends</option>
                                    <option value="youth home">Youth Home/Shelter</option>
                                    <option value="refugee">Refugee</option>
                                </Field>
                                {errors.housingType && touched.housingType ? (
                                    <div>{errors.housingType}</div>
                                ) : null}

                                <div><label name="maritalStatus">Marital Status</label></div>
                                <Field name="maritalStatus" as="select" className="input-create-control mb-3" placeholder="Marital Status">
                                    <option defaultValue>Select...</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="seperated">Seperated</option>
                                    <option value="windowed">Windowed</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </Field>
                                {errors.maritalStatus && touched.maritalStatus ? (
                                    <div>{errors.maritalStatus}</div>
                                ) : null}
                                <div className="input-create-control d-flex justify-content-center">
                                    <Button type="submit" className="button-create-slide">Next <FaArrowRight /></Button>
                                </div>
                                
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row >
        )
    }
}
