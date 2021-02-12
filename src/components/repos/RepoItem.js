import React, { Fragment } from "react";

const RepoItem = ({ repo }) => {
  return (
    <Fragment>
      <div className="card">
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </div>
    </Fragment>
  );
};

export default RepoItem;
