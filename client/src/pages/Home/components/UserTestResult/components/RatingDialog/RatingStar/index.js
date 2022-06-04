import React, { useState } from "react";
import { Rating, Typography } from "@mui/material";

export default function RatingStar(props) {
  const item = props.item;
  const index = props.index;
  const jobCategory = props.jobCategory;
  const setJobCategory = props.setJobCategory;
  const [ratingValue, setRatingValue] = useState(item.rate); //顯示用

  const changeRate = (index, value) => {
    var newArr = [...jobCategory];
    newArr[index] = { type: item.type, rate: value };
    setJobCategory(newArr);
  };
  return (
    <>
      <Typography sx={{ paddingRight: "1rem" }}>
        {index + 1}.{item.type}
      </Typography>
      <Rating
        size="large"
        value={ratingValue}
        defaultValue={item.rate}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
          changeRate(index, newValue);
        }}
      />
    </>
  );
}
