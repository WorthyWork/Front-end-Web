import { styled } from "@mui/material/styles";
import { Button, Dialog, Paper } from "@mui/material";
import variables from "../../../../../../styles/variables";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const FeedbackPaper = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  width: "auto",
  height: "100%",
  overflowY: "auto",
  backgroundColor: "#fff",
  backgroundPosition: "50% 0.5rem",
  backgroundSize: "150px, auto ,contain",
  backgroundRepeat: "no-repeat",
});

const FinishBtn = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  width: "120px",
  height: 37,
  borderRadius: "30px",
  backgroundColor: variables.Focus_Green,
  color: "#fff",
  "&:hover": {
    backgroundColor: variables.Hover_Green,
    color: "#fff",
  },
});

const CancelBtn = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  width: "120px",
  height: 37,
  borderRadius: "30px",
  backgroundColor: "#fff",
  borderColor: variables.Green,
  color: variables.Green,

  "&:hover": {
    backgroundColor: "#fff",
    borderColor: variables.Green,
    color: variables.Green,
  },
});

export { BootstrapDialog, FeedbackPaper, FinishBtn, CancelBtn };
