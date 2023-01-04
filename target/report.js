$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/mobilesearch/search.feature");
formatter.feature({
  "name": "User Authentication",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the user enter in gmailsigin page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs the correct email address onedim list",
  "rows": [
    {
      "cells": [
        "rupamathiekambaram",
        "1234576",
        "rupayuva"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_inputs_the_correct_email_address_onedim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs the correct password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_inputs_the_correct_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.theUserClicksTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be authenticated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.theUserShouldBeAuthenticated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be presented with a success message",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.theUserShouldBePresentedWithASuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "I am user of facebooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am in facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter unvalid username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the unvalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should not be redirected to the home page of facebook",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "rupamathi",
        "",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I am user of facebooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter unvalid username as \"rupamathi\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.i_enter_unvalid_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the unvalid password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iEnterTheUnvalidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not be redirected to the home page of facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_should_not_be_redirected_to_the_home_page_of_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});