import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import LoadingBlackSpin from '../components/LoadingBlackSpin';

const HOSTNAME = "http://localhost:5000/api"

const registrationSchema = Yup.object({
    familyName: Yup.string().required('required'),
    firstName: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    voDate: Yup.string().required('please select a valid date'),
    visitationType: Yup.string().required('Please select one visitation type')
});

export default class CustomerLoginPage extends Component {
    constructor() {
        super();
        this.state = {
            submitLoading: false
        }
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
        this.setState({
            submitLoading: true
        });
    }

    render() {
        return (
            <PageTemplate>
                <Row className="splash-screen" style={{ textAlign: "center" }}>
                    <Col>
                        <h1>Please Login!</h1>
                        <Formik
                            initialValues={{ familyName: '', firstName: '', lastName: '', visitationType: '', voDate: '' }}
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
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="familyNameId">
                                                <Form.Label>Family Name</Form.Label>
                                                <Form.Control type="text"
                                                    name="familyName"
                                                    value={values.familyName}
                                                    onChange={handleChange}
                                                    isInvalid={touched.familyName && errors.familyName}
                                                />
                                                {touched.familyName && errors.familyName ? (
                                                    <p>{errors.familyName}</p>
                                                ) : null}
                                                <br></br>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text"
                                                    name="firstName"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    isInvalid={touched.firstName && errors.firstName}
                                                />
                                                {touched.firstName && errors.firstName ? (
                                                    <p>{errors.firstName}</p>
                                                ) : null}

                                                <br></br>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text"
                                                    name="lastName"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    isInvalid={touched.lastName && errors.lastName}
                                                />
                                                {touched.lastName && errors.lastName ?
                                                    (<p>{errors.lastName}</p>) : null}
                                                <br></br>
                                                <Form.Label>Purpose of Vist</Form.Label>
                                                <br></br>
                                                <Field as="select" name="visitationType" className={"form-control " + (touched.visitationType && errors.visitationType ? 'is-invalid' : '')}
                                                >
                                                    <option value="">Purpose of Visit</option>
                                                    <option value="AHCCCS">AHCCCS</option>
                                                    <option value="WIC">WIC</option>
                                                    <option value="Food Bank">Food Bank</option>
                                                    <option value="FTF">FTF (Classes)</option>
                                                    <option value="Diapers">Diapers</option>
                                                    <option value="Medical">Medical</option>
                                                    <option value="Dental">Dental</option>
                                                    <option value="Immunizations">Immunizations</option>
                                                    <option value="Vision and Hearing">Vision and Hearing</option>
                                                </Field>
                                                {(touched.visitationType && errors.visitationType) ? (
                                                    <p>{errors.visitationType}</p>
                                                ) : null}
                                                <br></br>
                                                <Form.Label>Visit Date</Form.Label>
                                                <Field type="date"
                                                    name='voDate'
                                                    className={"form-control " + (touched.voDate && errors.voDate ? 'is-invalid' : '')}
                                                ></Field>
                                                <br></br>
                                                {(touched.voDate && errors.voDate) ?
                                                    (<p>{errors.voDate}</p>) : null
                                                }
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
