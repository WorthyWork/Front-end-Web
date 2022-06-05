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

export default function DISCQuestionCard(props) {
  const item = props.item;
  const progress = props.progress;
  const setProgress = props.setProgress;
  const countTiger = props.countTiger;
  const setCountTiger = props.setCountTiger;
  const countPeacock = props.countPeacock;
  const setCountPeacock = props.setCountPeacock;
  const countKoalaBear = props.countKoalaBear;
  const setCountKoalaBear = props.setCountKoalaBear;
  const countOwl = props.countOwl;
  const setCountOwl = props.setCountOwl;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (event.target.value) {
      case "Tiger":
        setCountTiger(countTiger + 1);
        break;
      case "Peacock":
        setCountPeacock(countPeacock + 1);
        break;
      case "KoalaBear":
        setCountKoalaBear(countKoalaBear + 1);
        break;
      case "Owl":
        setCountOwl(countOwl + 1);
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
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontSize: "1.2rem",
                    },
                  }}
                  value={item.result3}
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
                  label={item.option3}
                />
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontSize: "1.2rem",
                    },
                  }}
                  value={item.result4}
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
                  label={item.option4}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider />
        </StyledPaper>
      </>
    </>
  );
}
