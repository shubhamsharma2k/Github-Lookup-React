import { Fragment, React, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
const User = ({ getSingleUser, user, loading, match, repos, getRepos }) => {
  useEffect(() => {
    getSingleUser(match.params.login);
    getRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      <div className="grid-2" style={{ marginTop: "2rem" }}>
        <div
          className="snip1344"
          style={({ width: "80%" }, { borderRadius: "10px" })}
        >
          <div>
            <img
              src={avatar_url}
              className="background "
              alt=""
              style={{ width: "150px" }}
            />
            <img src={avatar_url} className="profile" alt="" />
            <div className="mb-2">
              <h1>{name}</h1>
              <p className="my-1">Location: {location}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3px" }}>
          {bio && (
            <Fragment>
              <h3 className="heading-primary">BIO: </h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Profile
          </a>
          <ul>
            <li className="heading-primary">
              {login && <Fragment>Username: {login}</Fragment>}
            </li>
            <li className="heading-primary">
              {company && <Fragment>Company: {company}</Fragment>}
            </li>
            <li className="heading-primary">
              {blog && <Fragment>Website: {blog}</Fragment>}
            </li>
            <li className="heading-primary">
              Hireable:
              {hireable ? (
                <i className="fas fa-check text-success" />
              ) : (
                <i className="fas fa-times-circle text-danger" />
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-1">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-light">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
