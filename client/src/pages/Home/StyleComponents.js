import { styled } from '@mui/material/styles';
import { Button} from "@mui/material";
import variables from '../../styles/variables';


// ============= index.js =============
const ApplyButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "0.9rem",
  fontWeight: "normal",
  width: "100px",
  height: 40,
  borderRadius:"30px",
  // borderRadius:"4px",
  backgroundColor: variables.Focus_Green,
  color: "#fff",
  "&:disabled": {
    backgroundColor: variables.Lightgrey,
    color:variables.Darkgrey
  },
  '&:hover': {
    backgroundColor: variables.Hover_Green,
    boxShadow: 'none',
  },
});


export {
  ApplyButton
}