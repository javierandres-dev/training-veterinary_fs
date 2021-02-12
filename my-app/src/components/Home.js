import React from "react";
import { Link } from "react-router-dom";
import { Main, Card, Subtitle, Par, Button } from "./Styles";

const Home = (props) => {
  if (props.appoinments.length === 0) return null;
  const appoinments = props.appoinments.docs;

  return (
    <Main role="main">
      <Button>
        <Link to="/c-appoinment">Nueva cita</Link>
      </Button>
      {appoinments.map((appoinment) => (
        <Card key={appoinment._id}>
          <Subtitle>Cita</Subtitle>
          <Par>Fecha: {appoinment.date}</Par>
          <Par>Hora: {appoinment.time}</Par>
          <Par>Cliente: {appoinment.client}</Par>
          <Par>Paciente: {appoinment.patient}</Par>
          <Par>Motivo: {appoinment.reason}</Par>
          <Button>
            <Link to={`/e-appoinment/${appoinment._id}`}>Editar</Link>
          </Button>
        </Card>
      ))}
    </Main>
  );
};

export default Home;
//<Par>{appoinment.done.toString()}</Par>
