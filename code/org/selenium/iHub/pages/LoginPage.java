package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 18/7/17.
 */
public class LoginPage extends BasePage{

    UIElement emailID = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"user_email\"]");
    UIElement password = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"user_password\"]");
    UIElement signIn = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_user\"]/div[3]/div/button");
    UIElement menuIcon = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"menu-toggle-2\"]/span");
    UIElement unassigned = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div[1]/div[3]/a[1]/span[2]");
    UIElement status = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[7]/div/div[1]");
    UIElement task = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div[3]/div[2]/div/div[2]/a");


    public void launchTheUrl(String arg0) {
        tDriver.myget("http://staging.work.withamura.com");
    }
//    http://104.236.156.35

    public void clickOnUsernameEmailId(String arg0) {
        tDriver.mytype(emailID,arg0);
    }

    public void clickOnPassword(String arg0) {
        tDriver.mytype(password,arg0);
    }

    public void clickOnSignInButton() {
        tDriver.mytasktype(signIn);
    }

    public void clickOnMenuIcon() {
        tDriver.myclick(menuIcon);
    }

    public void checkTheErrors() {
        tDriver.myerror();
    }


    public void messageDisplayedLoginSuccessfully() {
        tDriver.myloginmessage();
    }

    public void showTheCountOfDueToday() {
        tDriver.mycount();


    }

    public void showTheCountOfAnUnassignedTasks() {
        tDriver.mycountunassigned();

    }

    public void showTheMessageInputBriefSaved() {
        tDriver.myinputsaved();

    }

    public void checkForSSL() {
        tDriver.myssl();
    }


}
