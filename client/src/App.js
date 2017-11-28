import React, { Component } from 'react';
import Nav from './Nav/Nav';
import MenuItem from './Nav/MenuItem';
import Carousel from './Carousel/Carousel';
import CardList from './Card/CardList';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Page from './Page/Page';
import pagesText from './config.json';
import Iframe from 'react-iframe';

// Menu images
import PeaugresOne from './img/rightmenu/peaugres1.jpg';
import PeaugresTwo from './img/rightmenu/peaugres2.jpg';
import FbPage from './img/rightmenu/fb-logo.png';
// Pages images
import ArdecheGrdAir from './img/ardeche_grd_air.jpg';

import './App.css';

function createPageMarkup(pageText) {
	return { __html: pageText };
}

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<div className="Container">
						<div className="Content">
							<div className="Body">
								<Route exact path="/" render={() => (
									<Page title="Le gite de tante jeanne">
										<Carousel />
										<p dangerouslySetInnerHTML={createPageMarkup(pagesText.pagesdata.gite)}></p>
									</Page>
								)} />
								<Route path="/activities" render={() => (
									<Page title="Liste des activitées">
										<CardList type="activities"/>
									</Page>
								)} />

								<Route path="/delicacies" render={() => (
									<Page title="Liste des restaurants et gourmandises">
										<CardList type="delicacies"/>
									</Page>
								)} />

								<Route path="/village" render={() => (
									<Page title="Le village de Peaugres">
										<p dangerouslySetInnerHTML={createPageMarkup(pagesText.pagesdata.village)}></p>
										<a href="http://www.ardechegrandair.com/" target="_blank" rel="noopener noreferrer">
											<img src={ArdecheGrdAir} style={{marginLeft: '25px'}} alt="Ardèche grand air" title="Ardèche grand air" />
										</a>
									</Page>
								)} />

								<Route path="/contact" render={() => (
									<Page title="Nous contacter">
										<p dangerouslySetInnerHTML={createPageMarkup(pagesText.pagesdata.contact)}></p>
									</Page>
								)} />

								<Route path="/rates" render={() => (
									<Page title="Les tarifs">
										<p dangerouslySetInnerHTML={createPageMarkup(pagesText.pagesdata.rates)}></p>
									</Page>
								)} />
							</div>

							<div className="Menu">
								<MenuItem title="Localisation du gite de tante jeanne">
									<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.993703826766!2d4.727792014788849!3d45.28834895318238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f51697ca6d2b15%3A0x7388e35a5d60b1b5!2sLe+gite+de+tante+jeanne!5e0!3m2!1sen!2sfr!4v1509648619045"
										width="100%"
										height="250px"
										display="initial"
										position="relative"
										allowFullScreen />
									
								</MenuItem>
								<MenuItem title="Le gite sur Facebook">
									<a className="Fb-Page" href="https://www.facebook.com/gitedetantejeanne/" target="_blank" rel="noopener noreferrer">
										<img src={FbPage} alt="Page facebook" title="Page facebook" />
									</a>
								</MenuItem>
								<MenuItem title="Photos du village">
									<img src={PeaugresOne} className="Village-Photos" alt="Église" title="Église" />
									<img src={PeaugresTwo} className="Village-Photos" alt="Village de peaugres" title="Village de peaugres" />
								</MenuItem>
							</div>

						</div>

						<div className="Footer">
							<div className="Footer-Content">
								<p>Développé par <a href="mailto:pasquiong@gmail.com">G. Pasquion</a></p>
							</div>
						</div>


					</div>
				</div>
			</Router>
		);
	}
}

export default App;