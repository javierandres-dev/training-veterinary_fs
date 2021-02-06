import React from "react";
import { Link } from "react-router-dom";
import { Main } from "./Styles";

const Login = () => {
  return (
    <Main role="main">
      <p>from login...</p>
      <Link to="/appoinments">Citas</Link>
    </Main>
  );
};

export default Login;
