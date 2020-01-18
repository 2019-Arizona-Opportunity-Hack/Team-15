import React, { Component } from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';

export default class FifthCreateFormScreen extends Component {

    
    constructor(){
        super();
        this.showForm = false;
        this.state ={
            form5: [],
            showForm: false
        
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.handler(this.state);
    }

    addHouseHold() {
        let houseHolInfoObj = {
            familyName: '',
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            relationship:  '',
            childSpecial:  '',
            ethnicity:  '',
            selfStatus:  '',
            primaryLanguage: '', 
            nameOfSchool:  '',
            dentalInsurance:  '',
            primaryDoctor:  '',
            medicalInsurance:  '',
    }
        this.state.form5.push(houseHolInfoObj);
        if(this.showForm === false)
            this.setState({showForm : true});
    }

    handleChange(propertyName, event) {
        console.log("event::",event);
        const contact = this.state.form5[0];
        contact[propertyName] = event.target.value;
        this.setState({ form5: [contact] });
    }

    render() {
        return (
            <Row>
                <Col>
                <Button style={{textAlign: "center"}} onClick={this.addHouseHold.bind(this)}>Add</Button>
                <div>
                    {this.state.showForm ? (
                        
                        <Form className="d-flex flex-column justify-content-center">
                        <Form.Control type="text" name="familyName" value={this.state.form5[0].familyName} onChange={this.handleChange.bind(this, 'familyName')} className="input-create-control mb-3" placeholder="Family Name"  />
                        <Form.Control type="text" name="firstname" value={this.state.form5[0].firstName} onChange={this.handleChange.bind(this, 'firstName')} className="input-create-control mb-3" placeholder="First Name"  />
                        <Form.Control type="text" name="lastname" value={this.state.form5[0].lastName} onChange={this.handleChange.bind(this, 'lastName')} className="input-create-control mb-3" placeholder="Last Name"  />
                        <Form.Control type="date" name="dateofbirth" value={this.state.form5[0].dob} onChange={this.handleChange.bind(this, 'dob')} className="input-create-control mb-3" placeholder="date of birth"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].childSpecial} onChange={this.handleChange.bind(this, 'childSpecial')} className="input-create-control mb-3" placeholder="child special"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].ethnicity} onChange={this.handleChange.bind(this, 'ethnicity')} className="input-create-control mb-3" placeholder="ethnicity"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].selfStatus} onChange={this.handleChange.bind(this, 'selfStatus')} className="input-create-control mb-3" placeholder="self status"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].primaryLanguage} onChange={this.handleChange.bind(this, 'primaryLanguage')} className="input-create-control mb-3" placeholder="primary language"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].nameOfSchool} onChange={this.handleChange.bind(this, 'nameOfSchool')} className="input-create-control mb-3" placeholder="name of school"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].dentalInsurance} onChange={this.handleChange.bind(this, 'dentalInsurance')} className="input-create-control mb-3" placeholder="dental insurance"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].primaryDoctor} onChange={this.handleChange.bind(this, 'primaryDoctor')} className="input-create-control mb-3" placeholder="primary doctor"  />
                        <Form.Control type="text" name="dateofbirth" value={this.state.form5[0].medicalInsurance} onChange={this.handleChange.bind(this, 'medicalInsurance')} className="input-create-control mb-3" placeholder="med Insurance"  />
                        </Form>


                    ) : (
                        <p>null</p>
                    )}
                    </div>
                </Col>

            </Row>
        )
    }
}
