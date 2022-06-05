import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import RatingStar from "./RatingStar";
import { BootstrapDialog, FinishBtn, CancelBtn } from "./StyleComponents";

export default function RatingDialog(props) {
  const ratingDialogOpen = props.ratingDialogOpen;
  const setRatingDialogOpen = props.setRatingDialogOpen;
  const recommendList = props.recommendList;
  const MBTIResult = props.MBTIResult;
  const DISCResult = props.DISCResult;
  var jobParams = recommendList.split(",");
  const [jobCategory, setJobCategory] = useState([
    { type: jobParams[0], rate: 3 },
    { type: jobParams[1], rate: 3 },
    { type: jobParams[2], rate: 3 },
  ]);

  const BootstrapDialogTitle = (props) => {
    const { children, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2, pl: "1.5rem" }} {...other}>
        {children}
        <IconButton
          aria-label="close"
          onClick={() => {
            setRatingDialogOpen(false);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    );
  };

  const handleSentRatingData = () => {
    axios
      .post("http://localhost:5000/data/push", {
        mbti: MBTIResult,
        disc: DISCResult,
        rating: jobCategory[0].rate,
        cjobname: jobCategory[0].type,
      })
      .then((res) => {
        console.log("res", res);
      });
    axios
      .post("http://localhost:5000/data/push", {
        mbti: MBTIResult,
        disc: DISCResult,
        rating: jobCategory[1].rate,
        cjobname: jobCategory[1].type,
      })
      .then((res) => {
        console.log("res", res);
      });
    axios
      .post("http://localhost:5000/data/push", {
        mbti: MBTIResult,
        disc: DISCResult,
        rating: jobCategory[2].rate,
        cjobname: jobCategory[2].type,
      })
      .then((res) => {
        console.log("res", res);
      });

    setRatingDialogOpen(false);
  };

  return (
    <div>
      <BootstrapDialog fullWidth maxWidth="sm" open={ratingDialogOpen}>
        <BootstrapDialogTitle>
          <Typography variant="h6" component="div">
            請問下列三大項產業領域，您認為和您適合的程度為何 ?
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent
          sx={{
            "&.MuiDialogContent-root": { pl: "2rem", pt: "1.5rem" },
            height: "150px",
          }}
          dividers
        >
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ mb: "1.35rem" }}
          >
            (1星表非常不適合 / 5星表非常適合)
          </Typography>

          {jobCategory.map((item, index) => (
            <Box
              key={index + ""}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <RatingStar
                item={item}
                index={index}
                jobCategory={jobCategory}
                setJobCategory={setJobCategory}
              />
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <CancelBtn
            variant="outlined"
            onClick={() => {
              setRatingDialogOpen(false);
            }}
          >
            取消
          </CancelBtn>
          <FinishBtn onClick={handleSentRatingData}>完成</FinishBtn>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
