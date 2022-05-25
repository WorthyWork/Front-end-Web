import React,{ useState,useEffect} from "react";
import { styled } from '@mui/material/styles';
import axios from 'axios';
import ItemCard from "./components/ItemCard";
import {Pagination,Grid } from "@mui/material";
import Footer from "../../container/footer";


const Root = styled('div')({
  flexGrow: 1,
  minHeight: "87vh",
  height: "auto",
  marginTop: "2rem",
  // minHeight: "87vh",
  // flexGrow: 1,
  // margin: "auto",
  // height: "auto"
});

export default function Home() {
  const [jobDataList,setJobDataList]= useState([])
  const [page, setPage] = useState(1);
  const [startCount,setStartCount] = useState(0)
  const [endCount,setEndCount] = useState(9)
  const [firstPick,setFirstPick] = useState('')
  const [secondPick,setSecondPick] = useState('')
  const [pickCount,setPickCount] = useState(0)

  const scrollToAnchor = (anchorname) => {
    if (anchorname) {
      const anchorElement = document.getElementById(anchorname);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth", block: "start", inline: 'start' });
      }
    }
  };

  const handleChange = (event, value) => {
    scrollToAnchor("top");
    setPage(value);
    setStartCount(value*10-10)
    setEndCount(value*10-1)

  };

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('http://localhost:5000/job/list');
        setJobDataList(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);


  const ItemList = (start,end) => {
    const row = [];
    for (var i = start; i <= end ; i++) {
      row.push(
        <ItemCard key={i+""} i={i} jobDataList={jobDataList} firstPick={firstPick} setFirstPick={setFirstPick}
         secondPick={secondPick} setSecondPick={setSecondPick} 
         pickCount={pickCount} setPickCount={setPickCount}
         />
      );      
    }
    return row
  };

  return (

<Root id='top' >
{ ItemList(startCount,endCount) }
  <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>
  <Pagination sx={{pt:"2rem"}}  shape="rounded" size="large" count={jobDataList? jobDataList.length/10:10} page={page} onChange={handleChange} />
  </Grid>
<Footer />
</Root>


  
  )
}