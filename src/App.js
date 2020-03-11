import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadUser } from "./redux/actions/authAction";
import { Provider } from "react-redux";
import Alert from "./components/Alert";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import Landing from "./components/Landing";
import Login from "./components/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import RepDashboard from "./components/Representative/RepDashboard";
import Employees from "./components/Admin/Employees/Employees";
import Profile from "./components/Admin/Profile/Profile";
import Chemists from "./components/Admin/Chemists/Chemists";
import ChemUpdateForm from "./components/Admin/Chemists/ChemUpdateForm";
import Doctors from "./components/Admin/Doctors/Doctors";
import Products from "./components/Admin/Products/Products";
import Distributors from "./components/Admin/Distributors/Distributors";
import UpdateForm from "./components/Admin/Employees/UpdateForm";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/representative" component={RepDashboard} />
        </Switch>
        <Switch>
          <AdminDashboard>
            <Route exact path="/chemists/:id" component={ChemUpdateForm} />
            <Route exact path="/employees/:id" component={UpdateForm} />
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chemists" component={Chemists} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/distributors" component={Distributors} />
          </AdminDashboard>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
