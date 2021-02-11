import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateAppoinment from "./components/CreateAppoinment";
import EditAppoinment from "./components/EditAppoinment";
import Footer from "./components/Footer";
import axiosClient from "./helpers/requests";
import { GlobalStyle } from "./components/Styles";

function App() {
  // states app
  const [appoinments, setAppoinments] = useState([]);
  const [query, setQuery] = useState(true);

  useEffect(() => {
    if (query) {
      const queryApi = () => {
        axiosClient
          .get("/api/v1/appoinments")
          .then((res) => {
            setAppoinments(res.data);
            setQuery(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      queryApi();
    }
  }, [query]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home appoinments={appoinments} />}
        />
        <Route
          exact
          path="/c-appoinment"
          component={() => <CreateAppoinment setQuery={setQuery} />}
        />

        <Route
          exact
          path="/e-appoinment/:id"
          render={(props) => {
            const appoinment = appoinments.docs.filter(
              (appoinment) => appoinment._id === props.match.params.id
            );
            return (
              <EditAppoinment appoinment={appoinment} setQuery={setQuery} />
            );
          }}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
