const { employees } = require("../data/data");
exports.createEmployee = async (req, res, next) => {
  try {
    const { name, email, department, basicSalary, joiningDate } = req.body;
    const id = employees.length + 1;
    if(!name || !email || !department || !basicSalary || !joiningDate) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const newEmployee = { id, name, email, department, basicSalary, joiningDate };
    employees.push(newEmployee);
    res.status(201).json({ success: true, data: newEmployee });
  } catch (err) {
    next(err);
  }
};

// Read All
exports.getEmployees = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: employees });
  } catch (err) {
    next(err);
  }
};

// Read One
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employee = employees.find(emp => emp.id == req.params.id);
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });
    res.status(200).json({ success: true, data: employee });
  } catch (err) {
    next(err);
  }
};

// Update 
exports.updateEmployee = async (req, res, next) => {
  try {
    const index = employees.findIndex(emp => emp.id == req.params.id);
    if (index === -1) return res.status(404).json({ success: false, message: "Employee not found" });

    employees[index] = { ...employees[index], ...req.body };
    res.status(200).json({ success: true, data: employees[index] });
  } catch (err) {
    next(err);
  }
};

// Delete
exports.deleteEmployee = async (req, res, next) => {
  try {
    const index = employees.findIndex(emp => emp.id == req.params.id);
    if (index === -1) return res.status(404).json({ success: false, message: "Employee not found" });

    employees.splice(index, 1);
    res.status(200).json({ success: true, message: "Employee deleted" });
  } catch (err) {
    next(err);
  }
};
