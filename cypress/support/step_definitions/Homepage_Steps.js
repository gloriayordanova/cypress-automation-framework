/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page-objects/Base_PO";

//const url = "https://www.webdriveruniversity.com/";

const basePage = new Base_PO();

Before(() => {
    cy.log("Executing commands inside Homepage Steps");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
    //cy.visit(url);
    basePage.navigate("");
    basePage.getPageTitle();
})

When (`I click on the contact us button`, () => {
    //cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.clickAndOpenLink_InSameTab("#contact-us");
})

When (`I click on the login portal button`, () => {
    //cy.get("#login-portal").invoke("removeAttr", "target").click();
    cy.clickAndOpenLink_InSameTab("#login-portal");
})
