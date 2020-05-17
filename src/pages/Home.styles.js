import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 40px 0px;
  margin: 0 auto;
  max-width: 80%;
`;

const Title = styled.div`
  color: #f8b500;
  font-family: "Dosis", sans-serif;
  font-size: 3em;
  margin-bottom: 8px;
`;

const P = styled.div`
  color: #fdfdfc;
  font-family: "Roboto", sans-serif;
`;

const PlayerTypeButton = styled.button`
  background: #0f1928;
  color: #ffd563;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2196f3;
  border-radius: 3px;
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

const PointsTotalDisplay = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #f8b500;
  color: #0f1928;

  font-size: 2em;
  margin: 0.5em 0;
  padding: 0.4em 1em;
  border-radius: 8px;
  min-width: 40%;
`;

const PointsDisplayWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
`;

const ClearButton = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #2196f3;
  color: #fdfdfc;

  font-size: 1.5em;
  margin: 0.5em 0;
  padding: 0.4em 1em;
  border-radius: 8px;
`;

export {
  ContentWrapper,
  Title,
  P,
  PlayerTypeButton,
  CalculateButton,
  PointsTotalDisplay,
  PointsDisplayWrapper,
  ClearButton,
};
