package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 20/7/17.
 */
public class DesignPublishPage extends BasePage{

    UIElement action = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/button");
    UIElement publish = new UIElement(UIType.Button,UILocatorType.Xpath,"/html/body/div[@id='wrapper']/div[@id='page-content-wrapper']/div[@class='container-fluid']/div[@class='row']/div[@class='col-md-9 resource-details-container']/div[@class='form-container']/form[@id='edit_client_design_task_5982c7ce5461f40d99c763ab']/div[@class='row'][5]/div[@class='col-md-12']/div[@class='form-group']/div[@class='selectize-control selectize single']/div[@class='selectize-input items full has-options has-items']");
    UIElement publishSave = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"edit_client_design_task_596efe5926300a307603dff8\"]/div[1]/div/div/div[1]");
    //*[@id="edit_client_design_task_5982c3505461f40d99c76385"]/div[5]/div/div/div/div[1]
    //*[@id="edit_client_design_task_5982c3505461f40d99c76385"]/div[5]/div/div/div
    //*[@id="edit_client_design_task_5982c3505461f40d99c76385"]/div[5]/div/div/div/div[1]
    //*[@id="edit_client_design_task_5982c4495461f40d99c76398"]/div[5]/div/div/div/div[1]
//    <input type="submit" name="commit" value="Update Task" class="ihub-btn" data-disable-with="Update Task">


    public void selectActionDetails() {
        tDriver.myactions(action);
    }

    public void selectStatusPublish() {
        tDriver.mywait(publish);
    }

    public void clickSave() {
        tDriver.myclick(publishSave);
    }




}
