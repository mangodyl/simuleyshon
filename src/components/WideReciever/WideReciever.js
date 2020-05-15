import React, { Fragment } from "react";
import { Grid, GridCell, FieldTitle, FieldInput } from "../common";

const WideReciever = (props) => {
  return (
    <Fragment>
      <Grid>
        <GridCell>
          <FieldTitle>Rec Yards</FieldTitle>
          <FieldInput
            type="text"
            value={props.recYds}
            onChange={(e) => props.onChange(e, { type: "recYds" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "recYds" })}
          />
        </GridCell>
        <GridCell>
          <FieldTitle>Catches</FieldTitle>
          <FieldInput
            type="text"
            value={props.catches}
            onChange={(e) => props.onChange(e, { type: "catches" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "catches" })}
          />
        </GridCell>
        <GridCell>
          <FieldTitle>TDs</FieldTitle>
          <FieldInput
            type="text"
            value={props.recTDs}
            onChange={(e) => props.onChange(e, { type: "recTDs" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "recTDs" })}
          />
        </GridCell>
        <GridCell>
          <FieldTitle>Rush Yards</FieldTitle>
          <FieldInput
            type="text"
            value={props.rushYds}
            onChange={(e) => props.onChange(e, { type: "rushYds" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "rushYds" })}
          />
        </GridCell>
        <GridCell>
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
        <GridCell>
          <FieldTitle>Fumbles</FieldTitle>
          <FieldInput
            type="text"
            value={props.fumbles}
            onChange={(e) => props.onChange(e, { type: "fumbles" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "fumbles" })}
          />
        </GridCell>
      </Grid>
    </Fragment>
  );
};

export default WideReciever;
