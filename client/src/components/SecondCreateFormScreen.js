import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    ethnicity: Yup.string().required("Required"),
    selfIdentity: Yup.array().of(Yup.string()).required("Select at least one category"),
    highestEducation: Yup.string().required("Required"),
    primaryLanguage: Yup.string().required("Required"),
    childCareType: Yup.string().required("Required"),
});

export default class SecondCreateFormScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            form2: this.props.currentForm
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    handleAction(values) {
        let action = values['action'];
        delete values['action'];
        this.setState({ form2: values });
        this.props.handler(this.state);
        if (action === -1) {
            this.previous()
        } else {
            this.next();
        }
    }
    next() {
        this.props.changeButton(2);
    }
    previous() {
        this.props.changeButton(0);
    }

    render() {
        return (
            <Col>
                <Row className="w-100">
                    <Col>
                        <h2 className="text-center">2 - Personal Information Continued </h2>
                        <Formik
                            initialValues={{
                                ethnicity: this.state.form2.ethnicity,
                                selfIdentity: this.state.form2.selfIdentity,
                                highestEducation: this.state.form2.highestEducation,
                                primaryLanguage: this.state.form2.primaryLanguage,
                                childCareType: this.state.form2.childCareType,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                this.handleAction(values);
                            }}
                        >
                            {({ errors, touched, setFieldValue, handleSubmit }) => (
                                <Form onSubmit={handleSubmit} className="text-left">
                                    <label className="input-checkmark mt-2" >Self Identify As*</label>
                                    {errors.selfIdentity && touched.selfIdentity ? (
                                        <div className="border border-danger p-1 mb-1">{errors.selfIdentity} !</div>
                                    ) : null}
                                    <div className="ml-3">
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Disability" />
                                                Disability
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Veteran" />
                                                Veteran
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Mental Illness" />
                                                Mental Illness
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Pregnant" />
                                                Pregnant
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Postpartum" />
                                                Postpartum
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Breast Feeding" />
                                                Breast Feeding
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Undisclosed" />
                                                Undisclosed
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Other" />
                                                Other
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Eldery (62+)" />
                                                Eldery (62+)
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="LGBTQ" />
                                                LGBTQ
                                    </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="selfIdentity" value="Female head of household" />
                                                Female head of household
                                    </label>
                                        </div>
                                    </div>
                                    <label className="mt-1">Ethnicity*</label>
                                    <Field as="select" name="ethnicity" className={"form-control ml-3 mb-3 " + (touched.ethnicity && errors.ethnicity ? 'is-invalid' : '')}>
                                        <option value="">Select Ethnicity...</option>
                                        <option value="American indian / Native American" >American Indian/ Native American</option>
                                        <option value="Asian" >Asian</option>
                                        <option value="Aslaska Native / Aleut / Eskimo" >Aslaka/ Aleut/ Eskimo</option>
                                        <option value="Middle Eastern/ North African" >Middle Eastern/ North African</option>
                                        <option value="Pacific Islander" >Pacific Islander</option>
                                        <option value="Other" >Other</option>
                                        <option value="Undisclosed" >Undisclosed</option>
                                    </Field>
                                    <label>Highest Education*</label>
                                    <Field as="select" name="highestEducation" className={"form-control ml-3 mb-3 " + (touched.highestEducation && errors.highestEducation ? 'is-invalid' : '')}>
                                        <option value="">Select Highest Education...</option>
                                        <option value="grade08">Grade 0-8</option>
                                        <option value="grade911">Grade 9-11</option>
                                        <option value="highschooldiploma">High School Diploma</option>
                                        <option value="ged">GED</option>
                                        <option value="postsecondary">Post Secondary</option>
                                        <option value="tradeschool">Trade School</option>
                                        <option value="twoyeardegree">2 year degree</option>
                                        <option value="fouryeardegree">4 year degree</option>
                                        <option value="mastersdegree">Masters degree</option>
                                        <option value="phd">Phd</option>
                                        <option value="undisclosed">Undisclosed</option>
                                    </Field>
                                    <label>Primary Language*</label>
                                    <Field as="select" name="primaryLanguage" className={"form-control ml-3 mb-3 " + (touched.primaryLanguage && errors.primaryLanguage ? 'is-invalid' : '')}>
                                        <option value="">Select Primary Language...</option>
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <label>Child Care Type*</label>
                                    <Field as="select" name="childCareType" className={"form-control ml-3 mb-3 " + (errors.childCareType && touched.childCareType ? 'is-invalid' : '')}>
                                        <option value="">Select Child Care Type...</option>
                                        <option value="My partner or I take care of my children at home">My partner or I take care of my children at home</option>
                                        <option value="take">Headstart</option>
                                        <option value="Child Care Center/ Preschool Program">Child Care Center/ Preschool Program</option>
                                        <option value="Family Child Care Home">Family Child Care Home</option>
                                        <option value="Relative/Neighbor or babysitter">Relative/Neighbor or babysitter</option>
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
                                        }}>  Next <FaArrowRight />
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
