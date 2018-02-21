package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class MeetingInputPage extends BasePage {

    UIElement attendees = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting\"]/div[4]/div[1]/div/div/div[1]");//*[@id="new_client_marketing_work_review"]/div[3]/div/div[1]
    UIElement title = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_name\"]");
    UIElement schedule = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_meeting_scheduled_on\"]");
    UIElement agenda = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting\"]/div[2]/div/div[3]/div[2]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_meeting\"]/div[5]/input");
    UIElement meetingLink = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(),'Schedule this meeting')]");

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
        tDriver.myclicking(meetingLink);
    }
}
