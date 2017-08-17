## Problem Statement
Herein we explore the benefits of software development combining Behavior-Driven Development (BDD) and Test-Driven Development (TDD) where no code is written unless first coerced by a test (or written behavior).

We apply these concepts to a real-world challenge that many enterprises encounter -- the need to extend the life of critical business applications by exposing it over a network for access by services, mobile devices and browsers. We will create a ReSTful API wrapper for the payroll application and the required modifications of the payroll application; where all coding for this project will be performed in a manner where no code is written unless first coerced by a test. 
 
## A First Look at Using BDD and TDD 
[Using BDD and TDD, Explained!](https://www.youtube.com/watch?v=I0EUOpK28VA)
 
## Existing Application (hypothetical)
The existing application is based on Bob Martin's Payroll Case Study, as detailed in Agile Software Development - Principles, Patterns and Practices. We have taken liberty to reimagine the Bob Martin case study as follows:

1. it is a java application
1. business logic library was written in 2004 to support a fat client desktop application.
1. payroll records are formatted as XML
1. there were no unit tests in the 2004 application
1. tests were 100% manual
1. in 2008, the business logic code was extracted and used to power a Spring MVC web app
1. the Spring MVC rewrite has about 15% unit test coverage; unit tests were written after code and are viewed as not beneficial (ie getters and setters)

## Requirements for the Web App
We will create a ReSTful API wrapper for an existing payroll application. And we will make the required modifications to the payroll application. 

The web app enables easy access to the followiing: add employees, timesheets, pay slips, vacation time, sick time and other important information anytime, anywhere and from any authenticated device in the network. Additionally, it should include these features:

1. developed using BDD and TDD
1. RESTful API
1. user authentication
1. role based authorization
1. real time data entry
1. data validation
1. audit logging
1. enter timesheets
1. view status of vacation time, sick time
1. historical view of timesheets and payslips


## Features for Release 2
1. parameter driven deductions
1. interface to transmit payroll data to Quickbooks Pro
1. full legislative compliance
1. multi-company and location support
1. multi pay group and pay cycle

## History of the Payroll System
![circa 2004](https://github.com/Bill-A/Correctness-DrivenDevelopment/blob/master/public/assets/images/Payroll_mPayroll_2004.png)
![circa 2008](https://github.com/Bill-A/Correctness-DrivenDevelopment/blob/master/public/assets/images/Payroll_mPayroll_2008.png)
![circa 2017](https://github.com/Bill-A/Correctness-DrivenDevelopment/blob/master/public/assets/images/Payroll_to_mPayroll_2017_V4.png)


## Getting started
Visit our quick-start guide for setting, using and contributing to mpayroll.

More: [Setup for mPayroll](https://github.com/Bill-A/Correctness-DrivenDevelopment/wiki/3:---Setup-for-mPayroll)
