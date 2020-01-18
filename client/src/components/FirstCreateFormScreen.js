import React, { Component } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import {FaArrowRight} from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    familyName: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    // gender: Yup.string().required("Required"),
    // housingType: Yup.string().required("Required"),
    // maritalStatus: Yup.string().required("Required")
});


export default class FirstCreateFormScreen extends Component {

    constructor(props) {
        super();
        this.state = {
            form1: props.form1 || {}
        }
        this.next = this.next.bind(this);
    }

    next(values){
        this.setState({form1: values});
        this.props.handler(this.state);
        this.props.changeButton(1);
    }

    render() {
        console.log(this.state);
        return (
            <Row className="w-100">
                <Col>
                    <h2 className="text-center">First Step</h2>
                    <h1>Signup</h1>
                    <Formik
                        initialValues={{
                            familyName: this.state.form1.familyName || '',
                            firstName: this.state.form1.firstName || '',
                            lastName: this.state.form1.lastName || '',
                            dateOfBirth: this.state.form1.dateOfBirth || '',
                            addressLine1: this.state.form1.addressLine1 || '',
                            addressLine2: this.state.form1.addressLine2 || '',
                            zipcode: this.state.form1.zipcode || '',
                            phoneNumber: this.state.form1.phoneNumber || '',
                            gender: this.state.form1.gender || '',
                            housingType: this.state.form1.housingType || '',
                            maritalStatus: this.state.form1.maritalStatus || ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit = {this.next}
                    >
                        {({ errors, touched }) => (
                        <Form>
                            <Field name="familyName" className="input-create-control mb-3"/>
                            {errors.familyName && touched.familyName ? (
                            <div>{errors.familyName}</div>
                            ) : null}
                            
                            <Field name="firstName" className="input-create-control mb-3" />
                            {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                            ) : null}
                            <Field name="lastName" className="input-create-control mb-3" />
                            {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                            ) : null}
                            
                            <Field name="dateOfBirth" className="input-create-control mb-3" />
                            {errors.dateOfBirth && touched.dateOfBirth ? (
                            <div>{errors.dateOfBirth}</div>
                            ) : null}
                            <Field name="addressLine1" className="input-create-control mb-3" />
                            {errors.addressLine1 && touched.addressLine1 ? (
                            <div>{errors.addressLine1}</div>
                            ) : null}
                            <Field name="addressLine2" className="input-create-control mb-3" />
                            {errors.addressLine2 && touched.addressLine2 ? (
                            <div>{errors.addressLine2}</div>
                            ) : null}
                            <Field name="zipcode" className="input-create-control mb-3" />
                            {errors.zipcode && touched.zipcode ? (
                            <div>{errors.zipcode}</div>
                            ) : null}
                            <Field name="phoneNumber" className="input-create-control mb-3" />
                            {errors.phoneNumber && touched.phoneNumber ? (
                            <div>{errors.phoneNumber}</div>
                            ) : null}
                            <Field name="gender" as="select" className="input-create-control mb-3">
                                {/* <option value="" selected disabled hidden>Select your gender</option> */}
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                            {errors.gender && touched.gender ? (
                            <div>{errors.gender}</div>
                            ) : null}
                            <Field name="housingType" as="select" className="input-create-control mb-3">
                                {/* <option value="" selected disabled hidden>Choose your housing yype</option> */}
                                <option value="emergency">Emergency Housing Shelter/Mission/Transistional</option>
                                <option value="evacuee">Evacuee</option>
                                <option value="ownhome">Own Home</option>
                                <option value="privaterental">Private Rental</option>
                                <option value="publichousing">public housing</option>
                                <option value="undisclosed">Undisclosed</option>
                                <option value="unhoused">Unhoused</option>
                                <option value="withfamily">With family/friends</option>
                                <option value="youthhome">Youth Home/Shelter</option>
                                <option value="refugee">Refugee</option>
                            </Field>
                            {errors.housingType && touched.housingType ? (
                            <div>{errors.housingType}</div>
                            ) : null}
                            <Field name="maritalStatus" as="select" className="input-create-control mb-3">
                                {/* <option value="" selected disabled hidden>Choose your martial status</option> */}
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
                            <Button type="submit" className="button-create-slide">Next <FaArrowRight /></Button>
                        </Form>
                        )}
                    </Formik>
                </Col>
            </Row >
        )
    }
}
