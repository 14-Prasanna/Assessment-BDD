Feature: Login to the demowebshop website
              As a user I need to login to the demo web shop website

        Scenario Outline: As a user I want to login to the site with credentials
            Given user is on the login page of the demowebshop website
              And user enters the credentials "<type>"
             When user clicks on the login button
             Then user should see the corresponding messages

        Examples:
                  | type            |
                  | valid           |
                  | invalidPassword |
                  | invalidEmail    |
                  | invalid         |
