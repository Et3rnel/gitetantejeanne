import React, { Component } from 'react';
import './Page.css';

export default function Page(props) {
	return (
        <div>
            <h1 className="Page-Title">{props.title}</h1>
            {props.children}
        </div>
    );
}