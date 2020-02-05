import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";



const validationSchema = Yup.object({
    familyName: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    gender: Yup.string().required("Required"),
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
    //family name
    //first name
    //last name
    //date of birth
    //gender
    //martial status


    render() {
        return (
            <Col>
                <Row className="w-100">
                    <Col>
                        <h2 className="text-center">1 - Personal Information</h2>
                        <Formik
                            initialValues={{
                                familyName: this.state.form1.familyName || '',
                                firstName: this.state.form1.firstName || '',
                                lastName: this.state.form1.lastName || '',
                                dateOfBirth: this.state.form1.dateOfBirth || '',
                                gender: this.state.form1.gender || '',
                                housingType: this.state.form1.housingType || '',
                                maritalStatus: this.state.form1.maritalStatus || ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={this.next}
                        >
                            {({ errors, touched }) => (
                                <Form className="form-group text-left">
                                    <label>Family Name*</label>
                                    <Field name="familyName" className={"form-control ml-3 mb-3 " + (touched.familyName && errors.familyName ? 'is-invalid' : '')} placeholder="Family Name" />
                                    <label>First Name*</label>
                                    <Field name="firstName" className={"form-control ml-3 mb-3 " + (touched.firstName && errors.firstName ? 'is-invalid' : '')} placeholder="First Name" />
                                    <label>Last Name*</label>
                                    <Field name="lastName" className={"form-control ml-3 mb-3 " + (touched.lastName && errors.lastName ? 'is-invalid' : '')} placeholder="Last Name" />
                                    <label>Date of Birth*</label>
                                    <Field type="date" name="dateOfBirth" className={"form-control ml-3 mb-3 " + (touched.dateOfBirth && errors.dateOfBirth ? 'is-invalid' : '')} placeholder="Date Of Birth" />
                                    <label>Gender*</label>
                                    <Field name="gender" as="select" className={"form-control ml-3 mb-3 " + (touched.gender && errors.gender ? 'is-invalid' : '')} placeholder="Gender">
                                        <option value="">Select Gender...</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Field>
                                    <label>Martial Status*</label>
                                    <Field name="maritalStatus" as="select" className={"form-control ml-3 mb-3 " + (touched.maritalStatus && errors.maritalStatus ? 'is-invalid' : '')} placeholder="Marital Status">
                                        <option value="">Select Marital Status....</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="seperated">Seperated</option>
                                        <option value="windowed">Windowed</option>
                                        <option value="undisclosed">Undisclosed</option>
                                    </Field>
                                    <div className="input-create-control d-flex justify-content-center">
                                        <Button type="submit" className="button-create-slide">Next <FaArrowRight /></Button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row >
            </Col>
        )
    }
}
