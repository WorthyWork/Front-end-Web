import React from 'react'
import No_Data from '../../../../assets/No_Data.svg'

import ENFJ from '../../../../assets/ENFJ.svg'
import ENFP from '../../../../assets/ENFP.svg'
import ENTJ from '../../../../assets/ENTJ.svg'
import ENTP from '../../../../assets/ENTP.svg'

import ESFJ from '../../../../assets/ESFJ.svg'
import ESFP from '../../../../assets/ESFP.svg'
import ESTJ from '../../../../assets/ESTJ.svg'
import ESTP from '../../../../assets/ESTP.svg'

import INFJ from '../../../../assets/INFJ.svg'
import INFP from '../../../../assets/INFP.svg'
import INTJ from '../../../../assets/INTJ.svg'
import INTP from '../../../../assets/INTP.svg'

import ISFJ from '../../../../assets/ISFJ.svg'
import ISFP from '../../../../assets/ISFP.svg'
import ISTJ from '../../../../assets/ISTJ.svg'
import ISTP from '../../../../assets/ISTP.svg'


import Owl from '../../../../assets/Owl.svg'
import Tiger from '../../../../assets/Tiger.svg'
import KoalaBear from '../../../../assets/KoalaBear.svg'
import Peacock from '../../../../assets/Peacock.svg'
import Chameleon from '../../../../assets/Chameleon.svg'

import {Typography,Paper} from "@mui/material";
import variables from '../../../../styles/variables';
import { useHistory} from 'react-router-dom';
import { TestButton,NoDataPaper,DataResultPaper } from './StyleComponents';




export default function UserTestResult(props) {
  const resultData = props.resultData
  let history = useHistory();
  const handelTestPage=()=>{
    history.push("/personalitytest");
  }
  const noResultData =()=>{
    return(
      <>
      <Typography variant="h5" gutterBottom component="div" sx={{color:variables.Focus_Green,fontWeight:'bold'}}>個人指標</Typography>
      <NoDataPaper  elevation={0} sx={{ backgroundImage: `url(${No_Data})` ,mb:"3rem"}}>
      <TestButton  onClick={handelTestPage} variant="outlined" sx={{mb:"22px"}} >
        前往測驗
      </TestButton>
      </NoDataPaper>
      </>
  
    )
  
  }
  return (
  <>
  {resultData?<Typography>有資料</Typography>:<>{ noResultData() }</>  }
  <Paper sx={{ width: "auto",height: "auto",display:"flex",justifyContent:"center"}}>
 <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ENFJ})`}}></DataResultPaper>
 <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ENFP})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ENTJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ENTP})`}}></DataResultPaper>

  </Paper>
  <Paper sx={{ width: "auto",height: "auto",display:"flex",justifyContent:"center"}}>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ESFJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ESFP})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ESTJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ESTP})`}}></DataResultPaper>

  </Paper>
  <Paper sx={{ width: "auto",height: "auto",display:"flex",justifyContent:"center"}}>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${INFJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${INFP})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${INTJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${INTP})`}}></DataResultPaper>
    </Paper>
    <Paper sx={{ width: "auto",height: "auto",display:"flex",justifyContent:"center"}}>
    <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ISFJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ISFP})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ISTJ})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${ISTP})`}}></DataResultPaper>
    </Paper>
    <Paper sx={{ width: "auto",height: "auto",display:"flex",justifyContent:"center"}}>
    <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${Tiger})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${Peacock})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${KoalaBear})`}}></DataResultPaper>
  <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${Owl})`}}></DataResultPaper>
    <DataResultPaper  elevation={0} sx={{ backgroundImage: `url(${Chameleon})`}}></DataResultPaper>
    </Paper>

 </>
  
  )
}
