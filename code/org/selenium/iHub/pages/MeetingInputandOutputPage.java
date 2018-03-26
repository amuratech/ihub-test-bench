package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class MeetingInputandOutputPage extends BasePage {

    UIElement attendees = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting\"]/div[4]/div[2]/div/div/div[1]");//*[@id="new_client_meeting_output"]/div[1]/div/div[1]
    UIElement title = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_name\"]");
    UIElement schedule = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_scheduled_on\"]");
    UIElement agenda = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting\"]/div[2]/div/div[3]/div[2]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting\"]/div[6]/input");//*[@id="new_client_meeting_output"]/div[5]/input
    UIElement scheduled = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(),'Schedule this meeting')]");
    UIElement conducted = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(), 'Mark as conducted')]");
    UIElement minutesofMeeting = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(), 'Submit minutes of meeting')]");
    UIElement minutesofMeetingFile = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_output_minutes_of_meeting\"]");
    UIElement attendance = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting_output\"]/div[1]/div/div[1]");//*[@id="new_client_meeting_output"]/div[1]/div/div[1]
    UIElement saveMinutesOfMeeting = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting_output\"]/div[5]/input");
    UIElement sharedMinutesOfMinutes = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_review_questions_attributes_1_answer\"]");
    UIElement ownerWellPrepared = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_review_questions_attributes_2_answer\"]");
    UIElement otherParticipantsWellPrepared = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_review_questions_attributes_3_answer\"]");
    UIElement meetingStartAndEndOnTime= new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_review_questions_attributes_4_answer\"]");
    UIElement rateOutput= new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting_review\"]/div[3]/div/div/a[4]");
    UIElement complete = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting_review\"]/div[4]/input[1]");

    public void enterWebTaskType() {
        tDriver.mydeptmeeting();
    }

    public void enterTitle(String arg0) {
        tDriver.mytype(title,arg0);
    }

    public void selectScheduleOn() {
        tDriver.myscheduleon(schedule);
    }

    public void enterAgenda(String arg0) {
        tDriver.mytype(agenda,arg0);
    }

    public void clickSaveButtonMeeting() {
        tDriver.myclicking(save);
    }

    public void selectAttendees() {
        tDriver.myattendees(attendees);
    }

    public void clickScheduleThisMeetingLink() {
        tDriver.myclicking(scheduled);
    }

    public void clickMarkAsConducted() {
        tDriver.myclicking(conducted);
    }

    public void clickSubmitMinutesOfMeeting() {
        tDriver.myclicking(minutesofMeeting);
    }

    public void selectAttendanceOfTheMeeting() {
        tDriver.myMeetingAttendance(attendance);
    }

    public void uploadMinutesOfMeetingDoc() {
        tDriver.mytxtupload(minutesofMeetingFile);
    }

    public void clickSaveButtonToSubmitMinutesOfMeeting() {
        tDriver.myclicking(saveMinutesOfMeeting);

    }

    public void enterHaveYouSharedTheMinutesWithTheTeam(String arg0) {
        tDriver.myType(sharedMinutesOfMinutes,arg0);
    }

    public void enterWasTheMeetingOwnerWellPrepared(String arg0) {
        tDriver.myType(ownerWellPrepared,arg0);
    }

    public void enterWereTheOtherParticipantsWellPrepared(String arg0) {
        tDriver.myType(otherParticipantsWellPrepared,arg0);
    }

    public void enterDidTheMeetingStartAndEndOnTime(String arg0) {
        tDriver.myType(meetingStartAndEndOnTime,arg0);
    }

    public void rateTheOutputMeetingOutput() {
        tDriver.myclicking(rateOutput);
    }

    public void clickCompleteButton() {
        tDriver.myclicking(complete);
    }
}
