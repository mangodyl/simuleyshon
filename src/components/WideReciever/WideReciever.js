import React, { Fragment, useState } from "react";
import {
  Grid,
  GridCell,
  FieldTitle,
  FieldInput,
  CalculateButton,
} from "../common";

const WideReciever = () => {
  //   const [playerType, setPlayerState] = useState("");

  return (
    <Fragment>
      <Grid>
        <GridCell>
          <FieldTitle>Yards</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>Catches</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>TDs</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>Rush Yards</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>Rush TDs</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>Throwing Yards</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>Throwing TDs</FieldTitle>
          <FieldInput />
        </GridCell>
        <GridCell>
          <FieldTitle>Fumbles</FieldTitle>
          <FieldInput />
        </GridCell>
      </Grid>
      <div>
        <CalculateButton>Calculate</CalculateButton>
      </div>
    </Fragment>
  );
};

export default WideReciever;
