package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.selenium.iHub.pages.AssignmentTasksDraftFieldsPage;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AssignmentTasksDraftFieldsSteps {

    AssignmentTasksDraftFieldsPage dp;

    public AssignmentTasksDraftFieldsSteps(){dp = new AssignmentTasksDraftFieldsPage(); }

    @And("^Select purpose- assignment media plan$")
    public void selectPurposeAssignmentMediaPlan() {
        dp.selectPurposeAssignmentMediaPlan();
    }

    @And("^Select time slot- assignment media plan$")
    public void selectTimeSlotAssignmentMediaPlan(){
        dp.selectTimeSlotAssignmentMediaPlan();
    }
}
