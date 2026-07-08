Feature: Register with valid Details
              Description: Register with valid Details

        Background:
            Given the user is on the Demo Webshop home page
              And the user clicks register link on the home page

        Scenario Outline: Register with valid login details
              And the user enters the first name "<firstname>"
              And the user enters the last name "<lastname>"
              And the user enters the email "<email>"
              And the user enters the password "<password>"
              And the user enters the confirm password "<confirmpassword>"
              And the user clicks the register button
             Then the registration result should be "<result>"

        Examples:
                  | firstname | lastname | email               | password    | confirmpassword | result                             |
                  | Pr        | Ve       | prnna56@gmail.com   | Password123 | Password123     | Your registration completed        |
                  | John      | Doe      | invalid09@gmail.com | Admin123    | Admin123        | The specified email already exists |
