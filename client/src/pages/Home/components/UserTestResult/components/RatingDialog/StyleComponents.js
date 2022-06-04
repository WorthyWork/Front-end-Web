import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import variables from "../../../../../../styles/variables";

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

export { FinishBtn, CancelBtn };
