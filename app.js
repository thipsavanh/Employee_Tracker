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
                "Exit."
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

                case "Exit.":
                    connection.end();
                    break;
            }
        });
}

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function addDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);2
    inquirer
    .prompt({
        name: "department",
        type: "input",
        message: "What is the name of the new department?"
    })
    .then(function(answer) {
        var query = "INSERT INTO department SET ?";
        connection.query(query, { department: answer.department }, function(err, res) {
            if (err) throw err;
            console.table(res);
            start();
        })
    })
})
}

function addRole() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    inquirer
    .prompt([
        {
            name: "choice",
            type: "rawlist",
            choices: function () {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].id);
                }
                return choiceArray;
            },
            message: "What is the department id of new role?"
        },
        {
            name: "title",
            type: "input",
            message: "What is the name of the new role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?"
        }
    ])
    .then(function(answer) {
        var query = "INSERT INTO role SET ?";
        connection.query(query, 
            { department_id: answer.choice, 
              title: answer.title, 
              salary: answer.salary,
            },
            function(err, res) {
                if (err) throw err; 
                console.table(res);
                start();
            })
    })
    })
}

function addEmployee() {
    var query = "SELECT * FROM employee RIGHT JOIN role ON employee.role_id";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    inquirer
    .prompt([
        {
            name: "choice",
            type: "rawlist",
            choices: function () {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].id);
                }
                return choiceArray;
            },
            message: "What is the role id of the new employee?"
        },
        {
            name: "firstname",
            type: "input",
            message: "What is the first name of the new employee?"
        },
        {
            name: "lastname",
            type: "input",
            message: "What is the last name of the new employee?"
        },
        {
            name: "manager",
            type: "input",
            message: "What is the manager id for the new employee?"
        }
    ])
    .then(function(answer) {
        var query = "INSERT INTO employee SET ?";
        connection.query(query, 
            { role_id: answer.choice, 
              first_name: answer.firstname, 
              last_name: answer.lastname,
              manager_id: answer.manager || 0,
            },
            function(err, res) {
                if (err) throw err; 
                console.table(res);
                start();
            })
    })
    })
}

function updateEmployee() {
    var query = "SELECT * FROM employee RIGHT JOIN role ON employee.role_id";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    inquirer
    .prompt([
        {
            name: "id",
            type: "input",
            choices: function () {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].id);
                }
                return choiceArray;
            },
            message: "What is the role id of the employee being updated?"
        },
        {
            name: "id",
            type: "rawlist",
            choices: function () {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].id);
                }
                return choiceArray;
            },
            message: "What is the new role id of the employee?"
        },
        {
            name: "manager",
            type: "rawlist",
            choices: function () {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].id);
                }
                return choiceArray;
            },
            message: "What is the new manager id for the employee?"
        }
    ])
    .then(function(answer) {
        var query = "INSERT INTO employee SET ?";
        connection.query(query, 
            { role_id: answer.id, 
              manager_id: answer.manager || 0,
            },
            function(err, res) {
                if (err) throw err; 
                console.table(res);
                start();
            })
    })
    })
}
