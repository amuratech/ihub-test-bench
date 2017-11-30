package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class InputBriefReviewCommonFieldsPage extends BasePage{

    UIElement name = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_0_correct_true')]");//*[@id="client_seo_review_review_fields_attributes_0_correct_true"]
    UIElement desc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_1_correct_true')]");
    UIElement dueDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_2_correct_true')]");
    UIElement purpose = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_correct_true')]");
    UIElement time = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_3_correct_true')]");

    public void selectName() {
        tDriver.myclicking(name);
    }

    public void selectDesc() {
        tDriver.myclicking(desc);
    }

    public void selectDueDate() {
        tDriver.myclicking(dueDate);
    }

    public void selectPurposeRadioButton() {
        tDriver.myclicking(purpose);
    }

    public void selectTime() {
        tDriver.myclicking(time);
    }

}
