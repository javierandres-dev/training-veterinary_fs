import React, { useState } from "react";
//import React from "react";
import { withRouter, Link } from "react-router-dom";
import axiosClient from "../helpers/requests";
import Swal from "sweetalert2";
import { Main, Form, Fieldset, Legend, Label, Input, Button } from "./Styles";

const EditAppoinment = (props) => {
  const { _id, date, time, client, patient, reason } = props.appoinment[0];
  //console.log(_id, date, time, client, patient, reason);

  const [appoinment, setAppoinment] = useState({
    date,
    time,
    client,
    patient,
    reason,
  });

  const updateState = (e) => {
    setAppoinment({
      ...appoinment,
      [e.target.name]: e.target.value,
    });
  };

  const updateAppoinment = (e) => {
    e.preventDefault();
    axiosClient.put(`api/v1/appoinments/${_id}`, appoinment).then((res) => {
      console.log(res);
      props.setQuery(true);
      props.history.push("/");
    });
  };
  //
  if (!props.appoinment) {
    props.history.push("/");
    return null;
  }

  //
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
            props.history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <Main role="main">
      <Link to="/">Regresar</Link>
      <Form onSubmit={updateAppoinment}>
        <Fieldset>
          <Legend>Cita</Legend>
          <Label htmlFor="date">Fecha asignada: {date}</Label>
          <Input type="date" id="date" name="date" onChange={updateState} />
          <Label htmlFor="time">Hora asignada: {time}</Label>
          <Input type="time" id="time" name="time" onChange={updateState} />
          <Label htmlFor="client">Cliente</Label>
          <Input
            type="text"
            id="client"
            name="client"
            onChange={updateState}
            placeholder={client}
          />
          <Label htmlFor="patient">Paciente</Label>
          <Input
            type="text"
            id="patient"
            name="patient"
            onChange={updateState}
            placeholder={patient}
          />
          <Label htmlFor="reason">Motivo</Label>
          <Input
            type="text"
            id="reason"
            name="reason"
            onChange={updateState}
            placeholder={reason}
          />
        </Fieldset>
        <Button type="submit">Actualizar</Button>
      </Form>
      <Button type="button" onClick={() => deleteAppoinment(_id)}>
        Eliminar
      </Button>
    </Main>
  );
};

export default withRouter(EditAppoinment);
