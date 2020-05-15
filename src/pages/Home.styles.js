import styled from "styled-components";

const Background = styled.div`
  background-color: #0f1928;
  height: 100vh;
  max-width: 100%;
`;

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

export { Background, ContentWrapper, Title, P, PlayerTypeButton };
