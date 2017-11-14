import './CardList.css';
import React, { Component } from 'react';
import Card from './Card';

import Api from '../config.json';

class CardList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      activities: []
    };
	}
	
	componentDidMount() {
		var apiUrl;
		const displayType = this.props.type;
		if(Api.settings.devMode === true) {
			apiUrl = Api.settings.apiUrlDev;
		} else {
			apiUrl = apiUrl = Api.settings.apiUrlProd;
		}
		const fullUrl = 'http://' + apiUrl + ':3000/activities/' + displayType;
		const fetchSettings = {
			method: 'GET',
			mode: 'cors'
		}

		fetch(fullUrl, fetchSettings).then(function(response) {
			return response.json();
		}).then(function(data) {
			this.setState({
				activities: data
			});
		}.bind(this)).catch(function(err) {
				console.log('Error happened :' + err);
		});
	}
	
	initCardComponent(){
		var myCards = [];
		var myActivities = this.state.activities;

		myActivities.forEach(function(activity){
			myCards.push(<Card transportation={activity.transportation} time={activity.time} photo={activity._id} ext={activity.imgext} title={activity.name} description={activity.description} important={activity.important}/>);
		});
		
		return myCards;
	}

  render() {
    return (
			<div className="Cards-Container">
				{this.initCardComponent()}
			</div>
    );
  }
}

export default CardList;