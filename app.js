var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ChiangMai20!",
    database: "employeeTrackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View departments.",
                "View roles.",
                "View employees.",
                "Add a department.",
                "Add a role.",
                "Add an employee.",
                "Update employee role.",
                "Update employee managers.",
                "View employees by manager.",
                "Delete departments.",
                "Delete roles.",
                "Delete employees.",
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View departments.":
                    viewDepartments();
                    break;

                case "View roles.":
                    viewRoles();
                    break;

                case "View employees.":
                    viewEmployees();
                    break;

                case "Add a department":
                    addDepartment();
                    break;

                case "Add a role.":
                    addRole();
                    break;

                case "Add an employee.":
                    addEmployee();
                    break;

                case "Update employee.":
                    updateEmployee();
                    break;

                case "Update employee manager.":
                    updateEmployeeManager();
                    break;

                case "View employees by manager":
                    employeesByManager();
                    break;

                case "Delete departments.":
                    deleteDepartments();
                    break;

                case "Delete roles.":
                    deleteRoles();
                    break;

                case "Delete employees.":
                    deleteEmployees();
                    break;
            }
        });
}

function viewDepartments(){
    inquirer
    .prompt({

    })
    .then(function(answer) {
        var query = 
        connection.query
    })
}

function viewRoles(){

}

function viewEmployees(){
    
}

function addDepartment(){
    
}

function addRole(){
    
}

function addEmployee(){
    
}

function updateEmployee(){
    
}

function updateEmployeeManager(){
    
}

function employeesByManager(){
    
}

function deleteDepartments(){
    
}

function deleteRoles(){
    
}

function deleteRoles(){
    
}
