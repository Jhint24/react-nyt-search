class SavedArticles extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <SavedArticles />
        <div className="ind-article border border-dark">
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
          <p>
            <button type="button" className="btn btn-info btn-lg link-btn" data-id={props._id}>
              <i className="fa fa-external-link" />{' '}
              <a href={props.url} target="_blank">
                Go to Article
              </a>
            </button>{' '}
            <button
              type="button"
              className="btn btn-secondary btn-lg delete-btn"
              data-id={props.index}
              // onClick={props.saveArticles}
            >
              <i className="fa fa-trash" /> Delete Saved{' '}
            </button>
          </p>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
