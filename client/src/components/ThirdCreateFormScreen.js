import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
    medicalInsType: Yup.string().required("Required"),
    hasInsurance: Yup.string().required("Required"),
    childCareType: Yup.string().required("Required"),
    employeeType: Yup.string().required("Required"),
    primaryDoctor: Yup.string().required("Required")
});

export default class ThirdCreateFormScreen extends Component {

    constructor() {
        super();
        this.state = {
            form3: {
                medicalInsType: '',
                hasInsurance: '',
                childCareType: '',
                employeeType: '',
                primaryDoctor: '',

            }

        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    handleAction(values) {
        let action = values['action'];
        delete values['action'];
        this.setState({form3: values});
        this.props.handler(this.state);
        if(action === -1){
            this.previous()
        } else {
            this.next();
        }
    }
    next() {
        this.props.changeButton(3);
    }
    previous(){
        this.props.changeButton(1);
    }

    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h3 className="text-center">Third Step</h3>
                    <Formik
                        initialValues = {{
                            medicalInsType: this.state.form3.medicalInsType,           
                            hasInsurance: this.state.form3.hasInsurance,
                            childCareType: this.state.form3.childCareType,
                            employeeType: this.state.form3.employeeType,
                            primaryDoctor: this.state.form3.primaryDoctor
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                            this.handleAction(values);
                        }}
                    >
                        {({errors, touched, setFieldValue, handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    <div><label name="hasInsurance"> Have Insurance?</label></div>
                                    <Field as="select" name="hasInsurance" className="input-create-control mb-3">
                                        <option defaultValue>Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Field>
                                    {errors.hasInsurance && touched.hasInsurance ? (
                                    <div>{errors.hasInsurance}</div>
                                    ) : null}
                                    <div><label name="primaryDoctor"> Have Primary Doctor?</label></div>
                                    <Field as="select" name="primaryDoctor" className="input-create-control mb-3">
                                        <option defaultValue>Select...</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </Field>
                                    {errors.primaryDoctor && touched.primaryDoctor ? (
                                    <div>{errors.primaryDoctor}</div>
                                    ) : null}
                                    <div><label name="medicalInsType"> Medical Insurance Type</label></div>
                                    <Field as="select" name="medicalInsType" className="input-create-control mb-3">
                                        <option defaultValue>Select...</option>
                                        <option value="Employer">Employer</option>
                                        <option value="Private">Private</option>
                                        <option value="AHCSS">AHCSS</option>
                                        <option value="Indian Health Services">Indian Health Services</option>
                                        <option value="Militarty">Military</option>
                                        <option value="None">None</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    {errors.medicalInsType && touched.medicalInsType ? (
                                    <div>{errors.medicalInsType}</div>
                                    ) : null}
                                    <div><label name="childCareType">Child Care Type</label></div>
                                    <Field as="select" name="childCareType" className="input-create-control mb-3">
                                        <option defaultValue>Select...</option>
                                        <option value="My partner or I take care of my children at home">My partner or I take care of my children at home</option>
                                        <option value="take">Headstart</option>
                                        <option value="Child Care Center/ Preschool Program">Child Care Center/ Preschool Program</option>
                                        <option value="Family Child Care Home">Family Child Care Home</option>
                                        <option value="Relative/Neighbor or babysitter">Relative/Neighbor or babysitter</option>
                                    </Field>
                                    {errors.childCareType && touched.childCareType ? (
                                    <div>{errors.childCareType}</div>
                                    ) : null}
                                    <div><label name="employeeType">Employee Type</label></div>
                                    <Field as="select" name="employeeType" className="input-create-control mb-3">
                                        <option defaultValue>Select...</option>
                                        <option value="Post Secondary Student">Post Secondary Student</option>
                                        <option value="Full time">Full Time</option>
                                        <option value="Part time">Part Time</option>
                                        <option value="retired">Retired</option>
                                        <option value="None">None</option>
                                        <option value="Undisclosed">Undisclosed</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    {errors.employeeType && touched.employeeType ? (
                                    <div>{errors.employeeType}</div>
                                    ) : null}
                                    <div className="input-create-control d-flex justify-content-between">
                                        <Button type='button' onClick={() => {
                                            //previous slide
                                                setFieldValue('action', -1, false)
                                                handleSubmit()
                                            }}><FaArrowLeft />  Previous 
                                        </Button>
                                        <Button type='button' onClick={() => {
                                            //next slide
                                                setFieldValue('action', +1, false)
                                                handleSubmit()
                                            }}><FaArrowRight />  Next 
                                        </Button>
                                    </div>
                                </Form>
                        )}
                    </Formik>
                </Col>
            </Row >
        )
    }
}
