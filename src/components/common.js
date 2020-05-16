import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  background-color: #2196f3;
  padding: 16px;
  margin: 32px;
`;

const GridCell = styled.div`
  background-color: #ffd563;
  text-align: center;
  padding: 8px 0;
  object-fit: cover;
`;

const FieldTitle = styled.p`
  color: #0f1928;
  font-family: "Roboto", sans-serif;
`;

const FieldInput = styled.input`
  padding: 8px 16px;
  font-size: 1em;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

export { Grid, GridCell, FieldTitle, FieldInput, ButtonWrapper };
