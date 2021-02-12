import React, { Fragment } from "react";

const RepoItem = ({ repo}) => {
  return (
    <Fragment>
      <div className="mb-3 repo">
        <h3>
          <a href={repo.html_url} className='heading-primary'>{repo.name}</a>
        </h3>
      </div>
    </Fragment>
  );
};

export default RepoItem;
