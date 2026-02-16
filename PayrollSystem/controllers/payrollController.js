const { calculateSalary } = require("../utils/salaryCalculation");
const { employees } = require("../data/data");

exports.getPayroll = async (req, res, next) => {
  try {
    const employee = employees.find(emp => emp.id == req.params.id);
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });

    const salaryDetails = calculateSalary(employee.basicSalary);
    res.status(200).json({ success: true, employee: employee.name, salaryDetails });
  } catch (err) {
    next(err);
  }
};
