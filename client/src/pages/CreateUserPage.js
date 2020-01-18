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
const SwitchCard = ({ curIndex, changeButton, handler, visbilityFun }) => {

    switch (curIndex) {
        case 0:
            return (<FirstCreateFormScreen changeButton={changeButton} handler={handler} />)
        case 1:
            return (<SecondCreateFormScreen changeButton={changeButton} handler={handler} />)
        case 2:
            return (<ThirdCreateFormScreen changeButton={changeButton} handler={handler} />)
        case 3:
            return (<FourCreateFormScreen changeButton={changeButton} visbilityFun={visbilityFun} handler={handler} />);
        case 4:
            return(<SummaryScreen handler={handler} />)
        default:
            return (
                <div>
                    <FirstCreateFormScreen />
                    <SecondCreateFormScreen />
                    <ThirdCreateFormScreen />
                    <FourCreateFormScreen />
                </div>
            );
    }
}

export default class CreateUserPage extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            currentSlideIndex: 3,
            returnCurrentSlide: {},
            visbility: "hide-button"
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handler = this.handler.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.visbilityFun = this.visbilityFun.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    //stack -> keep current state
    //switch for render component


    currentSlide(number) {
        this.setState({
            currentSlideIndex: number
        })
    }

    onCancel(event){
        event.preventDefault();
        this.props.history.push({
            pathname:"/login"
        })
    }
    //on Submit
    onSubmit(event) {

        this.setState({
            submittedor: "Data Attempted to submit"
        })
        console.log(this.state);
        fetch(HOSTNAME + '/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        });
        alert("Success");
        this.props.history.push({
            pathname: "/login"
        })
        event.preventDefault();
    }

    //Handler Function
    handler(obj) {
        for (var prop in obj) {
            this.setState({[prop]: obj[prop] });
        }
        // this.setState({ obj });
        // console.log(this.state)
    }
    
    visbilityFun(event){
        event.preventDefault();
        this.setState({
            visbility: "show-button"
        });
    }


    render() {
        return (
            <PageTemplate>
                {/* <form onSubmit={this.onSubmit}> */}
                <Row>
                    <Col>
                        <div className="splash-screen">
                            <Row>
                                <Col><span className="home-icon"><FaUserPlus /></span> <h2 className="text-center">Create User Page</h2></Col>
                            </Row>
                            <Row>
                                <SwitchCard curIndex={this.state.currentSlideIndex} changeButton={this.currentSlide} handler={this.handler} visbilityFun={this.visbilityFun} />
                            </Row>
                            <Row className="w-100">
                                <p></p>
                                <div className="d-flex flex-column justify-content-center w-100">
                                    <button type="cancel" className={"btn btn-primary input-create-control mb-3 mt-3 " + this.state.visbility} onClick={this.onCancel}>Cancel</button>
                                    <button type="submit" className={"btn btn-primary input-create-control " + this.state.visbility} onClick={this.onSubmit}>Submit</button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                {/*  <FirstCreateFormScreen handler={this.handler} />*/}

                <p>{this.state.submittedor}</p>
                {/* </form> */}
            </PageTemplate>
        )
    }
}
