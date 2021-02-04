import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axiosClient from "./helpers/requests";

function App() {
  //console.info(process.env.REACT_APP_REST_API_URL);
  const [appoinment, setAppoinment] = useState([]);
  useEffect(() => {
    const queryApi = () => {
      axiosClient
        .get("/api/v1")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    queryApi();
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
