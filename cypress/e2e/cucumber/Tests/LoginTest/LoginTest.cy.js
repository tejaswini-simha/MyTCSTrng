/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/LoginPage.cy";

Given("I navigate to the website", () =>{
    login.enterURL();
})

When("I enter valid credentials", (datatable) => {
    datatable.hashes().forEach((element)  => {
        login.enterUsername(element.username);
        login.enterPassword(element.valid_password);
    });
})

And("user clicks on login button", () =>{
    login.clickSubmitButton();
})

Then("validate the header of the page after login to be", (login_page_header) => {
    login.verifyLoginSuccessful(login_page_header);
})