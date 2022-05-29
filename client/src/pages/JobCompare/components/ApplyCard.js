import React from 'react'
import { Grid,Paper} from "@mui/material";
import { ApplyButton } from '../../Home/StyleComponents';

export default function ApplyCard(props) {
  const URL = props.URL
  return (
    <Grid item xs={5} justifyContent="center"    >
    <Paper elevation={0} sx={{  height:"auto" , backgroundColor: 'transparent',display:"flex" ,justifyContent:"center"  }}  >
      <ApplyButton sx={{  
        fontSize: "1rem",
        fontWeight: "normal",
        width: "180px",
        height: 50}}
        variant="outlined" href={URL} target="_blank">立即應徵
        </ApplyButton>
        </Paper>
    </Grid>
  )
}
