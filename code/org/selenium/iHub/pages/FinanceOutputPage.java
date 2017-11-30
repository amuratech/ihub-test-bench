package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class FinanceOutputPage  extends BasePage{

    UIElement addPayment = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add payment details')]");
    UIElement payment = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_advertising_invoice_output_received_via\"]");
    UIElement budget = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_advertising_invoice_output_current_usable_budget\"]");
    UIElement instrument = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_advertising_invoice_output_instrument_number\"]");
    UIElement received = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_advertising_invoice_output_received_on\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_finance_advertising_invoice_output\"]/div[4]/input");


    public void clickAddPaymentDetails() {
        tDriver.myclicking(addPayment);
    }

    public void enterPaymentMethod(String arg0) {
        tDriver.mytype(payment,arg0);
    }

    public void enterUsableBudget(String arg0) {
        tDriver.mytype(budget,arg0);
    }

    public void enterInstrumentNumber(String arg0) {
        tDriver.mytype(instrument,arg0);
    }

    public void enterReceivedOn() {
        tDriver.myInvoiceReceived(received);
    }

    public void clickSaveButtonFinance() {
        tDriver.myclicking(save);
    }
}
