import React, { useState } from "react";
import { Box, Paper, Radio, RadioGroup, Divider } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import variables from "../../../../styles/variables";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "transparent",
  [theme.breakpoints.up("md")]: {
    minWidth: 1000,
  },
  maxWidth: 600,
  color: theme.palette.text.primary,
  paddingRight: "3rem",
}));

export default function MBTIQuestionCard(props) {
  const item = props.item;
  const progress = props.progress;
  const setProgress = props.setProgress;
  const countE = props.countE;
  const setCountE = props.setCountE;
  const countI = props.countI;
  const setCountI = props.setCountI;
  const countN = props.countN;
  const setCountN = props.setCountN;
  const countS = props.countS;
  const setCountS = props.setCountS;
  const countF = props.countF;
  const setCountF = props.setCountF;
  const countT = props.countT;
  const setCountT = props.setCountT;
  const countJ = props.countJ;
  const setCountJ = props.setCountJ;
  const countP = props.countP;
  const setCountP = props.setCountP;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("value", event.target.value);
    switch (event.target.value) {
      case "E":
        setCountE(countE + 1);
        break;
      case "I":
        setCountI(countI + 1);
        break;
      case "N":
        setCountN(countN + 1);
        break;
      case "S":
        setCountS(countS + 1);
        break;
      case "F":
        setCountF(countF + 1);
        break;
      case "T":
        setCountT(countT + 1);
        break;
      case "J":
        setCountJ(countJ + 1);
        break;
      case "P":
        setCountP(countP + 1);
        break;
      default:
        break;
    }
    if (value === "") {
      setProgress(progress + 1);
    }
  };
  return (
    <>
      {/* {MBTIQuestion.map((item, index) => ( */}
      <>
        <StyledPaper elevation={0}>
          <Paper
            elevation={0}
            sx={{
              height: "auto",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              fontSize: "1.8rem",
            }}
          >
            {item.title}
          </Paper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "640px",
              paddingLeft: "17rem",
              py: "1rem",
            }}
          >
            <FormControl>
              <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontSize: "1.2rem",
                    },
                  }}
                  value={item.result1}
                  control={
                    <Radio
                      disableRipple
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 32 },
                        // paddingLeft: "4rem",
                        "&.Mui-checked": {
                          color: variables.Focus_Green,
                        },
                      }}
                    />
                  }
                  label={item.option1}
                />
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontSize: "1.2rem",
                    },
                  }}
                  value={item.result2}
                  control={
                    <Radio
                      disableRipple
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 32,
                        },
                        "&.Mui-checked": {
                          color: variables.Focus_Green,
                        },
                        // "&:hover": {
                        //   bgcolor: "transparent",
                        // },
                      }}
                    />
                  }
                  label={item.option2}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider />
        </StyledPaper>
      </>
      {/* ))} */}
    </>
  );
}
