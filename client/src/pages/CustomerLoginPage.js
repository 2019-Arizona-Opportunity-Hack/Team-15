import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import LoadingBlackSpin from '../components/LoadingBlackSpin';

const HOSTNAME = "http://localhost:5000/api"

const registrationSchema = Yup.object({
    username: Yup.string().required('required'),
    password: Yup.string().required('required'),
});

export default class CustomerLoginPage extends Component {
    constructor(props) {
        super(props);
        this.onSubmitFormUser = this.onSubmitFormUser.bind(this);
    }



    onSubmitFormUser(lotsOfValue) {
        /*
        const visitationData = this.state.visitationForm;
        console.log(visitationData)
     

        if (visitationData.visitationType === "") {
            alert("Please mention Purpose of visit");
            return;
        }

        event.preventDefault();
        fetch(HOSTNAME + '/visitation/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitationData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.isError === true) {
                    alert(responseJson.errorMsg);
                } else {
                    // alert(responseJson.visitId)
                    let resObj = this.state.visitationForm;
                    console.log('/user/' + this.state.visitationForm.familyName);
                    resObj["visitId"] = responseJson.visitId;
                    //sent to next page
                    this.props.history.push({
                        pathname: '/user/' + this.state.visitationForm.familyName,
                        state: { visitationData: resObj }
                    })

                }
            });
            */
    }

    render() {
        return (
            <PageTemplate>
                <Row className="splash-screen" style={{ textAlign: "center" }}>
                    <Col>
                        <h1>Please Login!</h1>
                        <Formik
                            initialValues={{ username: '', password: ''}}
                            validationSchema={registrationSchema}
                            onSubmit={(values) => {
                                console.log("Something has been submitted" + values);
                                this.onSubmitFormUser(values);
                            }}>
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                setFieldValue,
                                errors
                            }
                            ) => (
                                    <Form noValidate onSubmit={handleSubmit} className="text-left">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="familyNameId">
                                                <Form.Label>Username*</Form.Label>
                                                <Form.Control type="text"
                                                    name="username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    isInvalid={touched.username && errors.username}
                                                />
                                                <br></br>
                                                <Form.Label>Password*</Form.Label>
                                                <Form.Control type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isInvalid={touched.password && errors.password}
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Button type="submit">Submit</Button>
                                        </Form.Row>
                                    </Form>
                                )

                            }
                        </Formik>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      
                    </Col>
                </Row>
            </PageTemplate>
        )
    }
}
