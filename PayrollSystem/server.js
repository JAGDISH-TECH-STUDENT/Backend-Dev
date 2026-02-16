const express = require("express");
const logger = require("./middleware/logger");

const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");

const app = express();
app.use(express.json());
app.use(logger);


app.use("/api/employees", employeeRoutes);
app.use("/api/payroll", payrollRoutes);



app.listen(3000, () => console.log("Server running on port 3000"));
