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
    const str = 'Please Enter a Valid Date',
      div = document.getElementById('error-message');
    div.innerHTML = '';
    event.preventDefault();
    // console.log('Articles to follow');
    // console.log('searchTerm:', this.state.searchTerm);
    // console.log('startYear:', this.state.startYear);
    // console.log('searchNumber:', this.state.searchNumber);
    // console.log('endYear: ', this.state.endYear);
    const regEx = /^\d{4}\d{2}\d{2}$/;
    if (!this.state.startYear.match(regEx) || !this.state.endYear.match(regEx)) {
      document;

      div.innerHTML = str;
    } else {
      API.scrapeArticles(this.state)
        .then(res => {
          this.setState({ returnedArticles: res.data.response.docs });
          console.log('returnedArticles: ', this.state.returnedArticles);
        })
        .catch(err => console.log(err));
    }
  };

  clearForm = event => {
    event.preventDefault();
    this.setState({
      searchTerm: '',
      searchNumber: 1,
      startYear: '',
      endYear: ''
    });
    document.getElementById('nyt-search-form').reset();
  };

  clearArticles = event => {
    event.preventDefault();
    this.setState({
      returnedArticles: []
    });
  };

  returnArticles = () => {
    return this.state.returnedArticles.map(indArticle => (
      <Articles
        _id={indArticle._id}
        key={indArticle._id}
        date={indArticle.pub_date}
        title={indArticle.headline.main}
        url={indArticle.web_url}
      />
    ));
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Form
          onChange={this.handleInputChange}
          onClick={this.searchArticles}
          onClick2={this.clearForm}
          onClick3={this.clearArticles}
          returnArticles={this.returnArticles}
        />
      </div>
    );
  }
}

export default App;

//grab input on change
//user hits submit, send data from API and console.log it
//this means breaking down query term into if this
//once i get all of my results, work on save button and routes
