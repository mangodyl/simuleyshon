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

const CalculateButton = styled.button`
  background: #0f1928;
  color: #ffd563;
  width: 80%;
  font-size: 2em;
  padding: 0.25em 1em;
  border: 2px solid #2196f3;
  border-radius: 3px;

  &:hover {
    background-color: #ffd563;
    color: #0f1928;
  }
`;

export {
  Grid,
  GridCell,
  FieldTitle,
  FieldInput,
  ButtonWrapper,
  CalculateButton,
};
