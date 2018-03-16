package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.MeetingInputPage;

public class MeetingInputSteps {

    MeetingInputPage dp;

    public MeetingInputSteps(){dp = new MeetingInputPage();}

    @And("^Enter web task type-$")
    public void enterWebTaskType() {
        dp.enterWebTaskType();
    }

    @Then("^Enter Title \"([^\"]*)\"$")
    public void enterTitle(String arg0) {
        dp.enterTitle(arg0);
    }

    @And("^Select Schedule on$")
    public void selectScheduleOn() {
        dp.selectScheduleOn();
    }

    @And("^Enter Agenda \"([^\"]*)\"$")
    public void enterAgenda(String arg0) {
        dp.enterAgenda(arg0);
    }

    @Then("^Click 'Save' button- Meeting$")
    public void clickSaveButtonMeeting() {
        dp.clickSaveButtonMeeting();
    }

    @And("^Select Attendees$")
    public void selectAttendees() {
        dp.selectAttendees();
    }

    @And("^Click 'Schedule this meeting' link$")
    public void clickScheduleThisMeetingLink() {
        dp.clickScheduleThisMeetingLink();
    }

    @And("^Mark as conducted$")
    public void markAsConducted() {
        dp.markAsConducted();
    }
}
