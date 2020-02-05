import React, { Component } from 'react'
import FirstCreateFormScreen from '../components/FirstCreateFormScreen'
import SecondCreateFormScreen from '../components/SecondCreateFormScreen'
import ThirdCreateFormScreen from '../components/ThirdCreateFormScreen'
import FourCreateFormScreen from '../components/FourCreateFormScreen'
import PageTemplate from './PageTemplate';
import { Row, Col } from 'react-bootstrap';
import { FaUserPlus, FaCheck } from 'react-icons/fa';
import SummaryScreen from '../components/SummaryScreen';

const HOSTNAME = "http://localhost:5000/api";




export default class CreateUserPage extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            form1: {},
            form2: {},
            form3: {},
            form4: {},
            currentSlideIndex: 0,
            returnCurrentSlide: {},
            sendingData: false,
            sendingDataText: 'Sending Data...',
            succesful: false,
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
                return (<FourCreateFormScreen changeButton={this.currentSlide} currentForm={this.state.form4} handler={this.handler} addToParent={this.addToParent} />);
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
        console.log("Current slide activated");
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
    //show sending data at first
    //show either error state
    //show either succcesful state
    onSubmit(event) {
        event.preventDefault();

        this.setState({
            sendingData: true
        });

        let submitFormData = {
            formData: this.state.formData
        }
        let messageResponse = this.state.sendingDataText;

        console.log('Entered the submit data party');
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
                    messageResponse = 'Error while contacting server';
                    console.log("error reached");
                })
            .then(
                this.setState({
                    sendingDataText: messageResponse
                })
            )

        console.log('show succesful')
        this.setState({
            successful: true,
            sendingDataText: 'successful..'
        });
        this.props.history.push({
            pathname:"/user/jthomas"
        });
    }

    //Handler Function for objects to be saved
    handler(obj) {
        for (var prop in obj) {
            this.setState({ [prop]: obj[prop] });
        }
    }
    //add all objects together as one object for the post request
    addToParent() {
        let parentForm = Object.assign(this.state.form1, this.state.form2, this.state.form3, this.state.form4);
        this.setState({
            formData: parentForm
        });
    }

    render() {

        return (
            <PageTemplate>
                <div id="black-screen" className={this.state.sendingData ? 'black-screen-activated' : 'black-screen-deactivated'}>
                    <div className="central-message">
                        {this.state.successful ? (
                            <span className="check-size">
                                <FaCheck />
                            </span>
                        )
                            : (
                                <div className="sk-fading-circle">
                                    <div className="sk-circle1 sk-circle"></div>
                                    <div className="sk-circle2 sk-circle"></div>
                                    <div className="sk-circle3 sk-circle"></div>
                                    <div className="sk-circle4 sk-circle"></div>
                                    <div className="sk-circle5 sk-circle"></div>
                                    <div className="sk-circle6 sk-circle"></div>
                                    <div className="sk-circle7 sk-circle"></div>
                                    <div className="sk-circle8 sk-circle"></div>
                                    <div className="sk-circle9 sk-circle"></div>
                                    <div className="sk-circle10 sk-circle"></div>
                                    <div className="sk-circle11 sk-circle"></div>
                                    <div className="sk-circle12 sk-circle"></div>
                                </div>
                            )
                        }
                        <p>{this.state.sendingDataText}</p>
                    </div>
                </div>
                <Row>
                    <Col className={"splash-screen " + (this.state.sendingData ? 'hidden-scroll-main ' : 'active-scroll')} >
                        <Row>
                            <Col><h2 className="text-center"><FaUserPlus />  Registration</h2></Col>
                        </Row>
                        <Row style={{ textAlign: "center" }}>
                            {this.SwitchCard(this.state.currentSlideIndex)}
                        </Row>
                    </Col>
                </Row>
                <p>{this.state.submittedor}</p>
            </PageTemplate>
        )
    }
}
