import React from 'react'
import { Box,  Grid,Card } from "@mui/material";
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import variables from '../../../styles/variables';

export default function OthersCard(props) {
  const data = props.data

  return (

      <Grid item xs={5}   >
       <Card  sx={{  height:"auto" }}  >
        {data.map((row,index) => (
       <div key={row.title}>
        {index===0 ? null:<Divider sx={{borderBottomWidth:"2px"}}variant="middle" /> }
        <Box  p={"1rem"} textAlign="center" >
         <Typography  fontSize={"1.2rem"} sx={{ color: variables.Hover_Green,fontWeight:600 }}  >
          {row.title}
         </Typography>
         <Typography fontSize={"0.8rem"} sx={{ color: variables.Darkgrey}}>
           {row.additionInfo}
         </Typography>
         <Typography fontSize={"1.2rem"} >
           {row.value}
         </Typography>
         </Box>
       </div>
        )
      )
    }
     </Card>
  </Grid>

    
  )
}
