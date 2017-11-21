<<<<<<< HEAD
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reducer from './reducers/index.reducers';
import seedState from './seedState';
import Trip from './components/Trip.component';
import App from './components/App.component';
import Dashboard from './components/Dashboard.component';
import Weather from './containers/Weather.container';



let store = createStore(
  reducer,
  seedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store;


render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/trip">Trip</Link></li>
          <li><Link to="/weather">Weather</Link></li>
        </ul>

        <hr />

        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip" component={Trip} />
        <Route path="/weather" component={Weather} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
=======
import React from 'react';
import ReactDOM from 'react-dom';

const handleClick = () => {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("content").style.marginLeft = "0%";
  document.getElementById("openButton").innerHTML = "&equiv;";
};

const handleOpen = () => {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("content").style.marginLeft = "25%";
  document.getElementById("openButton").innerHTML = "";
};


const App = () => (
  <div>
    <div id="sidebar">
      <button id="closeButton" onClick={handleClick}>&equiv;</button>
      <h1> Packuno </h1>
      <br />
      <h2> Upcoming Trips </h2>
    </div>
    <div id="content">
      <button id="openButton" onClick={handleOpen} />
      <h1> Create New Trip </h1>
      <br />
      1. <input type="text" className="destination" placeholder="Enter destination" />
      <br /><br />
      2. <input type="date" className="departureDate" value="2017-11-29" />
      <text> to </text>
      <input type="date" className="returnDate" value="2018-01-01" />
      <br /><br />
      <button type="submit" className="submitButton"> Submit </button>
      <br /><br /><br /><br />
      3. Copy Packing List from Past Trips
    </div>
  </div>

);

ReactDOM.render(<App />, document.getElementById('app'));

>>>>>>> completed static mockup of dashboard
