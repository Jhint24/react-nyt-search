import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articles from './Articles';
// import Form from './components/Form';
import API from '../utils/API';
import Container from './Container';

class SavedArticles extends Component {
  state = {
    savedArticlesArray: []
  };
  componentDidMount = () => {
    this.getSavedArticles();
  };

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res => {
        console.log('RES:', res.data);
        this.setState({
          savedArticlesArray: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    const savedArticlesArray = this.state.savedArticlesArray;
    return (
      <Container>
        {savedArticlesArray.length > 0 &&
          savedArticlesArray.map((indArticle, index) => (
            <div className="mb-4" key={index}>
              <Articles
                _id={indArticle._id}
                key={indArticle._id}
                date={indArticle.date}
                title={indArticle.title}
                url={indArticle.url}
                summary={indArticle.summary}
                // deleteArticles={this.deleteArticles}
                index={index}
              />
            </div>
          ))}
      </Container>
    );
  }
}
export default SavedArticles;
