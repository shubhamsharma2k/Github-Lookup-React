import { React, useState } from "react";
import { useContext } from "react";
import GithubContex from "../../context/githubContext/githubContext";
import AlertContext from '../../context/alertContext/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContex);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a User!", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter User"
          value={text}
          style={{ width: "40%" }}
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn-fb"
          value="Search"
          style={{ marginLeft: "30px" }}
        />
      </form>
      {githubContext.users.length > 0  && (
        <button type="button" className="btn btn-light" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
