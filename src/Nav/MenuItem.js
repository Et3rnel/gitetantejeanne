import React, { Component } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {
	return (
        <div>
            <h2 className="Menu-Titles">{props.title}</h2>
            {props.children}
        </div>
	);
}