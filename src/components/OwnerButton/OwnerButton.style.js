import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "green":
      return "#baffc9";
    case "blue":
      return "#bae1ff";
    case "red":
      return "#ffb3ba";
    case "orange":
      return "#ffdfba";
    case "yellow":
      return "#ffffba";
    default:
      return "#011627";
  }
};

const OwnerButtonStyled = styled.button`
  background-color: #baffc9;
  color: #0f1928;
  width: 160px;
  box-shadow: 2px 2px 5px -3px #60737d;

  font-size: 1.5em;
  padding: 16px 24px;
  border-radius: 3px;
  margin: 24px 36px;

  background-color: ${({ color }) => handleColorType(color)};
`;

export { OwnerButtonStyled };
