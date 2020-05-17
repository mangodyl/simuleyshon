import React, { Fragment } from "react";
import { Grid, GridCell, FieldTitle, FieldInput } from "../common";

const Kicker = (props) => {
  return (
    <Fragment>
      <Grid>
        <GridCell highlight>
          <FieldTitle>Field Goals</FieldTitle>
          <FieldInput
            type="text"
            value={props.fieldGoals}
            onChange={(e) => props.onChange(e, { type: "fieldGoals" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "fieldGoals" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>PATs</FieldTitle>
          <FieldInput
            type="text"
            value={props.pats}
            onChange={(e) => props.onChange(e, { type: "pats" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "pats" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>Missed FGs</FieldTitle>
          <FieldInput
            type="text"
            value={props.fgMisses}
            onChange={(e) => props.onChange(e, { type: "fgMisses" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "fgMisses" })}
          />
        </GridCell>
        <GridCell highlight>
          <FieldTitle>Missed PATs</FieldTitle>
          <FieldInput
            type="text"
            value={props.patMisses}
            onChange={(e) => props.onChange(e, { type: "patMisses" })}
            onBlur={(e) => props.emptyFieldHandler(e, { type: "patMisses" })}
          />
        </GridCell>
      </Grid>
    </Fragment>
  );
};

export default Kicker;
