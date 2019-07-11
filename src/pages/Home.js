import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default class Home extends Component {
    render() {
        return (
            <div className="Home-container">
                <h1>What would you like to do?</h1>
                <p><Link to="/lowercase">I want to make my strings lowercase <ArrowForwardIcon className="icon icon--inline" /></Link></p>
                <p><Link to="/uppercase">I want to make my strings UPPERCASE <ArrowForwardIcon className="icon icon--inline" /></Link></p>
            </div>
        )
    }
}