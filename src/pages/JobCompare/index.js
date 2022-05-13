import React from "react";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

const Root = styled('div')({
  // minHeight: "55vh",
  flexGrow: 1,
  margin: "auto",
  // height: "auto",
  height: "87vh",
  marginTop: "2rem"
});


export default function JobCompare() {

  return (
    <Root>
      <Grid fontSize={"3rem"} textAlign="center">
        Job Compare
      </Grid>
    </Root>
  )
}