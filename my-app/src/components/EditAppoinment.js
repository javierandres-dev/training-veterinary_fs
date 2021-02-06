import React from "react";
import { withRouter, Link } from "react-router-dom";
import axiosClient from "../helpers/requests";
import { Main, Form, Fieldset, Legend, Label, Input, Button } from "./Styles";

const EditAppoinment = (props) => {
  if (!props.appoinment) {
    props.history.push("/appoinments");
    return null;
  }
  const { patient } = props.appoinment[0];
  return (
    <Main role="main">
      <Link to="/appoinments">Regresar</Link>
      <p>from edit .... </p>
      <p>{patient}</p>
      <Button type="button">Actualizar</Button>
      <Button type="button">Eliminar</Button>
    </Main>
  );
};

export default withRouter(EditAppoinment);
