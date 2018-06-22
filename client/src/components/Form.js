import React from 'react';

const Form = props => (
  <div className="container">
    <form id="nyt-search-form">
      <div className="form-group">
        <label htmlFor="search">Search term</label>
        <input
          type="text"
          className="form-control"
          id="search-term"
          onChange={props.onChange}
          name="searchTerm"
        />
      </div>
      <div className="form-group">
        <label htmlFor="number-options">Number of Records to Retrieve:</label>
        <select
          className="custom-select"
          id="number-options"
          onChange={props.onChange}
          name="searchNumber"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="start-year">Start Date (YYYYMMDD)</label>
        <input
          type="text"
          minLength="8"
          maxLength="8"
          className="form-control"
          id="start-year"
          onChange={props.onChange}
          name="startYear"
        />
      </div>
      <div className="form-group">
        <label htmlFor="end-year">End Date (YYYYMMDD)</label>
        <input
          type="text"
          minLength="8"
          maxLength="8"
          className="form-control"
          id="end-year"
          onChange={props.onChange}
          name="endYear"
        />
      </div>
      <div id="error-message" />
      <button type="submit" className="btn btn-default" id="run-search" onClick={props.onClick}>
        <i className="fa fa-search" /> Search
      </button>
      <span>{'               '}</span>
      <button type="button" className="btn btn-default" id="clear-form" onClick={props.onClick2}>
        <i className="fa fa-trash" /> Clear Form
      </button>
      <span>{'               '}</span>
      <button
        type="button"
        className="btn btn-default"
        id="clear-articles"
        onClick={props.onClick3}
      >
        <i className="fa fa-trash" /> Clear Results
      </button>
    </form>
    <div className="container">{props.returnArticles()}</div>
  </div>
);

export default Form;
