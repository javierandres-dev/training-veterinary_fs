import React, { useState } from "react";
import { Main, Form, Fieldset, Legend, Label, Input, Button } from "./Styles";

const CreateAppoinment = () => {
  const [appoinment, setAppoinment] = useState({
    date: "",
    time: "",
    client: "",
    patient: "",
    reason: "",
  });

  const updateState = (e) => {
    setAppoinment({
      ...appoinment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Main role="main">
      <Form>
        <Fieldset>
          <Legend>Nueva cita</Legend>
          <Label htmlFor="date">Fecha</Label>
          <Input type="date" id="date" name="date" onChange={updateState} />
          <Label htmlFor="time">Hora</Label>
          <Input type="time" id="time" name="time" onChange={updateState} />
          <Label htmlFor="client">Cliente</Label>
          <Input
            type="text"
            id="client"
            name="client"
            placeholder="Nombre del propietario"
            onChange={updateState}
          />
          <Label htmlFor="patient">Paciente</Label>
          <Input
            type="text"
            id="patient"
            name="patient"
            placeholder="Nombre de la mascota"
            onChange={updateState}
          />
          <Label htmlFor="reason">Motivo</Label>
          <Input
            type="text"
            id="reason"
            name="reason"
            placeholder="Servicio, Consulta, Razón de la cita"
            onChange={updateState}
          />
        </Fieldset>
        <Button type="submit">Crear nueva cita</Button>
      </Form>
    </Main>
  );
};

export default CreateAppoinment;
