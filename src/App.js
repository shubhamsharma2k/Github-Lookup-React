import "./App.css";
import { Fragment, React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from './components/pages/About';
import User from './components/users/User';
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const[user,setUser] = useState({});
  const [alert, setAlert] = useState(null);

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const getSingleUser =async (login)=>{
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);

  }

  const setAlertt = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    setAlert={setAlertt}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props=>(
              <User {...props} getSingleUser={getSingleUser} user={user} loading={loading}/>
            )}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
