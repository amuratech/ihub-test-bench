package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientTargetGroupPage extends BasePage {

    UIElement targetGroupLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[7]/a/i");
    UIElement minimumAge = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_target_group_min_age\"]");
    UIElement maximumAge = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_target_group_max_age\"]");
    UIElement gender = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_target_group\"]/div[3]/div/div/div/div[1]");
    UIElement householdIncome = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_target_group_min_household_income\"]");
    UIElement geos = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_target_group\"]/div[10]/div/div/div/div[1]");
    UIElement microGeos = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_target_group\"]/div[11]/div/div/div/div[1]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_target_group\"]/div[13]/input");

    public void selectTargetGroupLink() {
        tDriver.myClientTargetGroup(targetGroupLink);
    }

    public void enterMinimumAgeClientTargetGroup(String arg0) {
        tDriver.myType(minimumAge,arg0);
    }

    public void enterMaximumAgeClientTargetGroup(String arg0) {
        tDriver.myType(maximumAge,arg0);
    }

    public void selectGenderTargetGroup() {
        tDriver.myClientTargetGroupGender(gender);
    }

    public void enterMinimumHouseholdIncome(String arg0) {
        tDriver.myType(householdIncome,arg0);
    }

    public void enterGeos(String arg0) {
        tDriver.myClientTargetGroupGeos(geos,arg0);
    }

    public void enterMicroGeos(String arg0) {
        tDriver.myClientTargetGroupMicroGeos(microGeos,arg0);
    }

    public void clickSaveButtonTargetGroup() {
        tDriver.myclicking(save);
    }
}
