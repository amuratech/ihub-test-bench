package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 19/3/18.
 */
public class ClientSupervisorsPage extends BasePage{


    UIElement clientSupervisorsLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[7]/a/i");
    UIElement department = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_supervisor\"]/div/div[2]/div[1]/div[1]/div/div/div[1]");
//    UIElement copyInputReviewer = new UIElement(UIType.Button, UILocatorType.Xpath,"");
//    UIElement copyOutputReviewer = new UIElement(UIType.Button, UILocatorType.Xpath,"");
    UIElement saveSupervisor = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_supervisor\"]/div/div[2]/div[4]/input");
    UIElement supervisorAllDepartments = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_supervisor\"]/div/div[2]/div[1]/div[1]/div/div/div[1]");
//    UIElement inputReviewer = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_supervisor\"]/div/div[2]/div[1]/div[2]/div/div/div[1]");
    UIElement outputReviewer = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_supervisor\"]/div/div[2]/div[1]/div[3]/div/div/div[1]");
    UIElement addSupervisor = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add supervisor')]");
    UIElement inputReviewer = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_supervisor\"]/div/div[2]/div[1]/div[2]/div/div/div[1]");

    public void selectAddSupervisors() {
        tDriver.myClientSupervisors(clientSupervisorsLink);
    }

    public void selectSaveButtonSupervisor() {
        tDriver.myClientSupervisorsSave(saveSupervisor);
    }

    public void clickAddSupervisorLink() {
        tDriver.myclicking(addSupervisor);
    }

    public void selectInputReviewerSupervisor() {
        tDriver.myClientInputReviewer(inputReviewer);
    }

    public void selectOutputReviewerSupervisor() {
        tDriver.myClientOutputReviewer(outputReviewer);
    }

    public void selectCopyAsDepartment() {
        tDriver.myClientCopySupervisor(department);
    }

    public void selectDesignAsDepartment() {
        tDriver.myClientDesignSupervisor(department);
    }

    public void selectSocialMediaAsDepartment() {
        tDriver.myClientSocialSupervisor(department);
    }

    public void selectWebDevelopementAsDepartment() {
        tDriver.myClientWebDevelopmentSupervisor(department);
    }

    public void selectMarketingAsDepartment() {
        tDriver.myClientMarketingSupervisor(department);
    }

    public void selectPaidMediaAsDepartment() {
        tDriver.myClientPaidMediaSuprevisor(department);
    }

    public void selectMediaPlanningAsDepartment() {
        tDriver.myClientMediaPlannningSupervisor(department);
    }

    public void selectSEOAsDepartment() {
        tDriver.myClientSEOSupervisor(department);
    }

    public void selectDeliveryAsDepartment() {
        tDriver.myClientDeliverySupervisor(department);
    }

    public void selectQAAsDepartment() {
        tDriver.myClientQASupervisor(department);
    }
}
