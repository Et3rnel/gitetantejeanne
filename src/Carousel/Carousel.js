import './Carousel.css';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
// Importing imgs
import livingroom from '../img/slides/livingroom.jpg';
import livingroom2 from '../img/slides/livingroom2.jpg';
import livingroom3 from '../img/slides/livingroom3.jpg';
import outside from '../img/slides/outside.jpg';
import outside2 from '../img/slides/outside2.jpg';
import pingpong from '../img/slides/pingpong.jpg';
import room from '../img/slides/room.jpg';
import room2 from '../img/slides/room2.jpg';
import room3 from '../img/slides/room3.jpg';
import room4 from '../img/slides/room4.jpg';
import room5 from '../img/slides/room5.jpg';
import roombunkbed from '../img/slides/room-bunkbed.jpg';
import spa from '../img/slides/spa.jpg';
import twinbed from '../img/slides/twinbed.jpg';

class Carousel extends Component {
  render() {

	var images = [];
	var imgbuffer = {};
	var imgs = [livingroom, livingroom2, livingroom3, outside, outside2, 
		pingpong, room, room2, room3, room4, room5, roombunkbed, spa, twinbed];
	
	imgs.forEach(function(img){
		imgbuffer = {
			original: img,
			thumbnail: img
		}
		images.push(imgbuffer);
	});
	
    return (
		<ImageGallery
        	items={images}
        	slideInterval={2000}
        	onImageLoad={this.handleImageLoad} />
    );
  }
}

export default Carousel;