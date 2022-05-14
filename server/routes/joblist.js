const express = require('express')
const router = express.Router()
const axios = require("axios");

router.get("/list", async (req, res, next) => {
    try {
        const response  = await axios.get("https://quality.data.gov.tw/dq_download_json.php?nid=44062&md5_url=a6aae2308db15175f343ffa4fe93eeab");
        // console.table(response.data)
        res.send(response.data);
      }
      catch (err) {
          console.log(err)
        next(err)
      }
})

router.get("/category", async (req, res, next) => {
    try {
        const response  = await axios.get("https://quality.data.gov.tw/dq_download_json.php?nid=30932&md5_url=b1f63b741a4282164333c8edd6e2ee6c");
        // console.table(response.data)
        res.send(response.data);
      }
      catch (err) {
          console.log(err)
        next(err)
      }
})


module.exports = router