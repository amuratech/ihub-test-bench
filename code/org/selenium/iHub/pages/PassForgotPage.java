package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 21/7/17.
 */
public class PassForgotPage extends BasePage{

    UIElement clickHere = new UIElement(UIType.Link, UILocatorType.Xpath,"/html/body/div[1]/div/div/div[2]/div/div[2]/div/a[1]");
    UIElement email = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"user_email\"]");
    UIElement submit = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_user\"]/button");
    UIElement confNotRec = new UIElement(UIType.Link, UILocatorType.Xpath,"/html/body/div[1]/div/div/div[2]/div/div[2]/a[2]");
    UIElement resend = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_user\"]/button");


    public void clickOnClickHere() {
        tDriver.myclick(clickHere);
    }

    public void enterEmailId(String arg0) {
        tDriver.mytype(email,arg0);
    }

    public void clickSubmitButton() {
        tDriver.myclick(submit);
    }

    public void didnTReceiveConfirmation() {
        tDriver.myclick(confNotRec);
    }

    public void clickResendButton() {
        tDriver.myclick(resend);
    }
}
