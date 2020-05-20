import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 40px 0px;
  margin: 0 auto;
  max-width: 90%;
`;

const BufferContainer = styled.div`
  width: 100%;
  padding: 24px;

  @media only screen and (min-width: 980px) {
    padding: 56px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  float: left;

  @media only screen and (min-width: 980px) {
    width: 35%;
  }
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  /* text-align: center; */
  padding: 0 24px;

  @media only screen and (min-width: 980px) {
    margin: 64px auto;
  }
`;

const Title = styled.h1`
  color: #011627;
  font-family: "Raleway", sans-serif;
  font-size: 2em;
  text-decoration: underline;
  margin-bottom: 24px;

  @media only screen and (min-width: 980px) {
    font-size: 3em;
    margin-bottom: 56px;
  }
`;

const H4 = styled.h4`
  color: #011627;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;

const ButtonGridContainer = styled.div`
  width: 100%;
  float: left;

  @media only screen and (min-width: 980px) {
    width: 65%;
  }
`;

const ButtonGridThreeRow = styled.div`
  width: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* margin-bottom: 56px; */
  flex-wrap: wrap;
`;

// const ButtonGridTwoRow = styled.div`
//   width: 100;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   /* margin-bottom: 56px; */
//   flex-wrap: wrap;
// `;

export {
  ContentWrapper,
  BufferContainer,
  TitleContainer,
  TitleWrapper,
  Title,
  H4,
  ButtonGridContainer,
  ButtonGridThreeRow,
  //   ButtonGridTwoRow,
};
