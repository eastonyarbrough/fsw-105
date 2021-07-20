//Array of employees to fill.
let employees = [];

//Constructor for employees.
function employee(name, jobTitle, salary, status)
{
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    employee.prototype.printEmployeeForm = function()
    {
        console.log("Employee: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary + " Status: " + this.status);
        employees.push(this.name, this.jobTitle, this.salary, this.status);
    }
    employee.prototype.printEmployeeFormPT = function()
    {
        console.log("Employee: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary + " Status: " + (this.status = "Part Time"));
        employees.push(this.name, this.jobTitle, this.salary, this.status);
        console.log(employees);
    }
}

//Defining variables for the employees.
let emp1 = new employee("Bob", "Web Developer", 70000, "Full Time");
let emp2 = new employee("Janet", "Designer", 60000, "Full Time");
let emp3 = new employee("David", "Janitor", 35000, "Part Time");

//Calling constructor with employee information
emp1.printEmployeeForm();
emp2.printEmployeeForm();
emp3.printEmployeeFormPT();
