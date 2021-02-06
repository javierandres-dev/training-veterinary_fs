import React from "react";
import { withRouter, Link } from "react-router-dom";
import axiosClient from "../helpers/requests";
import Swal from "sweetalert2";
import { Main, Form, Fieldset, Legend, Label, Input, Button } from "./Styles";

const EditAppoinment = (props) => {
  if (!props.appoinment) {
    props.history.push("/appoinments");
    return null;
  }
  const { _id, patient } = props.appoinment[0];
  console.log(_id);
  const deleteAppoinment = (id) => {
    console.log(id);
    Swal.fire({
      title: "¿Seguro quiere eliminar este registro?",
      text: "Un registro eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        //
        axiosClient
          .delete(`api/v1/appoinments/${id}`)
          .then((res) => {
            console.log(res);
            props.setQuery(true);
            props.history.push("/appoinments");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <Main role="main">
      <Link to="/appoinments">Regresar</Link>
      <p>from edit .... </p>
      <p>{patient}</p>
      <Button type="button">Actualizar</Button>
      <Button type="button" onClick={() => deleteAppoinment(_id)}>
        Eliminar
      </Button>
    </Main>
  );
};

export default withRouter(EditAppoinment);
