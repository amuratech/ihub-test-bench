package org.selenium.iHub.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.InputBriefReviewCommonFieldsPage;

public class InputBriefReviewCommonFieldsSteps {

    InputBriefReviewCommonFieldsPage sp;

    public InputBriefReviewCommonFieldsSteps(){sp = new InputBriefReviewCommonFieldsPage();}


    @Then("^Select name$")
    public void selectName(){
        sp.selectName();
    }

    @And("^Select desc$")
    public void selectDesc() {
        sp.selectDesc();
    }

    @And("^Select due date$")
    public void selectDueDate() {
        sp.selectDueDate();
    }

    @And("^Select purpose radio button$")
    public void selectPurposeRadioButton() {
        sp.selectPurposeRadioButton();
    }

    @And("^Select time$")
    public void selectTime() {
        sp.selectTime();
    }
}
