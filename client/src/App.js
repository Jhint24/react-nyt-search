import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SavedArticles from './components/SavedArticles';
import Form from './components/Form';
import Container from './components/Container';
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
        // this.state.articles.map(
        //   article => (
        //     (_id = article._id),
        //     (key = article._id),
        //     (date = article.pub_date),
        //     (title = article.headline.main),
        //     (url = article.web_url)
        //   )
        // );

        this.setState({ returnedArticles: res.data.response.docs });
        console.log('returnedArticles: ', this.state.returnedArticles);
      })
      .catch(err => console.log(err));
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
        <Container>
          {this.state.returnedArticles.map(indArticle => (
            <Articles
              _id={this.renderArticles._id}
              key={this.renderArticles.key}
              date={this.renderArticles.date}
              title={this.renderArticles.title}
              url={this.renderArticles.url}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;

//grab input on change
//user hits submit, send data from API and console.log it
//this means breaking down query term into if this
//once i get all of my results, work on save button and routes
