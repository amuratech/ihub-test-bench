package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DepartmentTypesPage;

public class DepartmentTypesSteps {

    DepartmentTypesPage dp;

    public DepartmentTypesSteps(){dp = new DepartmentTypesPage(); }

    @And("^Select the department- web development$")
    public void selectTheDepartmentWebDevelopment() {
        dp.selectTheDepartmentWebDevelopment();
    }


    @And("^Select the department- social$")
    public void selectTheDepartmentSocial() {
        dp.selectTheDepartmentSocial();
    }


    @And("^Select the department- seo$")
    public void selectTheDepartmentSeo() {
        dp.selectTheDepartmentSeo();
    }

    @And("^Select the department- Design$")
    public void selectTheDepartmentDesign() {
        dp.selectTheDepartmentDesign();
    }

    @And("^Select the department- content$")
    public void selectTheDepartmentContent() {
        dp.selectTheDepartmentContent();
    }


    @And("^Select the department- campaign$")
    public void selectTheDepartmentCampaign(){
        dp.selectTheDepartmentCampaign();
    }

    @And("^Select the department- meeting$")
    public void selectTheDepartmentMeeting() {
        dp.selectTheDepartmentMeeting();
    }

    @And("^Select the department- Marketing$")
    public void selectTheDepartmentMarketing() {
        dp.selectTheDepartmentMarketing();
    }

    @And("^Select the department- Paid Media$")
    public void selectTheDepartmentPaidMedia() {
        dp.selectTheDepartmentPaidMedia();

    }

    @And("^Click Paid Media$")
    public void clickPaidMedia() {
        dp.clickPaidMedia();
    }

    @And("^Select the department- Finance$")
    public void selectTheDepartmentFinance() {
        dp.selectTheDepartmentFinance();
    }

    @And("^Click Finance$")
    public void clickFinance() {
        dp.clickFinance();
    }

    @Then("^Click content tab$")
    public void clickContentTab() {
        dp.clickContentTab();
    }

    @Then("^Click tab$")
    public void clickTab() {
        dp.clickTab();
    }

    @And("^Show the task overview counts- Design$")
    public void showTheTaskOverviewCounts() {
        dp.showTheTaskOverviewCounts();
    }
}
