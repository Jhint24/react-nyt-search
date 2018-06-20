import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SavedArticles from './components/SavedArticles';
import Form from './components/Form';
import API from './utils/API';
class App extends Component {
  state = {
    searchTerm: '',
    searchNumber: 1,
    startYear: '',
    endYear: '',
    returnedArticles: []
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchArticles = event => {
    event.preventDefault();
    console.log('Articles to follow');
    console.log('searchTerm:', this.state.searchTerm);
    console.log('startYear:', this.state.startYear);
    console.log('searchNumber:', this.state.searchNumber);
    console.log('endYear: ', this.state.endYear);
    API.scrapeArticles(this.state)
      .then(res => {
        this.setState({ returnedArticles: res.data.response.docs });
        console.log('returnedArticles: ', this.state.returnedArticles);
      })
      .catch(err => console.log(err));
  };

  clearArticles = event => {
    event.preventDefault();
    this.setState({ returnedArticles: [] });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Form onChange={this.handleInputChange} onClick={this.searchArticles} />
        <Articles />
      </div>
    );
  }
}

export default App;

//grab input on change
//user hits submit, send data from API and console.log it
//this means breaking down query term into if this
//once i get all of my results, work on save button and routes
