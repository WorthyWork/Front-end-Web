import React, { useEffect, useState } from "react";
import { Grid, Box, IconButton } from "@mui/material";
import JobTitleCard from "./components/JobTitleCard";
import OthersCard from "./components/OthersCard";
import DividerTitle from "./components/DividerTitle";
import Footer from "../../container/footer";
import Typography from "@mui/material/Typography";
import variables from "../../styles/variables";
import { Root } from "./StyleComponents";
import Chart from "./components/Chart/index";
import { useHistory } from "react-router-dom";
import ApplyCard from "./components/ApplyCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IllegalDialog from "./components/IllegalDialog";
import { CheckIllegalBtn } from "./StyleComponents";

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

export default function JobCompare() {
  let history = useHistory();
  const selectItemA = JSON.parse(localStorage.getItem("selectItemA"));
  const selectItemB = JSON.parse(localStorage.getItem("selectItemB"));
  const illegalA = JSON.parse(localStorage.getItem("illegalA"));
  const illegalB = JSON.parse(localStorage.getItem("illegalB"));
  const capitalA = JSON.parse(localStorage.getItem("capitalA"));
  const capitalB = JSON.parse(localStorage.getItem("capitalB"));
  // const selectItemA = location.selectItemA ? location.selectItemA : "";
  // const selectItemB = location.selectItemB ? location.selectItemB : "";
  // const illegalA = location.illegalA;
  // const illegalB = location.illegalB;
  // const capitalA = location.capitalA[0]
  //   ? location.capitalA[0].Capital_Stock_Amount
  //   : "";
  // const capitalB = location.capitalB[0]
  //   ? location.capitalB[0].Capital_Stock_Amount
  //   : "";
  const [openDialog, setOpenDialog] = useState(false);
  const [sendIllegalData, setSendIllefalData] = useState([]);
  const handleOpenDialog = (data) => {
    // illegal dialog 用
    setSendIllefalData(data);
    setOpenDialog(true);
  };

  const backToHomePage = () => {
    history.push("/home");
  };

  const dividerData = ["公司比較", "職缺比較", "行業比較"];

  const companyDataA = [
    {
      title: "資本額",
      value: capitalA === null ? "無資料" : capitalA + "元",
    },
    {
      title: "有無違反勞動法令",
      value: illegalA.length > 0 ? illegalA.length + "筆" : "0筆",
      checkDetail:
        illegalA.length > 0 ? (
          <CheckIllegalBtn
            variant="outlined"
            onClick={() => handleOpenDialog(illegalA)}
          >
            查看詳細內容
          </CheckIllegalBtn>
        ) : null,
    },
  ];

  const companyDataB = [
    {
      title: "資本額",
      value: capitalB === null ? "無資料" : capitalB + "元",
    },
    {
      title: "有無違反勞動法令",
      value: illegalB.length > 0 ? illegalB.length + "筆" : "0筆",
      checkDetail:
        illegalB.length > 0 ? (
          <CheckIllegalBtn
            variant="outlined"
            sx={{ color: variables.Focus_Green }}
            onClick={() => handleOpenDialog(illegalB)}
          >
            查看詳細內容
          </CheckIllegalBtn>
        ) : null,
    },
  ];

  const vacancyDataA = [
    {
      title: "工作待遇",
      value: selectItemA
        ? selectItemA.SALARYCD +
          selectItemA.SALARY_L +
          "-" +
          selectItemA.SALARY_U
        : "無資料",
    },
    { title: "員工性質", value: selectItemA ? selectItemA.WK_TYPE : "" },
    {
      title: "上班時間",
      additionInfo: selectItemA ? selectItemA.WKTIME : "",
      value: "0830-1730",
    },
    { title: "上班地點", value: selectItemA ? selectItemA.CITYNAME : "" },
    { title: "學歷", value: selectItemA ? selectItemA.EDGRDESC : "" },
    { title: "工作內容", value: selectItemA ? selectItemA.JOB_DETAIL : "" },
  ];
  const vacancyDataB = [
    {
      title: "工作待遇",
      value: selectItemB
        ? selectItemB.SALARYCD +
          selectItemB.SALARY_L +
          "-" +
          selectItemB.SALARY_U
        : "無資料",
    },
    { title: "員工性質", value: selectItemB ? selectItemB.WK_TYPE : "" },
    {
      title: "上班時間",
      additionInfo: selectItemB ? selectItemB.WKTIME : "",
      value: "0830-1730",
    },
    { title: "上班地點", value: selectItemB ? selectItemB.CITYNAME : "" },
    { title: "學歷", value: selectItemB ? selectItemB.EDGRDESC : "" },
    { title: "工作內容", value: selectItemB ? selectItemB.JOB_DETAIL : "" },
  ];

  const companyA = [
    {
      positionName: selectItemA ? selectItemA.OCCU_DESC : "",
      company: selectItemA ? selectItemA.COMPNAME : "",
    },
    companyDataA,
    vacancyDataA,
  ];

  const companyB = [
    {
      positionName: selectItemB ? selectItemB.OCCU_DESC : "",
      company: selectItemB ? selectItemB.COMPNAME : "",
    },
    companyDataB,
    vacancyDataB,
  ];

  useEffect(() => {
    /* eslint-disable */
    scrollToAnchor("top");
  }, []);

  return (
    <Root id="top">
      <IllegalDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        sendIllegalData={sendIllegalData}
      />
      <Grid container>
        <Box pl={"5rem"} position="fixed">
          <IconButton size="large" onClick={backToHomePage}>
            <ArrowBackIcon sx={{ color: variables.Green }} />
          </IconButton>
        </Box>
        <Grid
          item
          xs={12}
          display="flex"
          pl={"5rem"}
          alignItems="center"
          justifyContent="center"
        >
          <JobTitleCard titleData={companyA[0]} />
          <Typography
            fontSize={"1rem"}
            sx={{ color: variables.Hover_Green, fontWeight: 600 }}
          >
            VS
          </Typography>
          <JobTitleCard titleData={companyB[0]} />
        </Grid>
      </Grid>

      <DividerTitle titleData={dividerData[0]} />

      <Grid container spacing={2} pl={"5rem"} justifyContent="center">
        <OthersCard data={companyA[1]} />
        <OthersCard data={companyB[1]} />
      </Grid>

      <DividerTitle titleData={dividerData[1]} />

      <Grid container spacing={2} pl={"5rem"} justifyContent="center">
        <OthersCard data={companyA[2]} />
        <OthersCard data={companyB[2]} />
      </Grid>

      <Grid
        container
        spacing={2}
        pl={"5rem"}
        display="flex"
        justifyContent="center"
        pt="2rem"
      >
        <ApplyCard URL={selectItemA ? selectItemA.URL_QUERY : ""}></ApplyCard>
        <ApplyCard URL={selectItemB ? selectItemB.URL_QUERY : ""}></ApplyCard>
      </Grid>
      <DividerTitle titleData={dividerData[2]} />

      <Box pl={"5rem"}>
        <Chart
          categoryA={selectItemA.CJOB_NAME1}
          categoryB={selectItemB.CJOB_NAME1}
        />
      </Box>
      <Footer />
    </Root>
  );
}
