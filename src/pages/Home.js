import React, { useState } from "react";
import {
  Background,
  ContentWrapper,
  Title,
  P,
  PlayerTypeButton,
} from "./Home.styles";
import { ButtonWrapper, CalculateButton } from "../components/common";
import WideReciever from "../components/WideReciever";
import TightEnd from "../components/TightEnd";
import RunningBack from "../components/RunningBack";
import QuarterBack from "../components/QuarterBack";

const Home = () => {
  const [playerType, setPlayerState] = useState("");
  const [recYds, setRecYds] = useState(0);
  const [recTDs, setRecTDs] = useState(0);
  const [catches, setCatches] = useState(0);
  const [rushYds, setRushYds] = useState(0);
  const [rushTDs, setRushTDs] = useState(0);
  const [passYds, setPassYds] = useState(0);
  const [passTDs, setPassTDs] = useState(0);
  const [fumbles, setFumbles] = useState(0);
  const [fieldGoals, setFieldGoals] = useState(0);
  const [pats, setPats] = useState(0);
  const [fgMisses, setFgMisses] = useState(0);

  const reducer = (val, action) => {
    switch (action.type) {
      case "recYds":
        return setRecYds(val);
      case "recTDs":
        return setRecTDs(val);
      case "catches":
        return setCatches(val);
      case "rushYds":
        return setRushYds(val);
      case "rushTDs":
        return setRushTDs(val);
      case "passYds":
        return setPassYds(val);
      case "passTDs":
        return setPassTDs(val);
      case "fumbles":
        return setFumbles(val);
      case "fieldGoals":
        return setFieldGoals(val);
      case "pats":
        return setPats(val);
      case "fgMisses":
        return setFgMisses(val);
      default:
        return;
    }
  };

  const onChange = (e, action) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      reducer(e.target.value, action);
    }
    return;
  };

  const emptyFieldHandler = (e, action) => {
    if (e.target.value === "") {
      reducer(0, action);
    }
    return;
  };

  const bulkProps = {
    onChange,
    emptyFieldHandler,
    recYds,
    catches,
    recTDs,
    rushYds,
    rushTDs,
    passYds,
    passTDs,
    fumbles,
  };

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
          {playerType === "WR" && <WideReciever {...bulkProps} />}
          {playerType === "TE" && <TightEnd {...bulkProps} />}
          {playerType === "RB" && <RunningBack {...bulkProps} />}
          {playerType === "QB" && <QuarterBack {...bulkProps} />}
        </div>
        <div>
          {playerType !== "" && (
            <ButtonWrapper>
              <CalculateButton>Calculate</CalculateButton>
            </ButtonWrapper>
          )}
        </div>
      </ContentWrapper>
    </Background>
  );
};

export default Home;
