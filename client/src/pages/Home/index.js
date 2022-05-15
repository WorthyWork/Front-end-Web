import React from "react";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Axios from "axios";

const Root = styled('div')({
  // minHeight: "55vh",
  flexGrow: 1,
  margin: "auto",
  // height: "auto",
  height: "87vh",
  marginTop: "2rem"
});


export default function Home() {

  Axios({
    method: "GET",
    url: "http://localhost:5000/job/list",
    // headers: {
    //   "accept": "application/json"
    // }
  }).then(res => {
    console.log(res.data);
  }).catch((e) => {
    alert("職缺列表拿取失敗!", e);
  });


  return (
    <Root>
      <Grid fontSize={"3rem"} textAlign="center" >
        Home
      </Grid>
    </Root>
  )
}