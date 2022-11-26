const employees = []
function Employee(name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    employees.push(this)
    this.printEmployeeForm = function() {
        console.log(this)
}}

var ray = new Employee("Ray", "painter", "18/hr")
var jorge = new Employee("Jorge", "assistant", "24/hr")
var gerardo = new Employee("Gerardo", "manager", "35/hr")

ray.printEmployeeForm()
jorge.printEmployeeForm()
gerardo.printEmployeeForm()