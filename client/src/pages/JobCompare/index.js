import React from "react";
import { Grid,Box} from "@mui/material";
import JobTitleCard from "./components/JobTitleCard";
import OthersCard from "./components/OthersCard";
import DividerTitle from "./components/DividerTitle";
import Footer from "../../container/footer";
import Typography from '@mui/material/Typography';
import variables from "../../styles/variables";
import { Root } from "./StyleComponents";
import Chart from"./components/Chart/index"


export default function JobCompare() {

const dividerData=[
    "公司比較",
    "職缺比較",
    "行業比較"
  ]

  const companyData = [
    {title:'資本額',value:' 5,000,000元'},
    {title:'有無違反勞動法令',value: '1筆' },
]

const vacancyData = [
  {title:'工作待遇',value:' 月薪2,8000以上'},
  {title:'工作性質',additionInfo:'全職 日班' ,value: '0830-1730' },
  {title :'上班地點', value:'台北市南港區經貿二路157巷'},
  {title :'供膳', value:'提供1餐，每餐扣款金額0'},
  {title :'加班', value:'依工作需要'}

]

const companyA = [
  { positionName: "理貨員(包裝作業員)", company:"歐森有限公司(德國好立善 總代理)"  } ,
   companyData ,
   vacancyData 
]

const companyB = [
  { positionName: "成品封箱打包技術員", company:"錞鎰科技股份有限公司" }  ,
   companyData ,
   vacancyData
]

  return (
    <Root>
      <Grid container >
        <Grid item xs={12} display="flex" pl={"5rem"} alignItems="center" justifyContent="center">
          <JobTitleCard titleData={companyA[0]} /> 
            <Typography fontSize={"1rem"} sx={{ color: variables.Hover_Green,fontWeight:600}}>VS</Typography> 
          <JobTitleCard titleData={companyB[0]}/>
        </Grid>
      </Grid>

    <DividerTitle titleData={dividerData[0]}/>
  
    <Grid container spacing={2} pl={"5rem"} justifyContent="center"> 
     <OthersCard data={companyA[1]}/>
     <OthersCard data={companyB[1]}/>
   </Grid>

   <DividerTitle titleData={dividerData[1]}/>

    <Grid container spacing={2} pl={"5rem"} justifyContent="center"> 
       <OthersCard data={companyA[2]}/>
      <OthersCard data={companyA[2]}/>
    </Grid>

    <DividerTitle titleData={dividerData[2]}/>
    
      <Box pl={"5rem"}>
        <Chart/>
      </Box>
      <Footer />
    </Root>
  )
}