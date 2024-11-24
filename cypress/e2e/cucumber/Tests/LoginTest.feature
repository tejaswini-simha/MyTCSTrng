Feature: I want to login into the site with valid data
Background: Navigate to the website
Given I navigate to the website
Scenario: Login as user with valid password
When I enter valid credentials
    | username | valid_password|
    | admin    | admin|
And user clicks on login button
Then validate the header of the page after login to be
    |login_page_header|
    |Login Successfully|