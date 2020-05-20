import React, { useState } from "react";
import OwnerButton from "../components/OwnerButton";
import {
  ContentWrapper,
  BufferContainer,
  TitleContainer,
  TitleWrapper,
  Title,
  H4,
  ButtonGridContainer,
  ButtonGridThreeRow,
  ButtonGridTwoRow,
} from "./Homepage.style";

const Homepage = () => {
  return (
    <ContentWrapper>
      <BufferContainer />
      <TitleContainer>
        <TitleWrapper>
          <Title>Fantasy Football Simuleyshon</Title>
          <H4>Find your team...</H4>
        </TitleWrapper>
      </TitleContainer>
      <ButtonGridContainer>
        <ButtonGridThreeRow>
          <OwnerButton name={"Dyl"} />
          <OwnerButton name={"Lewys"} />
          <OwnerButton name={"Matt"} />
        </ButtonGridThreeRow>
      </ButtonGridContainer>
    </ContentWrapper>
  );
};

export default Homepage;
