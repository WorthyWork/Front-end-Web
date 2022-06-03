import React from "react";
import Typography from "@mui/material/Typography";
import variables from "../../../../styles/variables";
import { StyledPaper } from "../../../JobCompare/StyleComponents";
import { Avatar, Box, Grid, Paper, IconButton } from "@mui/material";
import { StartCompareButton, CompareFooterBtn } from "./StyleComponents";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";
import PageviewIcon from "@mui/icons-material/Pageview";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "../../../../actions/types";

export default function CompareFooter(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const setPickCount = props.setPickCount;
  const pickCount = props.pickCount;
  const selectItemA = props.selectItemA;
  const selectItemB = props.selectItemB;
  const setSelectItemA = props.setSelectItemA;
  const setSelectItemB = props.setSelectItemB;
  const active = props.active;
  const setActive = props.setActive;

  const fetchData = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const { data: illegalA } = await axios.get(
        "https://worthywork-app.herokuapp.com/illegal/" + selectItemA.COMPNAME
      );
      const { data: illegalB } = await axios.get(
        "https://worthywork-app.herokuapp.com/illegal/" + selectItemB.COMPNAME
      );
      // const { data: capitalA } = await axios.get(
      //   "http://localhost:5000/capital/" + selectItemA.COMPNAME
      // );
      // const { data: capitalB } = await axios.get(
      //   "http://localhost:5000/capital/" + selectItemB.COMPNAME
      // );

      localStorage.setItem("illegalA", JSON.stringify(illegalA));
      localStorage.setItem("illegalB", JSON.stringify(illegalB));
      // if (capitalA[0] !== undefined) {
      //   localStorage.setItem(
      //     "capitalA",
      //     JSON.stringify(capitalA[0].Capital_Stock_Amount)
      //   );
      // } else {
      //   localStorage.setItem("capitalA", "null");
      // }
      // if (capitalB[0] !== undefined) {
      //   localStorage.setItem(
      //     "capitalB",
      //     JSON.stringify(capitalB[0].Capital_Stock_Amount)
      //   );
      // } else {
      //   localStorage.setItem("capitalB", "null");
      // }

      // localStorage.setItem("salaryA", JSON.stringify(salaryA));
      // localStorage.setItem("salaryB", JSON.stringify(salaryB));
      // console.log("salaryB", salaryB);
      history.push({
        pathname: "/jobcompare",
        // selectItemA:selectItemA,
        // selectItemB:selectItemB,
        // illegalA:illegalA,
        // illegalB:illegalB,
        // capitalA:capitalA,
        // capitalB:capitalB
      });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCompareFooter = () => {
    setActive(!active);
  };

  const handleCompare = () => {
    fetchData();
  };
  const handleDeleteA = () => {
    setSelectItemA("");
    setPickCount(pickCount - 1);
  };
  const handleDeleteB = () => {
    setSelectItemB("");
    setPickCount(pickCount - 1);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{
          height: active ? "100px" : "20px",
          alignItems: "center",
          backgroundColor: variables.Focus_Green,
          transform: [{ translatey: "-50%" }],
          transition: "all 0.2s ease",
        }}
      >
        <CompareFooterBtn onClick={handleCompareFooter}>
          {active ? (
            <KeyboardArrowDownIcon
              sx={{
                color: variables.White,
                position: "absolute",
                top: "10px",
                fontSize: "2rem",
              }}
            />
          ) : (
            <KeyboardArrowUpIcon
              sx={{
                color: variables.White,
                position: "absolute",
                top: "10px",
                fontSize: "2rem",
              }}
            />
          )}{" "}
        </CompareFooterBtn>
        {active ? (
          <>
            <Box sx={{ overflow: "hidden", px: 3, position: "relative" }}>
              {selectItemA ? (
                <IconButton
                  aria-label="close"
                  onClick={handleDeleteA}
                  sx={{
                    position: "absolute",
                    right: 30,
                    top: 8,
                    color: variables.Lightgrey,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              ) : null}
              <StyledPaper
                sx={{
                  my: 1,
                }}
              >
                <Grid
                  container
                  wrap="nowrap"
                  spacing={2}
                  alignItems="center"
                  pt={"0.7rem"}
                >
                  <Grid pl={"1rem"}>
                    <Avatar
                      variant="rounded"
                      sx={{ fontWeight: 600, bgcolor: variables.Hover_Green }}
                    >
                      {selectItemA ? (
                        selectItemA.COMPNAME.slice(0, 1)
                      ) : (
                        <PageviewIcon />
                      )}
                    </Avatar>
                  </Grid>
                  <Grid
                    item
                    pl={"1rem"}
                    sx={{
                      "&.MuiGrid-item": {
                        paddingLeft: "1rem",
                        paddingTop: 0,
                        minWidth: "0",
                      },
                    }}
                  >
                    <Typography
                      noWrap
                      sx={{ fontSize: "1.2rem", fontWeight: 600 }}
                    >
                      {selectItemA ? selectItemA.OCCU_DESC : null}
                    </Typography>
                    <Typography
                      noWrap
                      sx={{
                        fontSize: "0.9rem",
                        color: variables.Green,
                        fontWeight: 600,
                      }}
                    >
                      {selectItemA ? selectItemA.COMPNAME : null}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
            <Typography
              fontSize={"1rem"}
              sx={{ color: variables.White, fontWeight: 500 }}
            >
              VS
            </Typography>

            <Box sx={{ overflow: "hidden", px: 3, position: "relative" }}>
              {selectItemB ? (
                <IconButton
                  aria-label="close"
                  onClick={handleDeleteB}
                  sx={{
                    position: "absolute",
                    right: 30,
                    top: 8,
                    color: variables.Lightgrey,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              ) : null}

              <StyledPaper
                sx={{
                  my: 1,
                }}
              >
                <Grid
                  container
                  wrap="nowrap"
                  spacing={2}
                  alignItems="center"
                  pt={"0.7rem"}
                >
                  <Grid pl={"1rem"}>
                    <Avatar
                      variant="rounded"
                      sx={{ fontWeight: 600, bgcolor: variables.Hover_Green }}
                    >
                      {selectItemB ? (
                        selectItemB.COMPNAME.slice(0, 1)
                      ) : (
                        <PageviewIcon />
                      )}
                    </Avatar>
                  </Grid>
                  <Grid
                    item
                    zeroMinWidth
                    pl={"1rem"}
                    sx={{
                      "&.MuiGrid-item": { paddingLeft: "1rem", paddingTop: 0 },
                    }}
                  >
                    <Typography
                      noWrap
                      sx={{ fontSize: "1.2rem", fontWeight: 600 }}
                    >
                      {selectItemB ? selectItemB.OCCU_DESC : null}
                    </Typography>
                    <Typography
                      noWrap
                      sx={{
                        fontSize: "0.9rem",
                        color: variables.Green,
                        fontWeight: 600,
                      }}
                    >
                      {selectItemB ? selectItemB.COMPNAME : null}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
          </>
        ) : null}

        {active ? (
          <Box sx={{ pl: "2rem" }}>
            <StartCompareButton
              variant="outlined"
              disabled={pickCount < 2}
              onClick={handleCompare}
            >
              開始比較
            </StartCompareButton>
          </Box>
        ) : null}
      </Box>
    </Paper>
  );
}
