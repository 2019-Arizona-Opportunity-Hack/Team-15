import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
    medicalInsType: Yup.string().required("Required"),
    hasInsurance: Yup.string().required("Required"),
    employeeType: Yup.string().required("Required"),
    primaryDoctor: Yup.string().required("Required"),
    monthlyIncome: Yup.number().required("Required"),
    incomeType: Yup.string().required("Required")
});

export default class FourCreateFormScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form4: this.props.currentForm
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    handleAction(values) {
        let action = values['action'];
        delete values['action'];
        this.setState({ form4: values });
        this.props.handler(this.state);
        this.props.addToParent();
        if (action === -1) {
            this.previous();
        } else {
            this.next();
        }
    }
    next() {
        this.props.changeButton(4);
    }
    previous() {
        this.props.changeButton(2);
    }

    render() {
        return (
            <Col>
                <Row className="w-100">
                    <Col>
                        <h2 className="text-center">4 - Medical and Financial information </h2>
                        <Formik
                            initialValues={{
                                medicalInsType: this.state.form4.medicalInsType,
                                hasInsurance: this.state.form4.hasInsurance,
                                employeeType: this.state.form4.employeeType,
                                primaryDoctor: this.state.form4.primaryDoctor,
                                monthlyIncome: this.state.form4.monthlyIncome,
                                incomeType: this.state.form4.incomeType
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                this.handleAction(values);
                            }}
                        >
                            {({ errors, touched, setFieldValue, handleSubmit }) => (
                                <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center text-left">
                                    <label>Has Insurance*</label>
                                    <Field as="select" name="hasInsurance" className={"form-control ml-3 mb-3 " + (touched.hasInsurance && errors.hasInsurance ? 'is-invalid' : '')}>
                                        <option value="">Have Insurance?</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Field>
                                    <label>Primary Doctor*</label>
                                    <Field as="select" name="primaryDoctor" className={"form-control ml-3 mb-3 " + (touched.primaryDoctor && errors.primaryDoctor ? 'is-invalid' : '')}>
                                        <option defaultValue>Have a Primary Doctor?</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </Field>
                                    <label>Medical Insurance Type*</label>
                                    <Field as="select" name="medicalInsType" className={"form-control ml-3 mb-3 " + (touched.medicalInsType && errors.medicalInsType ? 'is-invalid' : '')}>
                                        <option value="">Select Medical Insurance type...</option>
                                        <option value="Employer">Employer</option>
                                        <option value="Private">Private</option>
                                        <option value="AHCSS">AHCSS</option>
                                        <option value="Indian Health Services">Indian Health Services</option>
                                        <option value="Militarty">Military</option>
                                        <option value="None">None</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <label>Employee type*</label>
                                    <Field as="select" name="employeeType" className={"form-control ml-3 mb-3 " + (touched.employeeType && errors.employeeType ? 'is-invalid' : '')}>
                                        <option value="">Select Employee Type...</option>
                                        <option value="Post Secondary Student">Post Secondary Student</option>
                                        <option value="Full time">Full Time</option>
                                        <option value="Part time">Part Time</option>
                                        <option value="retired">Retired</option>
                                        <option value="None">None</option>
                                        <option value="Undisclosed">Undisclosed</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <label>Monthly Income*</label>
                                    <Field name="monthlyIncome" type="number" placeholder="Monthly Amount" className={"form-control ml-3 mb-3 " + (touched.monthlyIncome && errors.monthlyIncome ? 'is-invalid' : '')} />
                                    <label>Income type*</label>
                                    <Field as="select" name="incomeType" className={"form-control ml-3 mb-3 " + (touched.incomeType && errors.incomeType ? 'is-invalid' : '')}>
                                        <option value="">Select Income Type...</option>
                                        <option value="csfp" >Commodity Supplement Food Program (CSFP)</option>
                                        <option value="wic" > Supplemental Assistance WIC</option>
                                        <option value="snap" >Supplemental Nurtition Assistance Proram (SNAP)</option>
                                        <option vaue="tanf" >Cash Assistant (TANF)</option>
                                        <option value="deschildcare" >DES Child Care Subsidy</option>
                                        <option value="qualityfirstscholarship" >Quality First Scholarship</option>
                                        <option value="other" >Other</option>
                                    </Field>

                                    <div className="d-flex justify-content-between">
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
                                        }}><FaArrowRight /> Review</Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Col>
        )
    }
}
