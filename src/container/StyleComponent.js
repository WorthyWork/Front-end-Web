import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import Background from "../assets/background.svg";
import variables from '../styles/variables';

/* ============================Footer============================ */

const CopyrightBox = styled(Box)({
    height: "50px",
    display: "flex",
    justifyContent: "center",
    // paddingTop: "5%",
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
    maxHeight: "100vh",
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

    flexGrow: 1,
    paddingRight: 30,
    paddingLeft: 40,
    // marginTop: "64px",
    paddingBottom: "55px",
    paddingTop: "20px",
    // height: "calc(100vh - 64px - 20px )",
    height: "100vh ",
    overflowY: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100%",
    marginBottom: "-50px",
    backgroundImage: `url(${Background})`,
    "&::-webkit-scrollbar": {
        width: "0.4rem",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: variables.Lightgrey,
        borderRadius: 40,
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: variables.Darkgrey,
        borderRadius: 40,
    },
});

export {
    CopyrightBox, TextBox,
    MainBox, Transition, Root
}