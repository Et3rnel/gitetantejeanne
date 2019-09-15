import './Carousel.css';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Carousel extends Component {

  render() {
	const photos = [];
	const r = require.context('../img/slides', false, /\.(png|jpe?g|svg)$/);
	
	r.keys().map((item) => { 
		const photoPath = r(item);

		photos.push({
			original: photoPath,
			thumbnail: photoPath
		});
	});

    return (
		<ImageGallery
        	items={photos}
        	slideInterval={2000}
        	onImageLoad={this.handleImageLoad} />
    );
  }
}

export default Carousel;