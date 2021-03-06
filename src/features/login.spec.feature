Feature: Login To Akaunting

    As a User of Akaunting software
    I want to be able to login to portal

    Scenario: Login with valid credential
        When I go to Akaunting login page
        And I login with valid the username "admin@example.com" and password "password"
        Then I can login successfully

    Scenario: Login with invalid password
        When I go to Akaunting login page
        And I login with valid the username "admin@example.com" and password "gogon"
        Then I will see error message "These credentials do not match our records."