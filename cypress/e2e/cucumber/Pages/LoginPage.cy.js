class LoginPage{
    enterURL() {
        return cy.visit("https://demo.guru99.com/test/newtours/index.php");
    }
    enterUsername(username){
        return cy.get('input[name="userName"]').type(username);
    }
    enterPassword(password){
        return cy.get('input[name="password"]').type(password);
    }
    clickSubmitButton(){
        return cy.get('input[type="submit"]').click();
    }
    verifyLoginSuccessful(){
        cy.get("h3").should("contain", "Login Successfully");
        cy.url().should('contain', 'login_sucess');
        return this;
    }
}

module.exports = new LoginPage();