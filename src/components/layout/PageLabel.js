import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.match.params.page,
      category: this.props.match.params.category
    };
  }

  render() {
    let { currentPage, category } = this.state;
    let capitalizedCategory, capitalizedCurrentPage;
    if (currentPage) {
      capitalizedCurrentPage =
        currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    }
    if (category) {
      capitalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);
    }
    return (
      <div>
        <div className="pageLabel" id="pageLabel">
          <p>
            <Link to={`/`}>Lucretia E. McGuff-Silverman</Link>
            {currentPage ? " - " : ""}
            <Link to={`/${currentPage}`}>{capitalizedCurrentPage}</Link>
            {capitalizedCategory ? " - " : ""}
            {capitalizedCategory}
          </p>
          <hr />
        </div>
      </div>
    );
  }
}
