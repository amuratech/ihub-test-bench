package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AddNewProjectPage extends BasePage {

    UIElement clientFilter = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[1]");
    UIElement projectsTab = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[3]/a");
    UIElement campaigns = new UIElement(UIType.Link, UILocatorType.Xpath,"/html/body/nav/div[2]/ul/li[6]/ul/li/a");
    UIElement newcampaign = new UIElement(UIType.Link, UILocatorType.Xpath,"/html/body/nav/div[2]/ul/li[1]/a");
    UIElement title = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_name\"]");
    UIElement budget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_budget\"]");
    UIElement dueDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_due_date\"]");
    UIElement startDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_start_date\"]");
    UIElement endDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_end_date\"]");
    UIElement purpose = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_purpose\"]");
    UIElement websiteDesign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_assignment\"]/div[8]/div[1]/div/div/div[1]");
    UIElement checkBox = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_brief_meeting\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_assignment\"]/div[12]/input");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Project')]");
    UIElement client = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"assignment-form-modal\"]/div/div/div[2]/div/div/div[1]");
    UIElement addProject = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"assignment-form-modal\"]/div/div/div[3]/a");
    UIElement projectTitle = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_name\"]");
    UIElement estBudget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_budget\"]");
    UIElement projectDueDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_assignment_due_date\"]");
    UIElement initiateCampaign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Initiate campaign')]");

    public void filterForClient(String arg0) {
        tDriver.myfilterclient(clientFilter,arg0);
    }

    public void clickOnProjects() {
        tDriver.myclicking(projectsTab);
    }

    public void clickOnCampaigns() {
        tDriver.myclicking(campaigns);
    }

    public void clickNewCampaign() {
        tDriver.myclicking(newcampaign);
    }

    public void enterCampaignTitle() {
        tDriver.mywait(title);
    }

    public void enterBudgetAssignment() {
        tDriver.mywait(budget);
    }

    public void selectDueDateAssignment() {
        tDriver.mywait(dueDate);
    }

    public void selectCampaignStartDateAssignment() {
        tDriver.myprojectcampaignstartdate(startDate);
    }

    public void selectCampaignEndDateAssignment() {
        tDriver.myprojectcampaignenddate(endDate);
    }

    public void selectPurposeAssignment() {
        tDriver.mywait(purpose);
    }

    public void selectWebsiteDesign() {
        tDriver.myprojectwebsitedesign();
    }

    public void checkBriefSessionRequiredBox() {
        tDriver.myclicking(checkBox);
    }

    public void clickSaveButtonAssignment() {
        tDriver.myclicking(save);
    }

    public void selectProject() {
        tDriver.myclicking(project);
    }


    public void selectClient() {
        tDriver.myclientforproject(client);
    }

    public void clickAddProject() {
        tDriver.myclicking(addProject);
    }

    public void enterProjectTitle(String arg0) {
        tDriver.mytype(projectTitle,arg0);
    }

    public void selectProjectType() {
        tDriver.myprojecttype();
    }

    public void selectDueDateOfProject() {
        tDriver.myprojectduedate(projectDueDate);
    }

    public void enterEstimatedBudget(String arg0) {
        tDriver.mytype(estBudget,arg0);
    }

    public void enterPurpose(String arg0) {
        tDriver.mytype(purpose,arg0);
    }

    public void clickInitiateCampaign() {
        tDriver.myclicking(initiateCampaign);
    }

    public void selectBillingMethod() {
        tDriver.myBillingMethod();

    }
}
