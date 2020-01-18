import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Row, Col, Button, Form } from 'react-bootstrap';
const HOSTNAME = "http://localhost:5000/api"

export default class CustomerLoginPage extends Component {
    constructor() {
        super();
        this.state = {
            familyName: "",
            visitedDate: "09/20/2019",
            vistsLeft: "2",
            visitationForm: {
                familyName: '',
                firstName: '',
                lastName: '',
                visitationType: '',
                dov: ''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(propertyName, event) {
        const contact = this.state.visitationForm;
        contact[propertyName] = event.target.value;
        this.setState({ visitationForm: contact });
    }

    onSubmit(event) {
        const visitationData = this.state.visitationForm;
        console.log(visitationData)

        if(visitationData.visitationType === ""){
            alert("Please mention Purpose of visit");
            return;
        }
            
        event.preventDefault();
        fetch(HOSTNAME +  '/visitation/create',{
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
            if(responseJson.isError === true){
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
    }
    onClick(event, stringuser) {
        console.log("Current Event" + event);
        console.log("Current User" + stringuser);
    }
    render() {
        return (
            <PageTemplate>
                <Row className="align-items-center justify-content-center" style={{marginTop:"25%", textAlign:"center"}}>
                    <Col className="w-100">
                        <form onSubmit={this.onSubmit} id="familyName-form" className="w-100">
                            <Form.Control id="id-familyName" type="text" name="id-familyName" placeholder="family name" className="mb-2" 
                            value={this.state.visitationForm.familyName} onChange={this.handleChange.bind(this, 'familyName')} required/>

                            <Form.Control id="id-firstName" type="text" name="id-firstName" placeholder="first name" className="mb-2" 
                            value={this.state.visitationForm.firstName} onChange={this.handleChange.bind(this, 'firstName')} required/>

                            <Form.Control id="id-lastName" type="text" name="id-lastName" placeholder="last name" className="mb-2" 
                            value={this.state.visitationForm.lastName} onChange={this.handleChange.bind(this, 'lastName')} required/>

                            <Form.Group controlId="form.visitationSelect" required>
                                <Form.Control as="select" value={this.state.visitationForm.visitationType} onChange={this.handleChange.bind(this, 'visitationType')}>
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
                                </Form.Control>
                            </Form.Group>

                            <Form.Control id="id-dov" type="date" name="id-dov" placeholder="Visit Date" className="mb-2" 
                            value={this.state.visitationForm.dov} onChange={this.handleChange.bind(this, 'dov')} required/>
                            
                            <Button type="submit" className="mb-3" style={{marginTop:"5%"}}>Submit</Button>
                            {/* <Link to={{ pathname: "/user/" + this.state.familyName, state: { visitedDate: this.state.visitedDate, vistsLeft: this.state.vistsLeft } }}>Submit</Link> */}
                        </form>
                    </Col>
                </Row>
            </PageTemplate>
        )
    }
}
