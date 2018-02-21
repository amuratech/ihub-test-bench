package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 1/12/17.
 */
public class ChangeRequestPage extends  BasePage {

    UIElement insuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_0_correct_false\"]");
    UIElement reason = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_0_comments\"]");
    UIElement changeRequest = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[9]");
    UIElement requestEnabled = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_backward\"]");


    public void selectingInsufficientInfoForBrief() {
        tDriver.myclicking(insuff);
    }

    public void enterTheReason(String arg0) {
        tDriver.mytype(reason,arg0);
    }

    public void requestChangeButtonShouldBeDisabled() {
        tDriver.myDisable(changeRequest);
    }

    public void requestChangeButtonShouldBeEnabled() {
        tDriver.myEnable(requestEnabled);
    }
}
