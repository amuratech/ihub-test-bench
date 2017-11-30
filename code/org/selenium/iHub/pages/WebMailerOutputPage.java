package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebMailerOutputPage extends BasePage{

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d51bf5461f40e10dca2f8\"]/div[10]/input");
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_mailer_output_thought_process')]");
    UIElement mailerFile = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_mailer_output_mailer_file')]");//*[@id="client_development_mailer_output_mailer_file"]
    UIElement submit = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer_output\"]/div[2]/div/div/input ");
    UIElement update = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d51bf5461f40e10dca2f8\"]/div[10]/input");
    UIElement radioMailerFile = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_1_correct_true\"]");
    UIElement rateDesign = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[3]/div/div/a[4]");
    UIElement rateCoding = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[4]/div/div/a[5]");
    UIElement output = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[5]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[6]/input[1]");

    public void clickStartWorkingButton() {
        tDriver.myclicking(startWorking);
    }

    public void enterThoughtProcessWebmailer(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void uploadMailerFile() {
        tDriver.myhtmlupload(mailerFile);
    }

    public void clickSubmitWebmaileroutput() {
        tDriver.myclicking(submit);
    }

    public void clickUpdateWebmailer() {
        tDriver.myclick(update);
    }

    public void selectRadioMailerFile() {
        tDriver.myclicking(radioMailerFile);
    }

    public void rateTheAdherenceToSubmittedDesign() {
        tDriver.myclicking(rateDesign);
    }

    public void rateTheAdherenceToCodingStandards() {
        tDriver.myclicking(rateCoding);
    }

    public void rateTheOutputWebmailer() {
        tDriver.myclicking(output);
    }

    public void clickDeliverWebmailer() {
        tDriver.myclick(deliver);
    }
}
