import './CardList.css';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
			<div className="Cards-Container">
				<Card />
				<Card />
				<Card />
			</div>
    );
  }
}

export default CardList;