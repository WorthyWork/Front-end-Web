import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import ItemCard from "./components/ItemCard";
import { Pagination, Grid, Typography } from "@mui/material";
import Footer from "../../container/footer";
import CompareFooter from "./components/CompareFooter";
import UserTestResult from "./components/UserTestResult";
import variables from "../../styles/variables";
import { MBTIJobRecommend } from "./components/UserTestResult/MBTIdata";

const Root = styled("div")({
  flexGrow: 1,
  minHeight: "87vh",
  height: "auto",
  marginTop: "2rem",
});

export default function Home() {
  const [jobDataList, setJobDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(9);

  const [firstPick, setFirstPick] = useState(""); //選取職缺A的index,畫border用
  const [secondPick, setSecondPick] = useState(""); //選取職缺B的index,畫border用
  const [pickCount, setPickCount] = useState(0); //其餘btn 是否disabled判斷用
  const [selectItemA, setSelectItemA] = useState(); //選取職缺A內容
  const [selectItemB, setSelectItemB] = useState(); //選取職缺B內容
  const [selectItem, setSelectItem] = useState({
    ItemA: {},
    IndexA: "",
    ItemB: {},
    IndexB: "",
  });
  const [active, setActive] = useState(false);
  const MBTIResult = localStorage.getItem("MBTIResult");
  const DISCResult = localStorage.getItem("DISCResult");
  var jobParams = MBTIResult ? MBTIJobRecommend[MBTIResult].split(",") : "";
  const scrollToAnchor = (anchorname) => {
    if (anchorname) {
      const anchorElement = document.getElementById(anchorname);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    }
  };

  const scrollToAnchorJump = (anchorname) => {
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

  const handleChange = (event, value) => {
    scrollToAnchor("listtop");
    setPage(value);
    setStartCount(value * 10 - 10);
    setEndCount(value * 10 - 1);
  };

  useEffect(() => {
    /* eslint-disable */
    scrollToAnchorJump("top");

    if (MBTIResult && DISCResult) {
      axios
        .get("https://worthywork-app.herokuapp.com/job/list", {
          params: {
            cjobname1: jobParams[0],
            cjobname2: jobParams[1],
            cjobname3: jobParams[2],
          },
        })
        .then((res) => {
          // console.log("res1", res.data);
          setJobDataList(res.data);
        });
    } else {
      axios.get("https://worthywork-app.herokuapp.com/job/list").then((res) => {
        // console.log("res2", res.data);
        setJobDataList(res.data);
      });
    }
  }, []);

  const ItemList = (start, end) => {
    const row = [];
    for (var i = start; i <= end; i++) {
      row.push(
        <ItemCard
          key={i + ""}
          i={i}
          jobDataList={jobDataList}
          firstPick={firstPick}
          setFirstPick={setFirstPick}
          secondPick={secondPick}
          setSecondPick={setSecondPick}
          pickCount={pickCount}
          setPickCount={setPickCount}
          selectItem={selectItem}
          setSelectItem={setSelectItem}
          selectItemA={selectItemA}
          selectItemB={selectItemB}
          setSelectItemA={setSelectItemA}
          setSelectItemB={setSelectItemB}
          setActive={setActive}
        />
      );
    }
    return row;
  };

  return (
    <Root id="top">
      <UserTestResult MBTIResult={MBTIResult} DISCResult={DISCResult} />
      <Typography
        id="listtop"
        variant="h5"
        gutterBottom
        component="div"
        sx={{ color: variables.Focus_Green, fontWeight: "bold", mt: "1rem" }}
      >
        職缺列表
      </Typography>
      {ItemList(startCount, endCount)}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Pagination
          sx={{ pt: "2rem" }}
          shape="rounded"
          size="large"
          count={jobDataList ? Math.ceil(jobDataList.length / 10) - 1 : 10}
          page={page}
          onChange={handleChange}
        />
      </Grid>
      <Footer />
      <CompareFooter
        active={active}
        setActive={setActive}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        pickCount={pickCount}
        setPickCount={setPickCount}
        selectItemA={selectItemA}
        selectItemB={selectItemB}
        setSelectItemA={setSelectItemA}
        setSelectItemB={setSelectItemB}
      />
    </Root>
  );
}
