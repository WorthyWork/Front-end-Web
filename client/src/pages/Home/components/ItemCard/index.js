import React, { useEffect, useState } from "react";
import { Box, Paper, Avatar, Grid, Checkbox } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import variables from "../../../../styles/variables";
import { ApplyButton } from "../../StyleComponents";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Skeleton from "@mui/material/Skeleton";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  // backgroundColor: checked ? 'rgba(2, 73, 89,0.05)':variables.White,
  // backgroundColor: checked ? 'rgba(2, 103, 115,0.1)':variables.White,
  [theme.breakpoints.up("md")]: {
    minWidth: "50rem",
    height: "13rem",
  },
  maxWidth: 720,
  color: theme.palette.text.primary,
  paddingRight: "3rem",
}));

export default function ItemCard(props) {
  const jobDataList = props.jobDataList ? props.jobDataList : [];
  const i = props.i;
  const selectItemA = props.selectItemA; //顯示用
  const selectItemB = props.selectItemB; //顯示用
  const setSelectItemA = props.setSelectItemA;
  const setSelectItemB = props.setSelectItemB;
  const selectItem = props.selectItem; //存localstorage用
  const setSelectItem = props.setSelectItem;
  const setActive = props.setActive; //控制footerbar用
  const [checked, setChecked] = useState(false);
  const [checkedIndexA, setCheckedIndexA] = useState(""); // 顯示border用
  const [checkedIndexB, setCheckedIndexB] = useState(""); // 顯示border用

  var ItemAisEmpty = Object.keys(selectItem.ItemA).length <= 0;
  var ItemBisEmpty = Object.keys(selectItem.ItemB).length <= 0;

  const handleChange = (event) => {
    setActive(true);
    if (checked) {
      // 已被選取者點擊無效直接return
      return;
    }
    if (ItemAisEmpty) {
      setChecked(true);
      setSelectItem({ ...selectItem, ItemA: jobDataList[i], IndexA: i });
      localStorage.setItem("selectItemA", JSON.stringify(jobDataList[i]));
      setSelectItemA(jobDataList[i]);
      setCheckedIndexA(i);
    } else if (ItemBisEmpty) {
      setChecked(true);
      setSelectItem({ ...selectItem, ItemB: jobDataList[i], IndexB: i });
      localStorage.setItem("selectItemB", JSON.stringify(jobDataList[i]));
      setSelectItemB(jobDataList[i]);
      setCheckedIndexB(i);
    }
  };

  useEffect(() => {
    /* eslint-disable */
    if (selectItem.IndexA === i || selectItem.IndexB === i) {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    /* eslint-disable */
    setChecked(false);
    setCheckedIndexA("");
  }, [selectItemA === "" && checkedIndexA === i]);

  useEffect(() => {
    /* eslint-disable */
    setChecked(false);
    setCheckedIndexB("");
  }, [selectItemB === "" && checkedIndexB === i]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <StyledPaper
        sx={{
          my: 1,
          border: 3,
          borderColor:
            i === selectItem.IndexA || i === selectItem.IndexB
              ? variables.Focus_Green
              : "transparent",
        }}
      >
        <Grid container wrap="nowrap" spacing={2} pt={"0.7rem"}>
          <Grid pl={"1rem"} pt={"0.5rem"}>
            {jobDataList[i] ? (
              <Avatar
                variant="rounded"
                sx={{
                  fontWeight: 600,
                  bgcolor: variables.Hover_Green,
                  width: 56,
                  height: 56,
                }}
              >
                {jobDataList[i] ? jobDataList[i].COMPNAME.slice(0, 1) : null}
              </Avatar>
            ) : (
              <Skeleton variant="rectangular" width={56} height={56} />
            )}
          </Grid>
          <Grid
            zeroMinWidth
            xs
            item
            pl={"1rem"}
            sx={{ "&.MuiGrid-item": { paddingLeft: "1rem", paddingTop: 0 } }}
          >
            {/* 職缺名稱 */}
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {jobDataList[i] ? (
                <Typography
                  noWrap
                  sx={{ fontSize: "1.5rem", fontWeight: 600, width: "535px" }}
                >
                  {jobDataList[i] ? jobDataList[i].OCCU_DESC : null}
                </Typography>
              ) : (
                <Skeleton variant="text" sx={{ width: "300px" }} />
              )}
              <FormControlLabel
                sx={{ color: variables.Focus_Green }}
                value="start"
                control={
                  <Checkbox
                    inputProps={{ "aria-label": "controlled" }}
                    checked={i === selectItem.IndexA || i === selectItem.IndexB}
                    onChange={handleChange}
                    icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<CheckCircleRoundedIcon />}
                    disabled={
                      !ItemAisEmpty &&
                      !ItemBisEmpty &&
                      i !== selectItem.IndexA &&
                      i !== selectItem.IndexB
                    }
                    sx={{
                      color: variables.Focus_Green,
                      borderRadius: "40px",
                      "&.Mui-checked": {
                        color: variables.Focus_Green,
                      },
                    }}
                  />
                }
                label="加入比較"
                labelPlacement="start"
              />
              {/* </Box> */}
            </Grid>
            {/* 公司名稱 */}
            <Box display="flex" direction="row" alignItems="center">
              {jobDataList[i] ? (
                <Typography
                  noWrap
                  sx={{
                    fontSize: "1.2rem",
                    color: variables.Green,
                    fontWeight: 600,
                  }}
                >
                  {jobDataList[i] ? jobDataList[i].COMPNAME : null}
                </Typography>
              ) : (
                <Skeleton variant="text" sx={{ width: "300px" }} />
              )}

              {/* <Typography noWrap sx={{ pl: "2rem", fontSize: "0.8rem" }}>
                {jobDataList[i] ? jobDataList[i].WKTIME : null}
              </Typography>
              <Typography noWrap sx={{ fontSize: "0.8rem" }}>
                {jobDataList[i] ? jobDataList[i].WK_TYPE : null}
              </Typography> */}
              {jobDataList[i] ? (
                <Typography noWrap sx={{ pl: "1rem", fontSize: "0.8rem" }}>
                  ( {jobDataList[i] ? jobDataList[i].CJOB_NAME1 : null} )
                </Typography>
              ) : null}
            </Box>

            <Grid container wrap="nowrap" spacing={2}>
              <CustomWidthTooltip
                title={jobDataList[i] ? jobDataList[i].JOB_DETAIL : ""}
              >
                <Grid item xs>
                  {/* 工作內容 */}
                  <Typography noWrap sx={{ fontSize: "0.9rem", pt: "1.5rem" }}>
                    {jobDataList[i] ? jobDataList[i].JOB_DETAIL : null}
                  </Typography>
                </Grid>
              </CustomWidthTooltip>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              minHeight={50}
            >
              <Box display="flex" direction="row">
                {/* 地區 / 薪水 / 學歷 / 人數  */}
                {jobDataList[i] ? (
                  <>
                    {/* 地區 */}
                    <Typography noWrap sx={{ fontSize: "1rem" }}>
                      <LocationOnIcon
                        sx={{ fontSize: 15, m: "-2px", pr: "3px" }}
                      />
                      {jobDataList[i] ? jobDataList[i].CITYNAME : null}
                    </Typography>
                    {/* 薪水 */}
                    <Typography noWrap sx={{ fontSize: "1rem", pl: "1rem" }}>
                      <AttachMoneyIcon
                        sx={{ fontSize: 15, m: "-2px", pr: "3px" }}
                      />
                      {jobDataList[i] ? jobDataList[i].SALARYCD : null}
                      {jobDataList[i].SALARY_U
                        ? jobDataList[i].SALARY_L +
                          " - " +
                          jobDataList[i].SALARY_U
                        : jobDataList[i].SALARY_L}
                    </Typography>
                    {/*學歷 */}
                    <Typography noWrap sx={{ fontSize: "1rem", pl: "1rem" }}>
                      <SchoolIcon sx={{ fontSize: 15, m: "-2px", pr: "7px" }} />
                      {jobDataList[i] ? jobDataList[i].EDGRDESC : null}
                    </Typography>
                    {/*人數 */}
                    <Typography noWrap sx={{ fontSize: "1rem", pl: "1rem" }}>
                      <PersonIcon sx={{ fontSize: 15, m: "-2px", pr: "3px" }} />
                      {jobDataList[i] ? jobDataList[i].AVAILREQNUM : null}
                    </Typography>
                  </>
                ) : (
                  <Skeleton variant="text" sx={{ width: "300px" }} />
                )}
              </Box>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <ApplyButton
                variant="outlined"
                href={jobDataList[i] ? jobDataList[i].URL_QUERY : null}
                target="_blank"
              >
                應徵
              </ApplyButton>
            </Box>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
