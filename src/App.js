import React, { Component } from "react";
import "./App.css";
import DestinationList from "./Components/Destination/DestinationList";
import config from "./config";

const API_ROOT = `http://cms-techsur.drupal.docker.localhost:8000/jsonapi/`;
const CONTENT_TYPE = `destination`;
const LIST_URL = `http://cms-techsur.drupal.docker.localhost:8000/jsonapi/node/ruth`;

class App extends Component {
  constructor() {
    super();
    this.state = { data: null };
    this.loadDestinations = this.loadDestinations.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    this.loadDestinations();
  }

  loadDestinations() {
    // Fetch Destinations.
    fetch(LIST_URL, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch((err) => console.log("Fetching Destinations Failed", err));
  }

  updateData(responseData) {
    this.setState({ data: responseData.data });
  }

  render() {
    return (
      <div className="App">
        <DestinationList data={this.state.data} />
      </div>
    );
  }
}

export default App;
