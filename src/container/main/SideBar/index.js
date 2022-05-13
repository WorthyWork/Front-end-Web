import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { SidebarData } from "./SideBarData";
import { List, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Root, LogoDetail, LogoName, ListButton, SideBarList } from "./StyleComponents";
import variables from "../../../styles/variables";
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';


export default function SideBar() {
  let history = useHistory();
  let location = useLocation();
  let nowPath = location.pathname;
  const [active, setActive] = useState(false)
  const activateNav = () => {
    setActive(!active)
  }
  const handleChangePage = (text, index) => {
    history.push(text.path);
  };

  return (
    <Root sx={{ width: active ? "250px" : "78px" }} >
      <LogoDetail >
        <LogoName sx={{ opacity: active ? 100 : 0 }}>WorthyWork</LogoName>
        <ListButton sx={{ left: active ? "83%" : "14%" }} onClick={activateNav} >
          <DehazeRoundedIcon />
        </ListButton>
      </LogoDetail>

      <Box
        sx={{ mt: "20px", height: "100%" }}
        role="presentation"
      >
        <List>
          {SidebarData.map((item, index) => (
            <SideBarList
              button
              sx={{ backgroundColor: nowPath === "/" + item.path ? variables.Focus_Green : null }}
              key={index}
              onClick={() => handleChangePage(item, index)}
            >
              <ListItemIcon sx={{ color: variables.White }}>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: variables.White, opacity: active ? 100 : 0, pointerEvents: "auto", transition: "all 0.5s ease", }} primary={item.title} />
              {/* <ToolTips>{item.title}</ToolTips> */}
            </SideBarList>
          ))}
        </List>
      </Box>
    </Root >
  )

}