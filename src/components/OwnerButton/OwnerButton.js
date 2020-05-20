import React from "react";
import { OwnerButtonStyled } from "./OwnerButton.style";

const OwnerButton = (props) => {
  return (
    <OwnerButtonStyled color={props.color}>{props.name}</OwnerButtonStyled>
  );
};

export default OwnerButton;
