import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import RatingStar from "./RatingStar";
import { FinishBtn, CancelBtn } from "./StyleComponents";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, pl: "1.5rem" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function RatingDialog(props) {
  const ratingDialogOpen = props.ratingDialogOpen;
  const setRatingDialogOpen = props.setRatingDialogOpen;
  const recommendList = props.recommendList;
  var jobParams = recommendList.split(",");
  const [jobCategory, setJobCategory] = useState([
    { type: jobParams[0], rate: 3 },
    { type: jobParams[1], rate: 3 },
    { type: jobParams[2], rate: 3 },
  ]);

  const handleRatingDialog = () => {
    setRatingDialogOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        fullWidth
        maxWidth="sm"
        onClose={handleRatingDialog}
        open={ratingDialogOpen}
      >
        <BootstrapDialogTitle onClose={handleRatingDialog}>
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
          <CancelBtn variant="outlined" onClick={handleRatingDialog}>
            取消
          </CancelBtn>
          <FinishBtn onClick={handleRatingDialog}>完成</FinishBtn>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
