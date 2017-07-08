> Have you heard of Correctness-Driven Development?

Perhaps not, but no worries. It is a term recently coined by myself and a fellow engineer as a concept that removes much of the misunderstanding associated with Behavior-Driven Development (BDD) and Test-Driven Development (TDD). The goal of both practices is really quite simple, define correctness before writing code.

> **True story**: _A few years back I’m chatting with a Dev Manager whose team I had previously coached. Naturally, this conversation occurred at a water cooler, coffee station, soda machine – take your pick. I asked, “how’s the project progressing?” He replied, “challenging … we’re way behind schedule”. I asked, “so what are you going to do about it?” He says, “I’m going to cut back on testing …” I waited for him to laugh and say he was joking. The look in his eyes indicated that he was dead serious._

The web app, Correctness-DrivenDevelopment.com, is comprised of an informational web site, instructional videos and a software repo filled with tests and code. Collectively, these assets are used to provide Technical Coaching to teams on the what and how of Behavior-Driven Development (BDD) and Test-Driven Development (TDD). In our workshops and trainings, teams will come to understand that TDD is **not** a developer testing and that BDD is **not** the business writing tests. Instead TDD it is a developer designing.  And BDD engages the business to drive design based upon business’ vision of the system’s behaviors. Along the way we may even explore the connection that TDD/BDD has to Acceptance Test-Driven Development (ATDD).  

As a project we will use BDD and TDD as a connected cycle to expose an existing batch payroll application to the network, for access by applications, browsers and mobile devices. This project is real-world; exposing legacy applications to the network is a typical challenge that many enterprises encounter when needing to extending the life of critical business applications. We will create a ReSTful API wrapper for the payroll application and the required modifications of the payroll application; where all coding for this project will be performed in a manner where no code is written unless first coerced by a test. 

Naturally one might ask why perform BDD or even TDD. Isn’t unit testing and manual testing sufficient?

> **Another true story**: _I recently conducted a series of full day TDD workshop for an enterprise with numerous legacy Java applications that contained some tests, written after the code was developed._


