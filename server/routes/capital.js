const express = require('express')
const router = express.Router()
const axios = require("axios");

router.get("/:companyName", async (req, res, next) => {
  // #swagger.tags = ['Company']
  try {
    let uri = `https://data.gcis.nat.gov.tw/od/data/api/6BBA2268-1367-4B42-9CCA-BC17499EBE8C?$format=json&$filter=Company_Name like ${req.params.companyName} and Company_Status eq 01&$skip=0&$top=1`
    const response = await axios.get(encodeURI(uri))
    res.send(response.data);
  } catch (err) {
    console.log(err)
    next(err)
  }
})
module.exports = router