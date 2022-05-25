import React from 'react'
import { Avatar, Box, Grid} from "@mui/material";
import Typography from '@mui/material/Typography';
import variables from '../../../styles/variables';
import { StyledPaper } from '../StyleComponents';

export default function JobTitleCard(props) {
 const  titleData = props.titleData
  
  return (
    <Box sx={{ overflow: 'hidden', px: 3 }}>
    <StyledPaper
      sx={{
        my: 1,
      }}
    >
      <Grid container wrap="nowrap" spacing={2} alignItems="center" pt={"0.7rem"}  >
        <Grid  pl={"1rem"}  >
          <Avatar  sx={{fontWeight:600,bgcolor:variables.Hover_Green}}>{titleData.company.slice(0,1)}</Avatar>
        </Grid>
        <Grid  zeroMinWidth pl={"1rem"} sx={{ '&.MuiGrid-item': { paddingLeft:"1rem",paddingTop:0} }}
        >
          <Typography noWrap sx={{fontSize:"1.2rem",fontWeight:600}}>{titleData.positionName}</Typography>
          <Typography noWrap sx={{fontSize:"0.9rem",color:variables.Green,fontWeight:600}}>{titleData.company}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
    </Box>
  )
}
