import { styled } from '@mui/material/styles';
import { IconButton, ListItem } from "@mui/material";
import variables from '../../../styles/variables';

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





export {
    Root, LogoDetail, LogoName, ListButton, SideBarList, ToolTips
}