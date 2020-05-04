
USE employeeTrackerDB;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 350000.00, 1), ("Lead Engineer", 600000.00, 2), ("Accountant", 500000.00, 3), ("Lawyer", 700000.00, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Professor", "Plum", 1), ("Mr", "Green", 2), ("Mrs", "Peacock", 3), ("Miss", "Scarlett", 4);