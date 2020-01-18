import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    ethnicity: Yup.string().required("Required"),
    selfIdentity: Yup.array().of(Yup.string()),
    highestEducation: Yup.string().required("Required"),
    primaryLanguage: Yup.string().required("Required")
});

export default class SecondCreateFormScreen extends Component {


    constructor() {
        super();
        this.state = {
            form2: {
                ethnicity: '',
                selfIdentity:[],
                highestEducation: '',
                primaryLanguage: ''
            }
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    handleAction(values) {
        let action = values['action'];
        delete values['action'];
        this.setState({form2: values});
        this.props.handler(this.state);
        if(action === -1){
            this.previous()
        } else {
            this.next();
        }
    }
    next() {
        this.props.changeButton(2);
    }
    previous(){
        this.props.changeButton(0);
    }

    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h2 className="text-center">Second Step</h2>
                    <Formik
                        initialValues = {{                        
                            ethnicity: this.state.form2.ethnicity,
                            selfIdentity: this.state.form2.selfIdentity,
                            highestEducation: this.state.form2.highestEducation,
                            primaryLanguage: this.state.form2.primaryLanguage
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                            this.handleAction(values);
                        }}
                    >
                        {({errors, touched, setFieldValue, handleSubmit}) => (
                            <Form onSubmit={handleSubmit}>
                                
                                <Field as="select" name="ethnicity" className="input-checkmark mt-2 mb-2">
                                    <option value="American indian / Native American" >American Indian/Native American</option>
                                    <option value="Asian" >Asian</option>
                                    <option value="Aslaska Native / Aleut / Eskimo" >Aslaka/Aleut/ Eskimo</option>
                                    <option value="Middle Eastern/ North African" >Middle Eastern / North African</option>
                                    <option value="Pacific Islander" >Pacific Islander</option>
                                    <option value="Other" >Other</option>
                                    <option value="Undisclosed" >Undisclosed</option>
                                </Field>
                                {errors.ethnicity && touched.ethnicity ? (
                                    <div>{errors.ethnicity}</div>
                                    ) : null}

                                <span className="input-checkmark mt-2" >Self Identify As</span>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Disability" />
                                    Disability
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Veteran" />
                                    Veteran
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Mental Illness" />
                                    Mental Illness
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Pregnant" />
                                    Pregnant
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Postpartum" />
                                    Postpartum
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Breast Feeding" />
                                    Breast Feeding
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Undisclosed" />
                                    Undisclosed
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Other" />
                                    Other
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Eldery (62+)" />
                                    Eldery (62+)
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="LGBTQ" />
                                    LGBTQ
                                </label>
                                <label>
                                    <Field type="checkbox" name="selfIdentity" value="Female head of household" />
                                    Female head of household
                                </label>

                                <Field as="select" name="highestEducation" className="input-checkmark mt-2 mb-2">
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
                                {errors.highestEducation && touched.highestEducation ? (
                                    <div>{errors.highestEducation}</div>
                                    ) : null}

                                <Field as="select" name="primaryLanguage" className="input-checkmark mb-2">
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="other">Other</option>
                                </Field>
                                {errors.primaryLanguage && touched.primaryLanguage ? (
                                    <div>{errors.primaryLanguage}</div>
                                    ) : null}

                                <div className="input-create-control d-flex justify-content-center">
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
