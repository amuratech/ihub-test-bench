package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MeetingInputandOutputPage;

public class MeetingInputandOutputSteps {

    MeetingInputandOutputPage dp;

    public MeetingInputandOutputSteps() {
        dp = new MeetingInputandOutputPage();
    }

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

    @And("^Click 'Mark as conducted'$")
    public void clickMarkAsConducted() {
        dp.clickMarkAsConducted();
    }

    @And("^Click 'Submit minutes of meeting'$")
    public void clickSubmitMinutesOfMeeting() {
        dp.clickSubmitMinutesOfMeeting();
    }

    @When("^Select Attendance of the meeting$")
    public void selectAttendanceOfTheMeeting() {
        dp.selectAttendanceOfTheMeeting();
    }

    @And("^Upload Minutes of Meeting doc$")
    public void uploadMinutesOfMeetingDoc() {
        dp.uploadMinutesOfMeetingDoc();
    }

    @Then("^Click 'Save' button to submit minutes of meeting$")
    public void clickSaveButtonToSubmitMinutesOfMeeting() {
        dp.clickSaveButtonToSubmitMinutesOfMeeting();
    }

    @Then("^Enter 'Have you shared the minutes with the team' \"([^\"]*)\"$")
    public void enterHaveYouSharedTheMinutesWithTheTeam(String arg0) {
        dp.enterHaveYouSharedTheMinutesWithTheTeam(arg0);
    }

    @And("^Enter 'Was the meeting owner well prepared' \"([^\"]*)\"$")
    public void enterWasTheMeetingOwnerWellPrepared(String arg0) {
        dp.enterWasTheMeetingOwnerWellPrepared(arg0);
    }

    @And("^Enter Were the other participants well prepared' \"([^\"]*)\"$")
    public void enterWereTheOtherParticipantsWellPrepared(String arg0) {
        dp.enterWereTheOtherParticipantsWellPrepared(arg0);
    }

    @And("^Enter 'Did the meeting start and end on time' \"([^\"]*)\"$")
    public void enterDidTheMeetingStartAndEndOnTime(String arg0) {
        dp.enterDidTheMeetingStartAndEndOnTime(arg0);
    }

    @When("^Rate the output- Meeting output$")
    public void rateTheOutputMeetingOutput() {
        dp.rateTheOutputMeetingOutput();
    }

    @Then("^Click 'Complete' button$")
    public void clickCompleteButton(){
        dp.clickCompleteButton();
    }
}
