import React from 'react';

const Articles = props => (
  <div className="container">
    <div className="ind-article">
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <a href={props.url}>Go to Article</a>

      <p>
        <button type="button" class="btn btn-secondary btn-lg saved-btn" data-id={props._id}>
          Save Article
        </button>
      </p>
    </div>
  </div>
);
export default Articles;
