/** @jsx React.DOM */

var React = require('react/addons');
var FrankyApp = require('./components/FrankyApp');

var mountNode = document.getElementById("react-main-franky");

React.render(new FrankyApp({}), mountNode);