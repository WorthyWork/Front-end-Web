import { styled } from "@mui/material/styles";
import { Button, Card } from "@mui/material";
import variables from "../../styles/variables";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Root = styled("div")({
  flexGrow: 1,
  minHeight: "87vh",
  height: "auto",
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
});

const TestCard = styled(Card)({
  position: "fixed",
  top: 10,
  zIndex: "4",
  width: "80%",
  height: "80px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "1.5rem",
});

const TestFinishedBtn = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "1.2rem",
  fontWeight: "bold",
  width: "250px",
  height: 55,
  borderRadius: "30px",
  backgroundColor: variables.Focus_Green,
  color: "#fff",

  "&:disabled": {
    backgroundColor: variables.Darkgrey,
    color: variables.Lightgrey,
  },
  "&:hover": {
    backgroundColor: variables.Hover_Green,
    color: "#fff",
  },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light" ? variables.Hover_Green : "#308fe8",
  },
}));

export { Root, TestCard, TestFinishedBtn, BorderLinearProgress };
