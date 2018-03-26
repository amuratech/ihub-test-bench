package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class FinanceContractInputPage extends BasePage {

    UIElement startDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_contract_start_date\"]");
    UIElement endDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_contract_end_date\"]");
    UIElement billingDetails = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_finance_contract\"]/div[2]/div/div[1]");
    UIElement saveInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_finance_contract\"]/div[3]/input");
    UIElement markInvoiceRaised = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[2]/div/a");

    public void selectStartDateForTheContract() {
        tDriver.myFinanceContractStartDate(startDate);
    }

    public void selectEndDateForTheContract() {
        tDriver.myFinanceContractEndDate(endDate);
    }

    public void selectBillingContactDetails() {
        tDriver.myFinanceContractBillingDetails(billingDetails);
    }

    public void clickSaveButtonFinanceContractInput() {
        tDriver.myclicking(saveInput);
    }

    public void clickMarkAsInvoiceRaisedLink() {
        tDriver.myclicking(markInvoiceRaised);
    }

}
