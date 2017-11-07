import './Card.css';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
			<div className="container">
			<div className="column">  
		
				<div className="post-module">
					<div className="thumbnail">
						<div className="date">
							<div className="day">27 <span className="Time-To-Go">min</span></div>
							<div className="month">Mar</div>
						</div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
					</div>
					
					<div className="post-content">
						<h1 className="title">City Lights in New York</h1>
						<h2 className="sub_title">The city that never sleeps.</h2>
						<p className="description">C’est l’emploi de la traction à vapeur et l’utilisation de véhicules anciens qui distingue le Mastrou, ou Chemin de fer du Vivarais, de bien d’autres chemins de fer touristiques et font de Tournon-Lamastre une « ligne musée ». Les 6 locomotives à vapeur de type Mallet ont été conçues en 1902 et 1932. Ce sont de véritables pièces de collection. Leurs conditions d’exploitation conférent à ce chemin de fer un intérêt historique et touristique notable.</p>
					</div>
				</div>
		
			</div>
		</div>
    );
  }
}

export default Card;