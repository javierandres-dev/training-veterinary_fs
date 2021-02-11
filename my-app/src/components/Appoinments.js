import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Appoinments = (props) => {
  if (props.appoinments.length === 0) return null;
  const appoinments = props.appoinments.docs;

  const Container = styled.main``;
  const Card = styled.section``;
  const Title = styled.h2``;
  const Par = styled.p``;
  //const Done = styled.input``;
  //console.log(appoinments);
  return (
    <Container>
      <Link to="/c-appoinment">Nueva cita</Link>
      {appoinments.map((appoinment) => (
        <Card>
          <Title>Cita</Title>
          <Par>Fecha: {appoinment.date}</Par>
          <Par>Hora: {appoinment.time}</Par>
          <Par>Cliente: {appoinment.client}</Par>
          <Par>Paciente: {appoinment.patient}</Par>
          <Par>Motivo: {appoinment.reason}</Par>
          <Par>{appoinment.done.toString()}</Par>
          <Link key={`$appoinment._id`} to={`/e-appoinment/${appoinment._id}`}>
            Editar
          </Link>
        </Card>
      ))}
    </Container>
  );
};

export default Appoinments;
