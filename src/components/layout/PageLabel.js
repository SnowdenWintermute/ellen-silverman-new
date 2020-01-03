import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageLabel extends Component {
  render() {
    let currentPage, category, paintingName;
    let capitalizedCategory, capitalizedCurrentPage;
    if (this.props.match.params) {
      currentPage = this.props.match.params.page;
      category = this.props.match.params.category;
      paintingName = this.props.match.params.painting;
    }
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
            {capitalizedCategory && (
              <Link to={`/${currentPage}/${category}`}>
                {capitalizedCategory}
              </Link>
            )}
            {paintingName && " - "}
            {paintingName && (
              <Link to={`/${currentPage}/${category}/${paintingName}`}>
                {paintingName}
              </Link>
            )}
          </p>
          <hr />
        </div>
      </div>
    );
  }
}
