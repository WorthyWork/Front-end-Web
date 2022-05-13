import { styled } from '@mui/material/styles';
import { Box, IconButton, ListItem } from "@mui/material";
// import Background from "../assets/background.jpg";
import variables from '../../../styles/variables';

/* ============================Footer============================ */

const CopyrightBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "5%",
});
const TextBox = styled(Box)({
  fontSize: 5,
  lineHeight: 2,
  color: 'text.secondary',
  textTransform: "uppercase",
  letterSpacing: "0.08333em",
  fontWeight: "400"
});

/* ============================index============================ */

const Root = styled('div')({
  boxSizing: "border-box",
  position: "fixed",
  left: 0,
  top: 0,
  height: "100%",
  background: variables.Green,
  padding: "6px 14px",
  zIndex: 99,
  transition: "all 0.5s ease",

});

const ListButton = styled(IconButton)({
  color: variables.White,
  position: 'absolute',
  top: "16%",
  fontSize: "30px",
  transform: [{ translateX: "-50%" }],
  textAlign: "right",
  cursor: "pointer",
  transition: "all 0.5s ease",
})
const LogoDetail = styled('div')({
  height: "60px",
  display: "flex",
  alignItems: "center",
  position: "relative",
});

const LogoName = styled('div')({
  color: variables.White,
  fontSize: "20px",
  fontWeight: "600",
  transition: "all 0.5s ease"
});

const SideBarList = styled(ListItem)({
  position: "relative",
  height: "50px",
  width: "100%",
  listStyle: "none",
  color: variables.White,
  fontSize: "1.5rem",
  borderRadius: 12,
  paddingLeft: "14px",
  "&:hover": {
    backgroundColor: variables.Hover_Green,
    transition: "all 0.4s ease",
    borderRadius: 12,
  }
});

const ToolTips = styled('span')({
  color: variables.Black,
  position: "absolute",
  top: "-20px",
  left: "calc(100% + 15px)",
  zIndex: 3,
  background: variables.White,
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
  padding: "6px 12px",
  borderRadius: "4px",
  fontSize: "15px",
  fontWeight: 400,
  whiteSpace: "nowrap",
  pointerEvent: 'none',
  transition: '0s',
});

const Transition = styled(Box)`  ${({ theme }) => `
    transition: ${theme.transitions.create("margin", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
})
  };`}
  `;
const MainBox = styled(Box)({
  paddingRight: 30,
  paddingLeft: 30,
  paddingTop: "20px",
  height: "calc(100vh - 64px - 20px)",
  overflowX: 'hidden',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // backgroundImage: `url(${Background})`,
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
  MainBox, Transition, Root, LogoDetail, LogoName, ListButton, SideBarList, ToolTips
}