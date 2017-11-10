import './CardList.css';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      activities: []
    };
	}
	
	componentDidMount() {
		fetch('http://localhost:3000/activities', {
			method: 'GET',
			mode: 'cors'
		}).then(function(response) {
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
		var myCards = new Array();
		var myActivities = this.state.activities;

		myActivities.forEach(function(activity, activityIndex){
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