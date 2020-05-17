import React, { useState } from "react";
import {
  ContentWrapper,
  Title,
  P,
  PlayerTypeButton,
  CalculateButton,
  PointsTotalDisplay,
  PointsDisplayWrapper,
  ClearButton,
} from "./Home.styles";
import { ButtonWrapper } from "../components/common";
import WideReciever from "../components/WideReciever";
import TightEnd from "../components/TightEnd";
import RunningBack from "../components/RunningBack";
import QuarterBack from "../components/QuarterBack";
import Kicker from "../components/Kicker";

const Home = () => {
  const [playerType, setPlayerState] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [showTotalPoints, setShowTotalPoints] = useState(false);
  const [recYds, setRecYds] = useState(0);
  const [recTDs, setRecTDs] = useState(0);
  const [catches, setCatches] = useState(0);
  const [rushYds, setRushYds] = useState(0);
  const [rushTDs, setRushTDs] = useState(0);
  const [passYds, setPassYds] = useState(0);
  const [passTDs, setPassTDs] = useState(0);
  const [ints, setInts] = useState(0);
  const [twoPts, setTwoPts] = useState(0);
  const [fumbles, setFumbles] = useState(0);
  const [fieldGoals, setFieldGoals] = useState(0);
  const [pats, setPats] = useState(0);
  const [fgMisses, setFgMisses] = useState(0);
  const [patMisses, setPatMisses] = useState(0);

  const reducer = (val, action) => {
    switch (action.type) {
      case "recYds":
        setRecYds(val);
        break;
      case "recTDs":
        setRecTDs(val);
        break;
      case "catches":
        setCatches(val);
        break;
      case "rushYds":
        setRushYds(val);
        break;
      case "rushTDs":
        setRushTDs(val);
        break;
      case "passYds":
        setPassYds(val);
        break;
      case "passTDs":
        setPassTDs(val);
        break;
      case "ints":
        setInts(val);
        break;
      case "twoPts":
        setTwoPts(val);
        break;
      case "fumbles":
        setFumbles(val);
        break;
      case "fieldGoals":
        setFieldGoals(val);
        break;
      case "pats":
        setPats(val);
        break;
      case "fgMisses":
        setFgMisses(val);
        break;
      case "patMisses":
        setPatMisses(val);
        break;
      default:
        console.log("Error: no action (Home.js reducer function");
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

  const calculate = () => {
    // keep catches with the * 1 for consistency and as we may swap from PPR at some point
    // 2-pt (2)
    const recPoints = recYds * 0.1 + catches * 1 + recTDs * 6;
    // 2-pt (2)
    const rushPoints = rushYds * 0.1 + rushTDs * 6;
    // 2-pt (2), int (-1),
    const passPoints = passYds * 0.04 + passTDs * 4;
    const kickPoints = fieldGoals * 3 + pats * 1 - fgMisses * 1;
    const fumblePoints = fumbles * -1;
    const pointsTotal = (
      recPoints +
      rushPoints +
      passPoints +
      kickPoints +
      fumblePoints
    ).toFixed(2);
    setTotalPoints(pointsTotal);
    setShowTotalPoints(true);
  };

  const clearState = () => {
    setPlayerState("");
    setShowTotalPoints(false);
    const stateArr = [
      "recYds",
      "recTDs",
      "catches",
      "rushYds",
      "rushTDs",
      "passYds",
      "passTDs",
      "fumbles",
      "fieldGoals",
      "pats",
      "fgMisses",
    ];
    const actionArr = stateArr.map((val) => {
      return { type: val };
    });
    actionArr.forEach((type) => reducer(0, type));
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
    ints,
    twoPts,
    fumbles,
  };

  const kickerProps = {
    onChange,
    emptyFieldHandler,
    fieldGoals,
    pats,
    fgMisses,
    patMisses,
  };

  return (
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

        {showTotalPoints && (
          <PointsDisplayWrapper>
            <PointsTotalDisplay>Points: {totalPoints}</PointsTotalDisplay>
            <ClearButton onClick={() => clearState()}>Clear</ClearButton>
          </PointsDisplayWrapper>
        )}

        {playerType === "WR" && <WideReciever {...bulkProps} />}
        {playerType === "TE" && <TightEnd {...bulkProps} />}
        {playerType === "RB" && <RunningBack {...bulkProps} />}
        {playerType === "QB" && <QuarterBack {...bulkProps} />}
        {playerType === "K" && <Kicker {...kickerProps} />}
      </div>
      <div>
        {playerType !== "" && (
          <ButtonWrapper>
            <CalculateButton onClick={() => calculate()}>
              Calculate
            </CalculateButton>
          </ButtonWrapper>
        )}
      </div>
    </ContentWrapper>
  );
};

export default Home;
