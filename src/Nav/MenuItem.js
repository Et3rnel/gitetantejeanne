import React, { Component } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {
	return (
        <div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
	);
}