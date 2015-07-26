/** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = require('./components/FrankyApp');

var mountNode = document.getElementById("react-main-franky");

React.render(new FrankyApp({}), mountNode);