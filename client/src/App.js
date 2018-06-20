import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import SavedArticles from './components/SavedArticles';
import Form from './components/Form';

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
  render() {
    return (
      <div className="App">
        <Form onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
