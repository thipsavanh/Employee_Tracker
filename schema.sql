DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE database employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,4) NOT NULL, 
  department_id INT default 0,
  PRIMARY KEY (id), 
  FOREIGN KEY (department_id)
  REFERENCES department(id) ON DELETE CASCADE
  );

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  role_id INT,
  manager_id INT default 0,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES role(id) ON DELETE CASCADE
);
