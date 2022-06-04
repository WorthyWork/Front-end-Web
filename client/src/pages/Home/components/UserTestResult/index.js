import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import No_Data from "../../../../assets/No_Data.svg";
/* eslint-disable */
import ENFJ from "../../../../assets/ENFJ.svg";
import ENFP from "../../../../assets/ENFP.svg";
import ENTJ from "../../../../assets/ENTJ.svg";
import ENTP from "../../../../assets/ENTP.svg";

import ESFJ from "../../../../assets/ESFJ.svg";
import ESFP from "../../../../assets/ESFP.svg";
import ESTJ from "../../../../assets/ESTJ.svg";
import ESTP from "../../../../assets/ESTP.svg";

import INFJ from "../../../../assets/INFJ.svg";
import INFP from "../../../../assets/INFP.svg";
import INTJ from "../../../../assets/INTJ.svg";
import INTP from "../../../../assets/INTP.svg";

import ISFJ from "../../../../assets/ISFJ.svg";
import ISFP from "../../../../assets/ISFP.svg";
import ISTJ from "../../../../assets/ISTJ.svg";
import ISTP from "../../../../assets/ISTP.svg";

import Owl from "../../../../assets/Owl.svg";
import Tiger from "../../../../assets/Tiger.svg";
import KoalaBear from "../../../../assets/KoalaBear.svg";
import Peacock from "../../../../assets/Peacock.svg";
import Chameleon from "../../../../assets/Chameleon.svg";
import { MBTIDescription } from "./MBTIdata";
import { DISCDescription } from "./DISCdata";
import { MBTIJobRecommend } from "./MBTIdata";
import { DISCJobRecommend } from "./DISCdata";

import { Typography, Paper, Box, Divider } from "@mui/material";
import variables from "../../../../styles/variables";
import { useHistory } from "react-router-dom";
import { TestButton, NoDataPaper, ImgPaper } from "./StyleComponents";

const DescriptionPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(4),
  maxWidth: 350,
  color: theme.palette.text.primary,
}));

export default function UserTestResult(props) {
  let history = useHistory();
  const MBTIResult = props.MBTIResult;
  const DISCResult = props.DISCResult;
  const [MBTI, setMBTI] = useState("");
  const [DISC, setDISC] = useState("");
  const handelTestPage = () => {
    history.push("/personalitytest");
  };
  const MBTITransform = () => {
    switch (MBTIResult) {
      case "ENFJ":
        setMBTI(ENFJ);
        break;
      case "ENFP":
        setMBTI(ENFP);
        break;
      case "ENTJ":
        setMBTI(ENTJ);
        break;
      case "ENTP":
        setMBTI(ENTP);
        break;
      case "ESFJ":
        setMBTI(ESFJ);
        break;
      case "ESFP":
        setMBTI(ESFP);
        break;
      case "ESTJ":
        setMBTI(ESTJ);
        break;
      case "ESTP":
        setMBTI(ESTP);
        break;
      case "INFJ":
        setMBTI(INFJ);
        break;
      case "INFP":
        setMBTI(INFP);
        break;
      case "INTJ":
        setMBTI(INTJ);
        break;
      case "INTP":
        setMBTI(INTP);
      case "ISFJ":
        setMBTI(ISFJ);
      case "ISFP":
        setMBTI(ISFP);
      case "ISTJ":
        setMBTI(ISTJ);
      case "ISTP":
        setMBTI(ISTP);
        break;
      default:
        break;
    }
  };
  const DISCTransform = () => {
    switch (DISCResult) {
      case "Tiger":
        setDISC(Tiger);
        break;
      case "Peacock":
        setDISC(Peacock);
        break;
      case "KoalaBear":
        setDISC(KoalaBear);
        break;
      case "Owl":
        setDISC(Owl);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    MBTITransform();
    DISCTransform();
  }, []);

  const noResultData = () => {
    return (
      <>
        <NoDataPaper
          elevation={0}
          sx={{ backgroundImage: `url(${No_Data})`, mb: "3rem" }}
        >
          <TestButton
            onClick={handelTestPage}
            variant="outlined"
            sx={{ mb: "22px" }}
          >
            前往測驗
          </TestButton>
        </NoDataPaper>
      </>
    );
  };
  const ResultData = () => {
    return (
      <Paper sx={{ width: "auto", height: "auto" }}>
        <Paper elevation={0} sx={{ px: "2rem", pt: "1.5rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            人格類型
          </Typography>
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <ImgPaper
            elevation={0}
            sx={{ backgroundImage: `url(${MBTI})` }}
          ></ImgPaper>
          <ImgPaper
            elevation={0}
            sx={{ backgroundImage: `url(${DISC})` }}
          ></ImgPaper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <DescriptionPaper elevation={0}>
            <Typography variant="body2">
              {MBTIDescription[MBTIResult]}
            </Typography>
          </DescriptionPaper>
          <Divider orientation="vertical" variant="middle" flexItem />
          <DescriptionPaper elevation={0}>
            <Typography variant="body2">
              {" "}
              {DISCDescription[DISCResult]}
            </Typography>
          </DescriptionPaper>
        </Box>
        <Divider variant="middle" />
        <Paper
          elevation={0}
          sx={{
            px: "2rem",
            py: "1.5rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            適合領域
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">
              {" "}
              {MBTIJobRecommend[MBTIResult]}
              {DISCJobRecommend[DISCResult]}
            </Typography>
            <Typography variant="body2">Test</Typography>
          </Box>
        </Paper>
      </Paper>
    );
  };

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ color: variables.Focus_Green, fontWeight: "bold" }}
      >
        個人指標
      </Typography>
      {MBTIResult ? <>{ResultData()}</> : <>{noResultData()}</>}
    </>
  );
}
