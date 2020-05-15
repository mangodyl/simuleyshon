import React, { useState } from "react";
import WideReciever from "../components/WideReciever";
import {
  Background,
  ContentWrapper,
  Title,
  P,
  PlayerTypeButton,
} from "./Home.styles";

const Home = () => {
  const [playerType, setPlayerState] = useState("");

  return (
    <Background>
      <ContentWrapper>
        <div>
          <Title>Fantasy Football Simuleyshon</Title>
          <P>You must be desperate, huh?</P>
        </div>
        <div>
          <PlayerTypeButton onClick={() => setPlayerState("QB")}>
            Quarterback
          </PlayerTypeButton>
          <PlayerTypeButton onClick={() => setPlayerState("RB")}>
            Running Back
          </PlayerTypeButton>
          <PlayerTypeButton onClick={() => setPlayerState("WR")}>
            Wide Reviever
          </PlayerTypeButton>
          <PlayerTypeButton onClick={() => setPlayerState("TE")}>
            Tight End
          </PlayerTypeButton>
          <PlayerTypeButton onClick={() => setPlayerState("K")}>
            Kicker
          </PlayerTypeButton>
          {playerType === "WR" && <WideReciever />}
        </div>
      </ContentWrapper>
    </Background>
  );
};

export default Home;
