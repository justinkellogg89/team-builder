// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports = class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Manager";
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getOfficeNumber() {
    return this.officenumber;
  }
};
