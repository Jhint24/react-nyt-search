import React from 'react';

export const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search term</label>
      <input type="text" className="form-control" id="search-term" />>
    </div>

    <div className="form-group">
      <label htmlFor="number-options">Number of Records to Retrieve:</label>
      <select className="custom-select" id="number-options">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="start-year">Start Date (DD/MM/YY -ex: 01/01/89)</label>
      <input type="text" className="form-control" id="start-year" />>
    </div>

    <div className="form-group">
      <label htmlFor="end-year">End Date (DD/MM/YY -ex: 01/01/89)</label>
      <input type="text" className="form-control" id="end-year" />>
    </div>

    <button type="submit" className="btn btn-default" id="run-search">
      <i className="fa fa-search" /> Search
    </button>
    <button type="button" className="btn btn-default" id="clear-all">
      <i className="fa fa-trash" /> Clear Results
    </button>
  </form>
);
