import { styled } from '@mui/material/styles';
import { Button,IconButton} from "@mui/material";
import variables from '../../../../styles/variables';


// ============= index.js =============


const CompareFooterBtn = styled(IconButton)({
  width: "90px",
  height: '90px',
  backgroundColor:variables.Focus_Green,
  top: '-30px',
  right: 0,
  position: 'absolute',
  borderRadius: '50%',


  '&:hover': {
    backgroundColor: variables.Focus_Green,
  },
});
const StartCompareButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "1rem",
  fontWeight: "bold",
  width: "120px",
  height: 40,
  borderRadius:"30px",
  backgroundColor: '#fff',
  borderColor:'#fff',
  color: variables.Green,

  "&:disabled": {
    backgroundColor: variables.Darkgrey,
    color:variables.Lightgrey
  },
  '&:hover': {
    backgroundColor: "#fff",
    color:variables.Green,
  },
});


export {
  StartCompareButton,CompareFooterBtn
}