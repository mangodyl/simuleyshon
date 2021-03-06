import React, { Fragment } from "react";
import { Grid, GridCell, FieldTitle, FieldInput } from "../common";

const RunningBack = (props) => {
  return (
    <Fragment>
      <Grid>
        <GridCell highlight>
          <FieldTitle>Rec Yards</FieldTitle>
          <FieldInput
            type="text"
            value={props.recYds}
            onChange={(e) => props.onChange(e, { type: "recYds" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "recYds" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>Catches</FieldTitle>
          <FieldInput
            type="text"
            value={props.catches}
            onChange={(e) => props.onChange(e, { type: "catches" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "catches" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>TDs</FieldTitle>
          <FieldInput
            type="text"
            value={props.recTDs}
            onChange={(e) => props.onChange(e, { type: "recTDs" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "recTDs" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>Rush Yards</FieldTitle>
          <FieldInput
            type="text"
            value={props.rushYds}
            onChange={(e) => props.onChange(e, { type: "rushYds" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "rushYds" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>Rush TDs</FieldTitle>
          <FieldInput
            type="text"
            value={props.rushTDs}
            onChange={(e) => props.onChange(e, { type: "rushTDs" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "rushTDs" })}
          />
        </GridCell>
        <GridCell>
          <FieldTitle>Passing Yards</FieldTitle>
          <FieldInput
            type="text"
            value={props.passYds}
            onChange={(e) => props.onChange(e, { type: "passYds" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "passYds" })}
          />
        </GridCell>
        <GridCell>
          <FieldTitle>Passing TDs</FieldTitle>
          <FieldInput
            type="text"
            value={props.passTDs}
            onChange={(e) => props.onChange(e, { type: "passTDs" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "passTDs" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>Fumbles</FieldTitle>
          <FieldInput
            type="text"
            value={props.fumbles}
            onChange={(e) => props.onChange(e, { type: "fumbles" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "fumbles" })}
          />
        </GridCell>
        <GridCell>
          <FieldTitle>2-pt Conversions</FieldTitle>
          <FieldInput
            type="text"
            value={props.twoPts}
            onChange={(e) => props.onChange(e, { type: "twoPts" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "twoPts" })}
          />
        </GridCell>
      </Grid>
    </Fragment>
  );
};

export default RunningBack;
