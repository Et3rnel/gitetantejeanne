import './Card.css';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Card extends Component {
	
	getIcon(){
		var footStyle = {
			position: 'relative',
			top: '-1px',
			left: '3px',
			fontSize: '23px!important'
		}

		if(this.props.transportation == 0) {
			return <FontAwesome name='car' size='2x' />
		} else {
			return <FontAwesome name='blind' size='2x' style={footStyle}/>
		}
	}
	
	render() {

		const img = require('../img/activities/' + this.props.photo + '.' + this.props.ext);

    	return (
			<div className="Card-Container">
			<div className="Column">  
		
				<div className="post-module">
					<div className="thumbnail">
						<div className="Informations">
							<div className="Transportation-Time">{this.props.time} <span className="Time-To-Go">min</span></div>
							<div className="Transportation-Icon">
								{this.getIcon()}
							</div>
						</div><img src={img}/>
					</div>
					
					<div className="post-content">
						<h2 className="Card-Link"><a href="/">{this.props.title}</a></h2>
						<p className="Important-Text">{this.props.important}</p>
						<p className="description">{this.props.description}</p>
					</div>
				</div>
		
			</div>
		</div>
    );
  }
}

export default Card;