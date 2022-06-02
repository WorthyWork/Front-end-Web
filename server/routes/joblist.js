const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const { json } = require("express");
const https = require("https");

router.get("/list", async (req, res, next) => {
  // #swagger.tags = ['Job']
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  try {
    const response = await axios.get(
      "https://apiservice.mol.gov.tw/OdService/download/A17000000J-030144-nkP", { httpsAgent: agent }
    );
    const result = response.data.filter((r) => {
      var stopdate = r.STOP_DATE;
      var year = stopdate.substring(0, 4);
      var month = stopdate.substring(4, 6);
      var day = stopdate.substring(6, 8);
      var date = new Date(year, month - 1, day);
      return date > new Date() || stopdate === "額滿為止";
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/category", async (req, res, next) => {
  // #swagger.tags = ['Job']
  try {
    const response = await axios.get(
      "https://quality.data.gov.tw/dq_download_json.php?nid=30932&md5_url=b1f63b741a4282164333c8edd6e2ee6c"
    );
    // console.table(response.data)
    res.send(response.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/salary", async (req, res, next) => {
  // #swagger.tags = ['Job']
  try {
    // const EMPLOYER_ID = req.query.EMPLOYER_ID;
    // const HIRE_ID = req.query.HIRE_ID;
    const url = req.query.url;
    // const response  = await axios.get(`https://job.taiwanjobs.gov.tw/Internet/jobwanted/JobDetail.aspx?EMPLOYER_ID=${EMPLOYER_ID}&HIRE_ID=${HIRE_ID}`);
    const response = await axios.get(url);
    const $ = await cheerio.load(response.data);
    var salary = $('li:contains("工作待遇：")')
      .text()
      .replace("工作待遇：", "")
      .replace(/\r\n|\n/g, "");
    salary === "" ? "無資料" : salary;
    res.send(salary);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
