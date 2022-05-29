const express = require('express')
const router = express.Router()
const axios = require("axios");

router.get("/all", async (req, res, next) => {
  try {
    const response = await axios.get("https://quality.data.gov.tw/dq_download_json.php?nid=109896&md5_url=0c6e622115227edf5520c84558b32d7d")
    let json = response.data
    res.send(json)
  } catch (err) {
    console.log(err)
    next(err)
  }
})
router.get("/:companyName", async (req, res, next) => {
  try {
    const response = await axios.get("https://quality.data.gov.tw/dq_download_json.php?nid=109896&md5_url=0c6e622115227edf5520c84558b32d7d")
    let json = response.data
    let result = json.filter(el => el.事業單位名稱或負責人.includes(req.params.companyName))
    res.send(result)
  } catch (err) {
    console.log(err)
    next(err)
  }
})
module.exports = router