USE employeeTrackerDB;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 30.25, 1), ("Lead Engineer", 60.50, 2), ("Accountant", 50.75, 3), ("Lawyer", 70.45, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Professor", "Plum", 1), ("Mr", "Green", 2), ("Mrs", "Peacock", 3), ("Miss", "Scarlett", 4);