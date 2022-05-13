import { styled } from '@mui/material/styles';
import { Button,  DialogTitle} from "@mui/material";
import variables from '../styles/variables'

// ========================Button========================
const AddButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: "normal",
  paddingRight: "10px",
  width: "100px",
  height: 40,
  borderRadius:"30px",
  // borderRadius:"4px",
  backgroundColor: variables.Darkblue,
  color: "#fff",
  "&:disabled": {
    backgroundColor: variables.Lightgrey,
    color:variables.Darkgrey
  },
  '&:hover': {
    backgroundColor: variables.Darkblue,
    boxShadow: 'none',
  },
});

const ImportButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: "bold",
  paddingRight: "10px",
  margin: "0px 0px 20px 0px",
  width: "100px",
  height: 40,
  borderRadius:"30px",
  backgroundColor: variables.darker_turq,
  color: "#fff",
  '&:hover': {
    backgroundColor: variables.turq,
    boxShadow: 'none',
  },
});

// ========================DialogTitle========================
const StyleTitle = styled(DialogTitle)({
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
});
// ========================DialogButton========================
const CancelButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: "bold",
  padding: '6px 12px',
  margin: "0px 0px 15px 0px",
  width: 100,
  height: 40,
  borderRadius:"30px",
  color: variables.Darkblue,
  borderColor: variables.Lightgrey,
  "&:hover": {
    borderColor: variables.Darkgrey,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});
const ConfirmButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
  margin: "0px 0px 15px 0px",
  width: 100,
  height: 40,
  borderRadius:"30px",
  backgroundColor: variables.download_blue,
  color: "#fff",
  '&:hover': {
    backgroundColor: variables.download_blue,
    boxShadow: 'none',
  },
});


export {
  AddButton,ImportButton, StyleTitle, CancelButton, ConfirmButton,

}