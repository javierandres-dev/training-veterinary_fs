import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateAppoinment from "./components/CreateAppoinment";
import Appoinments from "./components/Appoinments";
import Footer from "./components/Footer";
import axiosClient from "./helpers/requests";
import { GlobalStyle } from "./components/Styles";

function App() {
  //console.info(process.env.REACT_APP_REST_API_URL);
  const [appoinments, setAppoinments] = useState([]);
  useEffect(() => {
    const queryApi = () => {
      axiosClient
        .get("/api/v1/appoinments")
        .then((res) => {
          console.log(res.data);
          setAppoinments(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    queryApi();
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/c-appoinment" component={CreateAppoinment} />
        <Route
          exact
          path="/appoinments"
          component={() => <Appoinments appoinments={appoinments} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
