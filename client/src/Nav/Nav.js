import React, { Component } from 'react';
import Logo from '../img/logo.png';
import NavActivities from '../img/nav/activities.png';
import NavDelicacies from '../img/nav/delicacies.png';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Nav.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {mobileClassNav: "Hide-Mobile-Nav"} /* We can only use this.state in the constructor */
    }
    
    setMobileNav(classValue) {
        const className = classValue + "-Mobile-Nav";
        this.setState({mobileClassNav: className});
    }

    render() {
        var burgerStyle = {
            top: '9px',
            position: 'relative',
            fontSize: '30px',
            padding: '0 10px',
            cursor: 'pointer'
        }

        return (
            <nav className={this.state.mobileClassNav}>
                <Link to="/" onClick={() => this.setMobileNav("Hide")}><img src={Logo} className="Logo" alt="Logo gite tante jeanne" title="Gite de tante jeanne"/></Link>
                <Link to="/" onClick={() => this.setMobileNav("Hide")}>Le gite</Link>
                <Link to="/activities" onClick={() => this.setMobileNav("Hide")}><img src={NavActivities} className="Nav-Icon" alt="Activitées" title="Activitées"/> Liste des activités</Link>
                <Link to="/delicacies" onClick={() => this.setMobileNav("Hide")}><img src={NavDelicacies} className="Nav-Icon" alt="Gourmandises" title="Gourmandises"/> Gastronomie / Gourmandises</Link>
                <Link to="/village" onClick={() => this.setMobileNav("Hide")}>La vie au village</Link>
                <Link to="/contact" onClick={() => this.setMobileNav("Hide")}>Contact</Link>
                <Link to="/rates" onClick={() => this.setMobileNav("Hide")}>Tarifs et disponibilités</Link>
                <span className="Hide-Desktop Burger-Container">
                    <FontAwesome name='bars' style={burgerStyle} onClick={() => this.setMobileNav("Show")}/> 
                    <img src={Logo} className="Logo-Mobile" alt="Logo gite tante jeanne" title="Gite de tante jeanne"/>
                </span>
            </nav>
        );
    }
}