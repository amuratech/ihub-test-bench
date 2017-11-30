package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class FinanceInputPage extends BasePage {

    UIElement amount = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_finance_advertising_invoice_amount\"]");
    UIElement startDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_finance_advertising_invoice_campaign_start_date\"]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_finance_advertising_invoice\"]/div[3]/input");//*[@id="new_client_finance_advertising_invoice"]/div[3]/input

    public void enterAmount(String arg0) {
        tDriver.mytype(amount,arg0);
    }

    public void selectCampaignStartDate() {
        tDriver.mystartdate(startDate);
    }

    public void clickSaveButtonFinanceInput() {
        tDriver.myclicking(saveInput);
    }


    public void clickTheAlert() {
        tDriver.myPopup();
    }

    public void clickThePopup() {
        tDriver.myPopup2();
    }
}
