Feature: Add a new employee to the mPayroll system

  Scenario: Add a new hourly employee
    Given I have an employee insert resource
    When I submit the employee record
    Then A new hourly employee is Created
