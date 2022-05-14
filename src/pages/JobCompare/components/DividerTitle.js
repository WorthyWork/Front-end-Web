import React from 'react'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';


export default function DividerTitle(props) {
  const titleData= props.titleData

  return (
    <Divider sx={{paddingLeft:"5rem",paddingTop:"2rem",paddingBottom:"2rem"}}> 
    <Typography fontSize={"1.5rem"} sx={{ fontWeight:600 }} > {titleData} </Typography>
    </Divider>
  )
}
