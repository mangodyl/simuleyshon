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
  //   ButtonGridTwoRow,
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
          <OwnerButton name="Dyl" color="green" />
          <OwnerButton name="Lewys" color="red" />
          <OwnerButton name="Matt" color="blue" />
        </ButtonGridThreeRow>
        <ButtonGridThreeRow>
          <OwnerButton name="Brandon" color="orange" />
          <OwnerButton name="Luc" color="yellow" />
        </ButtonGridThreeRow>
        <ButtonGridThreeRow>
          <OwnerButton name="James" color="blue" />
          <OwnerButton name="Jon" color="green" />
          <OwnerButton name="Tom" color="orange" />
        </ButtonGridThreeRow>
        <ButtonGridThreeRow>
          <OwnerButton name="Adam" color="yellow" />
          <OwnerButton name="Harry" color="red" />
        </ButtonGridThreeRow>
      </ButtonGridContainer>
    </ContentWrapper>
  );
};

export default Homepage;
