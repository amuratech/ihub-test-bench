package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CampaignOutputPage extends BasePage{

    UIElement planOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div[2]/div/ul/li[1]/a");
    UIElement objective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_objective\"]");
    UIElement budget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_budget\"]");
    UIElement endDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_end_date\"]");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[2]/div/div/div[1]");
    UIElement category = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[2]/div/div/div[1]");
    UIElement segment = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[2]/div[1]/div/div/div[1]");
    UIElement microMarket = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_product_detail_attributes_micro_market\"]");
    UIElement numberUnits = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_product_detail_attributes_units\"]");//*[@id="client_campaign_task_plan_output_product_detail_attributes_units"]
    UIElement minAge = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_min_age\"]");
    UIElement maxAge= new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_max_age\"]");//*[@id="client_campaign_task_plan_output_target_group_attributes_max_age"]
    UIElement income = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_min_household_income\"]");//*[@id="client_campaign_task_plan_output_target_group_attributes_min_household_income"]
    UIElement geos = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[17]/div/div/div/div[1]");//*[@id="new_client_content_sitemap"]/div[6]/div[10]/div/div/div/div[1]
    UIElement microGeos = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[18]/div/div/div/div[1]");//*[@id="new_client_campaign_task_plan_output"]/div[18]/div/div/div/div[1]
    UIElement trying = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_target_audience\"]");//*[@id="client_campaign_task_plan_output_target_group_attributes_target_audience"]

    public void clickPlanOutput() {
        tDriver.mywait(planOutput);
    }

    public void clickObjective() {
        tDriver.mywait(objective);
    }

    public void clickBudget() {
        tDriver.mywait(budget);
    }

    public void selectEndDate() {
        tDriver.mywait(endDate);
    }

    public void selectProject() {
        tDriver.mywait(project);
    }

    public void selectCategory() {
        tDriver.mywait(category);
    }

    public void selectSegment() {
        tDriver.mywait(segment);
    }

    public void enterMicroMarket() {
        tDriver.mywait(microMarket);
    }

    public void enterNumberOfUnits() {
        tDriver.mywait(numberUnits);
    }

    public void enterMinAge() {
        tDriver.mywait(minAge);
    }

    public void enterMaxAge() {
        tDriver.mywait(maxAge);
    }

    public void enterIncome() {
        tDriver.mywait(income);
    }

    public void enterGeos() {
        tDriver.mywait(geos);
    }

    public void enterMicroGeos() {
        tDriver.mywait(microGeos);
    }

    public void enterTrying() {
        tDriver.mywait(trying);
    }

}
