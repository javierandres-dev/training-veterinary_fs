import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fontFamily, fontWeight, fontSize, color } from "./Constants";

const Appoinments = (props) => {
  if (props.appoinments.length === 0) return null;
  const appoinments = props.appoinments.docs;

  const Container = styled.main``;
  const Card = styled.section``;
  const Title = styled.h2``;
  const Par = styled.p``;
  const Details = styled.ul``;
  const Detail = styled.li``;
  console.log(appoinments);
  return (
    <Container>
      {appoinments.map((appoinment) => (
        <Link key={appoinment._id} to="">
          <Card>
            <Title>REGISTRO</Title>
            <Par>Tipo: </Par>
            <Par>Fecha: {appoinment.date}</Par>
            <Par>Hora: </Par>
            <Details>
              <Detail>Nombre: {appoinment.name}</Detail>
              <Detail>Fecha de nacimiento: </Detail>
              <Detail>Motivo de asistencia: {appoinment.symptom}</Detail>
              <Detail>Observaciones: </Detail>
              <Detail>Nombre del propietario: {appoinment.owner}</Detail>
              <Detail>Teléfono: {appoinment.phone}</Detail>
              <Detail>Correo electrónico: </Detail>
            </Details>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default Appoinments;
