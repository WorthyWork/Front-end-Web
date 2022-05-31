import { styled } from '@mui/material/styles';
import { Button,Paper} from "@mui/material";
import variables from '../../../../styles/variables';


const TestButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "1rem",
  fontWeight: "normal",
  borderRadius:"30px",
  width:'160px',
  height:"40px",
  borderColor:variables.Focus_Green,
  backgroundColor: 'transparent',
  // backgroundColor: variables.Hover_Green,
  color: variables.Hover_Green,
  '&:hover': {
    // backgroundColor: variables.Focus_Green,
    // boxShadow: 'none',
    color:"#fff",
    borderColor:'transparent',
    backgroundColor:variables.Hover_Green ,
  },
});
const NoDataPaper = styled(Paper)(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  alignItems:"end",
  width: "auto",
  height: "17rem",
  overflowY: "auto",
  backgroundColor: "#fff",
  backgroundPosition :'50% 2.5rem',
  backgroundSize: "120px, auto ,contain",
  backgroundRepeat: "no-repeat",
}));

const DataResultPaper = styled(Paper)(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  alignItems:"end",
  width: "12rem",
  height: "20rem",
  overflowY: "auto",
  backgroundColor: "#fff",
  backgroundPosition :'center',
  backgroundSize: "160px, auto ,contain",
  backgroundRepeat: "no-repeat",
}));




export {
  TestButton,NoDataPaper,DataResultPaper
}