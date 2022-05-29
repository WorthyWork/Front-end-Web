import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import Background from "../assets/background.svg";
import variables from '../styles/variables';

/* ============================Footer============================ */

const CopyrightBox = styled(Box)({
    height: "50px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "5%",
});
const TextBox = styled(Box)({
    fontSize: 10,
    lineHeight: 2,
    color: 'text.secondary',
    textTransform: "uppercase",
    letterSpacing: "0.08333em",
    fontWeight: "400"
});

/* ============================index============================ */

const Root = styled('div')({
    flexGrow: 1,
    // maxHeight: "100vh",
    overflowY: "hidden",
});
const Transition = styled(Box)` ${({ theme }) => `
    transition: ${theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
})
    };`}
  `;
  const MainBox = styled(Box)({
    display:"flex",
    justifyContent:"center",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: "20px",
    // height: "calc(100vh)",
    // height: "calc(100vh-10px)",
    overflowX: 'hidden',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: variables.Lightgrey,
      borderRadius: 20,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: variables.Darkgrey,
      borderRadius: 20,
    },
  });


export {
    CopyrightBox, TextBox,
    MainBox, Transition, Root
}