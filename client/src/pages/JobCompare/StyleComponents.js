import { styled } from '@mui/material/styles';
import { Paper,Button} from "@mui/material";
import variables from '../../styles/variables';


// ============= index.js =============

const Root = styled('div')({
  minHeight: "75vh",
  flexGrow: 1,
  margin: "auto",
  height: "auto"
});

// ============= JobTitleCard.js =============
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    minWidth: 350,
},
  maxWidth: 400,
  color: theme.palette.text.primary,
  paddingRight:"3rem",
}));


const CheckIllegalBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "0.9rem",
  fontWeight: "normal",
  width: "145px",
  height: 33,
  borderRadius:"30px",
  borderColor:variables.Focus_Green,
  backgroundColor: 'transparent',
  color: variables.Focus_Green,
  '&:hover': {
    borderColor:variables.Focus_Green,
    backgroundColor: 'transparent',
    color: variables.Focus_Green,
  },
});



export {
  Root,StyledPaper,CheckIllegalBtn
}