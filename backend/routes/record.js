// routes/products.js
const express = require('express');
const router = express.Router();
const {
    getAllRecords,
    getRecord,
    createRecord,
    updateRecord,
    deleteRecord
  } = require("../controller/record");


router.get("/get-all-record", getAllRecords);
router.get("/:id", getRecord);
router.post("/record/add", createRecord);
router.post("/update/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;