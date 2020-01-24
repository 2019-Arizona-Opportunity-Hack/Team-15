import React, { Component } from 'react'
import FirstCreateFormScreen from '../components/FirstCreateFormScreen'
import SecondCreateFormScreen from '../components/SecondCreateFormScreen'
import ThirdCreateFormScreen from '../components/ThirdCreateFormScreen'
import FourCreateFormScreen from '../components/FourCreateFormScreen'
import PageTemplate from './PageTemplate';
import { Row, Col } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import SummaryScreen from '../components/SummaryScreen';

const HOSTNAME = "http://localhost:5000/api";


//switch for current slide
/*
const SwitchCard = ({ curIndex, changeButton, handler, onSubmit, addToParent }) => {

    switch (curIndex) {
        case 0:
            return (<FirstCreateFormScreen changeButton={changeButton} handler={handler} />)
        case 1:
            return (<SecondCreateFormScreen changeButton={changeButton} handler={handler} />)
        case 2:
            return (<ThirdCreateFormScreen changeButton={changeButton} handler={handler} />)
        case 3:
            return (<FourCreateFormScreen changeButton={changeButton}  handler={handler} addToParent={addToParent} />);
        case 4:
            return (<SummaryScreen handler={handler} parrentSubmit={onSubmit} />)
        default:
            return (
                <div>
                    <p>Loading</p>
                </div>
            );
    }
}
*/

export default class CreateUserPage extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            form1: {},
            form2: {},
            form3: {},
            form4:{},
            currentSlideIndex: 0,
            returnCurrentSlide: {},
            visbility: "hide-button"
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handler = this.handler.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.addToParent = this.addToParent.bind(this);
        this.SwitchCard = this.SwitchCard.bind(this);
    }
    SwitchCard = (curIndex) => {

        switch (curIndex) {
            case 0:
                return (<FirstCreateFormScreen changeButton={this.currentSlide} currentForm={this.state.form1} handler={this.handler} />)
            case 1:
                return (<SecondCreateFormScreen changeButton={this.currentSlide} currentForm={this.state.form2} handler={this.handler} />)
            case 2:
                return (<ThirdCreateFormScreen changeButton={this.currentSlide} currentForm={this.state.form3} handler={this.handler} />)
            case 3:
                return (<FourCreateFormScreen changeButton={this.currentSlide} currentForm={this.state.form4}  handler={this.handler} addToParent={this.addToParent} />);
            case 4:
                return (<SummaryScreen changeButton={this.currentSlide} reviewForm={this.state.formData} handler={this.handler} parentSubmit={this.onSubmit} />)
            default:
                return (
                    <div>
                        <p>Loading</p>
                    </div>
                );
        }
    }
    //sets the current slide for the create page
    currentSlide(number) {
        this.setState({
            currentSlideIndex: number
        })
    }

    onCancel(event) {
        event.preventDefault();
        this.props.history.push({
            pathname: "/login"
        })
    }

    //on Submit
    onSubmit(event) {
        let submitFormData = {
            formData: this.state.formData
        }
        console.log(this.state);
        fetch(HOSTNAME + '/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submitFormData)
        }).then(res => res.json())
        .then((respJson) => {
            console.log(respJson);
            this.props.history.push({
                pathname: "/login"
            })
        },
        (error) => {
            alert("error");
        });

        
        event.preventDefault();
    }

    //Handler Function for objects to be saved
    handler(obj) {
        for (var prop in obj) {
            this.setState({ [prop]: obj[prop] });
        }
    }
    //add all objects together as one object for the post request
    addToParent(){
        let parentForm = Object.assign(this.state.form1,this.state.form2,this.state.form3,this.state.form4);
        this.setState({
            formData: parentForm
        });
    }

    render() {
        
        return (
            <PageTemplate>
                {/* <form onSubmit={this.onSubmit}> */}
                <Row>
                    <Col className="splash-screen">
                        <Row>
                            <Col><h2 className="text-center"><FaUserPlus />  Registration</h2></Col>
                        </Row>
                        <Row style={{textAlign: "center"}}>
                            {this.SwitchCard(this.state.currentSlideIndex)}
                        </Row>
                        <Row className="w-100">
                            <p></p>
                            <div className="d-flex flex-column justify-content-center w-100">
                                <button type="cancel" className={"btn btn-primary input-create-control mb-3 mt-3 " + this.state.visbility} onClick={this.onCancel}>Cancel</button>
                                <button type="submit" className={"btn btn-primary input-create-control " + this.state.visbility} onClick={this.onSubmit}>Submit</button>
                            </div>
                        </Row>
                    </Col>
                </Row>
                {/*  <FirstCreateFormScreen handler={this.handler} />*/}

                <p>{this.state.submittedor}</p>
                {/* </form> */}
            </PageTemplate>
        )
    }
}
