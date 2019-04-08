'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  name: {
    type: String,
    required: 'Le nom de l\'activité doit être spécifié'
  },
  imgext: {
    type: String,
    required: 'Extension de l\'image'
  },
  address: {
    type: String,
    required: 'Entrer l\'URL de l\'activité'
  },
  time: {
    type: Number,
    required: 'Entrer le temps en minutes'
  },
  transportation: {
    type: Number,
    required: 'à pied ou en voiture'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the activity'
  },
  important: {
    type: String,
  },
  type: {
    type: Boolean,
    required: 'Le type d\'activité doit être spécifié'
  }
});

module.exports = mongoose.model('Activities', ActivitySchema);