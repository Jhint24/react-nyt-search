import React from 'react';

const Articles = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>
);
export default Articles;
