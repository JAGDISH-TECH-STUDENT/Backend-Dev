const express = require("express");
const router = express.Router();
const payrollController = require("../controllers/payrollController");

router.get("/:id", payrollController.getPayroll);

module.exports = router;
