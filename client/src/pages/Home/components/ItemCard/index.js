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
  const pickCount = props.pickCount;
  const setPickCount = props.setPickCount;
  const firstPick = props.firstPick;
  const setFirstPick = props.setFirstPick;
  const secondPick = props.secondPick;
  const setSecondPick = props.setSecondPick;
  const selectItemA = props.selectItemA;
  const selectItemB = props.selectItemB;
  const setSelectItemA = props.setSelectItemA;
  const setSelectItemB = props.setSelectItemB;
  const setActive = props.setActive;
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setActive(true);
    if (pickCount === 0) {
      setFirstPick(i);
      setPickCount(1);
      setSelectItemA(jobDataList[i]);
      localStorage.setItem("selectItemA", JSON.stringify(jobDataList[i]));
      setChecked(true);
    } else if (firstPick === i) {
      setPickCount(pickCount - 1);
      setChecked(false);
      setFirstPick("");
      setSelectItemA("");
    } else if (pickCount === 1) {
      setSecondPick(i);
      setPickCount(2);
      setSelectItemB(jobDataList[i]);
      localStorage.setItem("selectItemB", JSON.stringify(jobDataList[i]));
      setChecked(true);
    } else if (secondPick === i) {
      setPickCount(pickCount - 1);
      setChecked(false);
      setSecondPick("");
      setSelectItemB("");
    }
  };

  useEffect(() => {
    /* eslint-disable */
    if (firstPick === i || secondPick === i) {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    /* eslint-disable */
    // setChecked(false)
    setFirstPick("");
  }, [selectItemA === ""]);

  useEffect(() => {
    /* eslint-disable */
    // setChecked(false)
    setSecondPick("");
  }, [selectItemB === ""]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <StyledPaper
        sx={{
          my: 1,
          border: 3,
          borderColor: checked ? variables.Focus_Green : "transparent",
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
                    checked={checked}
                    onChange={handleChange}
                    icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<CheckCircleRoundedIcon />}
                    // disabled={pickCount==2 && i!==firstPick && i!==secondPick}
                    // {...label}
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

              <Typography noWrap sx={{ pl: "2rem", fontSize: "0.8rem" }}>
                {jobDataList[i] ? jobDataList[i].WKTIME : null}
              </Typography>
              <Typography noWrap sx={{ fontSize: "0.8rem" }}>
                {jobDataList[i] ? jobDataList[i].WK_TYPE : null}
              </Typography>
            </Box>
            <Grid container wrap="nowrap" spacing={2}>
              <CustomWidthTooltip
                title={jobDataList[i] ? jobDataList[i].JOB_DETAIL : ""}
              >
                <Grid item xs>
                  {/* 工作內容 */}
                  <Typography noWrap sx={{ fontSize: "0.9rem", pt: "0.5rem" }}>
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
              minHeight={60}
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
