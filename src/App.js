import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Alert from "./components/Alert";
import { Provider } from "react-redux";
import store from "./redux/store";
//import Representative from "./components/Representative";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/authAction";
import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Employees from "./components/Employees";
import Profile from "./components/Profile";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
        <Switch>
          <Admin />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
