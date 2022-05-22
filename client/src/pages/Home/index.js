import React,{ useState,useEffect} from "react";
import { styled } from '@mui/material/styles';
import axios from 'axios';
import ItemCard from "./components/ItemCard";


const Root = styled('div')({
  flexGrow: 1,
  margin: "auto",
  height: "87vh",
  marginTop: "2rem"
});

export default function Home() {
  const [jobDataList,setJobDataList]= useState([])

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


  const ItemList = (number) => {
    const row = [];
    for (var i = 0; i < number ; i++) {
      row.push(
        <ItemCard key={i+""} i={i} jobDataList={jobDataList} />
      );      
    }
    return row
  };

  return (
    <Root>
      { ItemList(10)}
    </Root>
  )
}