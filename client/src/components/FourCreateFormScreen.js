import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
    monthlyIncome: Yup.string().required("Required"),
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
        this.props.changeButton(1);
    }

    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h2 className="text-center">4th Step/Four Steps</h2>
                    <Formik
                        initialValues={{
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
                            <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
                                <Field type="text" name="monthlyIncome" placeholder="Monthly Amount" className="input-create-control mb-3" />
                                {errors.monthlyIncome && touched.monthlyIncome ? (
                                    <div>{errors.monthlyIncome}</div>
                                    ) : null}
                                <div><label name="hasInsurance"> Income Type</label></div>
                                <Field as="select" name="incomeType" className="input-create-control mb-3">
                                    <option defaultValue>Select...</option>
                                    <option value="csfp" >Commodity Supplement Food Program (CSFP)</option>
                                    <option value="wic" > Supplemental Assistance WIC</option>
                                    <option value="snap" >Supplemental Nurtition Assistance Proram (SNAP)</option>
                                    <option vaue="tanf" >Cash Assistant (TANF)</option>
                                    <option value="deschildcare" >DES Child Care Subsidy</option>
                                    <option value="qualityfirstscholarship" >Quality First Scholarship</option>
                                    <option value="other" >Other</option>
                                </Field>
                                {errors.incomeType && touched.incomeType ? (
                                    <div>{errors.incomeType}</div>
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
                                    }}><FaArrowRight /> Review</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        )
    }
}
