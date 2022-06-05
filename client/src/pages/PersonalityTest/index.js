import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import QuestionCard from "./components/MBTIQuestionCard";
import DISCQuestionCard from "./components/DISCQuestionCard";
import { MBTIQuestion, DISCQuestion } from "./TestData";

import Footer from "../../container/footer";
import { useHistory } from "react-router-dom";
import {
  Root,
  TestCard,
  TestFinishedBtn,
  BorderLinearProgress,
} from "./StyleComponents";

export default function PersonalityTest() {
  let history = useHistory();
  const [progress, setProgress] = useState(0);
  const [countE, setCountE] = useState(0);
  const [countI, setCountI] = useState(0);
  const [countN, setCountN] = useState(0);
  const [countS, setCountS] = useState(0);
  const [countF, setCountF] = useState(0);
  const [countT, setCountT] = useState(0);
  const [countJ, setCountJ] = useState(0);
  const [countP, setCountP] = useState(0);
  const [countTiger, setCountTiger] = useState(0);
  const [countPeacock, setCountPeacock] = useState(0);
  const [countKoalaBear, setCountKoalaBear] = useState(0);
  const [countOwl, setCountOwl] = useState(0);
  const [MBTIResult, setMBTIResult] = useState("");
  const [DISCResult, setDISCResult] = useState("");

  const scrollToAnchor = (anchorname) => {
    if (anchorname) {
      const anchorElement = document.getElementById(anchorname);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "start",
        });
      }
    }
  };

  const MBTIPart = () => {
    let first = "";
    let second = "";
    let third = "";
    let fourth = "";
    if (countE > countI) {
      first = "E";
    } else {
      first = "I";
    }
    if (countN > countS) {
      second = "N";
    } else {
      second = "S";
    }

    if (countF > countT) {
      third = "F";
    } else {
      third = "T";
    }
    if (countJ > countP) {
      fourth = "J";
    } else {
      fourth = "P";
    }

    setMBTIResult(first + second + third + fourth);
  };

  const DISCPart = () => {
    let max = countTiger;
    setDISCResult("Tiger");
    if (countPeacock > max) {
      max = countPeacock;
      setDISCResult("Peacock");
    } else if (countKoalaBear > max) {
      max = countKoalaBear;
      setDISCResult("KoalaBear");
    } else if (countOwl > max) {
      max = countOwl;
      setDISCResult("Owl");
    }
  };

  const handleFinishTest = () => {
    localStorage.setItem("MBTIResult", MBTIResult);
    localStorage.setItem("DISCResult", DISCResult);
    history.push({
      pathname: "/home",
    });
  };
  useEffect(() => {
    /* eslint-disable */
    MBTIPart();
    DISCPart();
  }, [progress === 30 || progress >= 30]);

  useEffect(() => {
    scrollToAnchor("top");
  }, []);

  return (
    <>
      <Root id="top">
        <TestCard>
          <BorderLinearProgress
            variant="determinate"
            value={Math.round((100 / 30) * progress)}
            sx={{ width: "800px" }}
          />
          <Typography sx={{ fontSize: "1.4rem", pl: "3rem" }}>
            {progress} / 30
          </Typography>
        </TestCard>
        <Box sx={{ pt: "5rem" }}>
          {MBTIQuestion.map((item, index) => (
            <QuestionCard
              key={index + ""}
              item={item}
              progress={progress}
              setProgress={setProgress}
              countE={countE}
              setCountE={setCountE}
              countI={countI}
              setCountI={setCountI}
              countN={countN}
              setCountN={setCountN}
              countS={countS}
              setCountS={setCountS}
              countF={countF}
              setCountF={setCountF}
              countT={countT}
              setCountT={setCountT}
              countJ={countJ}
              setCountJ={setCountJ}
              countP={countP}
              setCountP={setCountP}
            />
          ))}
          {DISCQuestion.map((item, index) => (
            <DISCQuestionCard
              key={index + ""}
              item={item}
              progress={progress}
              setProgress={setProgress}
              countTiger={countTiger}
              setCountTiger={setCountTiger}
              countPeacock={countPeacock}
              setCountPeacock={setCountPeacock}
              countKoalaBear={countKoalaBear}
              setCountKoalaBear={setCountKoalaBear}
              countOwl={countOwl}
              setCountOwl={setCountOwl}
            />
          ))}
        </Box>
      </Root>
      <Box sx={{ display: "flex", justifyContent: "center", pt: "1.5rem" }}>
        <TestFinishedBtn onClick={handleFinishTest} disabled={progress < 30}>
          送出結果
        </TestFinishedBtn>
      </Box>
      <Footer />
    </>
  );
}
