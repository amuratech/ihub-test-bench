package org.selenium.iHub.pages;

import cucumber.api.java.ca.I;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 30/1/18.
 */
public class WebHTMLFiveInputPage extends  BasePage {

    UIElement requirements = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_html_five_ad_specification_animation_requirements\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_html_five_ad\"]/div[4]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[9]/div/div/a[4]");
    UIElement refTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_html_five_ad\"]/div[2]/div[2]/div/div/div/div/div[1]");

    public void enterSpecificationAnimationRequirements(String arg0) {
        tDriver.mytype(requirements,arg0);
    }

    public void clickSaveButtonHTMLFiveAd() {
        tDriver.myclicking(save);
    }

    public void rateTheInputBriefWebHTMLFiveAd() {
        tDriver.myclicking(rateInput);
    }

    public void selectDesignAdTaskReference() {
        tDriver.myWebHTMlDesignAdReferenceTask(refTask);
    }
}
