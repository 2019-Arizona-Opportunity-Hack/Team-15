import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string(),
    zipcode: Yup.string().test('len', 'Must be exactly 5 characters', val => val && val.length === 5),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    housingType: Yup.string().required("Required"),
});

export default class ThirdCreateFormScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form3: this.props.currentForm
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    handleAction(values) {
        let action = values['action'];
        delete values['action'];
        this.setState({ form3: values });
        this.props.handler(this.state);
        if (action === -1) {
            this.previous()
        } else {
            this.next();
        }
    }
    next() {
        this.props.changeButton(3);
    }
    previous() {
        this.props.changeButton(1);
    }

    render() {
        return (
            <Col>
                <Row className="w-100">
                    <Col>
                        <h2 className="text-center">3 - Housing Information</h2>
                        <Formik
                            initialValues={{

                                addressLine1: this.state.form3.addressLine1 || '',
                                addressLine2: this.state.form3.addressLine2 || '',
                                zipcode: this.state.form3.zipcode || '',
                                phoneNumber: this.state.form3.phoneNumber || '',
                                housingType: this.state.form3.housingType || '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                this.handleAction(values);
                            }}
                        >
                            {({ errors, touched, setFieldValue, handleSubmit }) => (
                                <Form onSubmit={handleSubmit} className="text-left">
                                    <label>Address Line 1*</label>
                                    <Field name="addressLine1" className={"form-control ml-3 mb-3 " + (touched.addressLine1 && errors.addressLine1 ? 'is-invalid' : '')} placeholder="Address Line 1" />
                                    <label>Address Line 2</label>
                                    <Field name="addressLine2" className={"form-control ml-3 mb-3 " + (touched.addressLine2 && errors.addressLine2 ? 'is-invalid' : '')} placeholder="Address Line 2" />
                                    <label>Zipcode*</label>
                                    {errors.zipcode && touched.zipcode ? (
                                        <div className="p-1 border border-danger mb-2">{errors.zipcode}</div>
                                    ) : null}
                                    <Field name="zipcode" type="number" className={"form-control ml-3 mb-3 " + (touched.zipcode && errors.zipcode ? 'is-invalid' : '')} placeholder="Zipcode" />
                                    <label>Housing Type*</label>
                                    <Field name="housingType" as="select" className={"form-control ml-3 mb-3 " + (touched.housingType && errors.housingType ? 'is-invalid' : '')} placeholder="Housing Type">
                                        <option defaultValue>Select Housing Type...</option>
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
                                    <label>Phone Number</label>
                                    {errors.phoneNumber && touched.phoneNumber ? (
                                        <div className="p-1 border border-danger mb-2">{errors.phoneNumber}</div>
                                    ) : null}
                                    <Field name="phoneNumber" type="number" className={"form-control ml-3 mb-3 " + (touched.phoneNumber && errors.phoneNumber ? 'is-invalid' : '')} placeholder="Phone Number" />

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
                                        }}><FaArrowRight />  Next
                                        </Button>
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
