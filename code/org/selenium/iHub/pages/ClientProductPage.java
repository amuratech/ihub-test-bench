package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientProductPage extends BasePage{

    UIElement addProductLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[1]/a/i");
    UIElement developer = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_product\"]/div/div[1]/div/div/div/div[1]");
    UIElement project = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_product\"]/div/div[2]/div/div/div/div[1]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_product\"]/div/div[6]/input");

    public void selectAddAProductLink() {
        tDriver.myClientProductLink(addProductLink);
    }

    public void selectADeveloperFromTheKnowledgeBase() {
        tDriver.myClientProductDeveloper(developer);

    }

    public void selectAProjectFromTheKnowledgeBase() {
        tDriver.myClientProductProject(project);
    }

    public void clickSaveButtonClientProduct() {
        tDriver.myclicking(save);
    }


}
