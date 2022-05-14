import { styled } from '@mui/material/styles';
import { Paper} from "@mui/material";


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



export {
  Root,StyledPaper
}