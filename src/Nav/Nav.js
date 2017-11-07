import React, { Component } from 'react';
import Logo from '../img/logo.png';
import NavActivities from '../img/nav/activities.png';
import NavDelicacies from '../img/nav/delicacies.png';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
	return (
        <nav>
            <Link to="/"><img src={Logo} className="Logo" alt="Logo gite tante jeanne" title="Gite de tante jeanne"/></Link>
            <Link to="/">Le gite</Link>
            <Link to="/activities"><img src={NavActivities} className="Nav-Icon" alt="Activitées" title="Activitées"/> Liste des activités</Link>
            <Link to="/delicacies"><img src={NavDelicacies} className="Nav-Icon" alt="Gourmandises" title="Gourmandises"/> Gastronomie / Gourmandises</Link>
            <Link to="/village">La vie au village</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/rates">Tarifs et disponibilités</Link>
        </nav>
	);
}