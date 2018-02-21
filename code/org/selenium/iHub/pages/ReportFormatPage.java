package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 30/1/18.
 */
public class ReportFormatPage extends BasePage {

    UIElement report = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[9]/a/i");
    UIElement addFormat = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add a report format')]");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"report_format_name\"]");
    UIElement groupBy = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report_format\"]/div[2]/div/div/div/div[1]");
    UIElement metricName = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report_format\"]/div[3]/div[2]/div/div[2]/div[1]/div/div/div[1]");
    UIElement calculateBy = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report_format\"]/div[3]/div[2]/div/div[2]/div[2]/div/div/div[1]");
    UIElement saveFormat = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report_format\"]/div[5]/div/div/input");
    UIElement createReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Create report')]");
    UIElement dateRangeField = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report\"]/div[1]/div[1]/div/div/div[1]");//*[@id="new_export"]/div[2]/div[1]/div/div/div[1]
    UIElement dateRangeFieldValue = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_date_range_field_value')]");//*[@id="export_date_range_field_value"]
    UIElement departmentFilter = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'new_report')]/div[2]/div/div[1]/div/div/div[1]");//*[@id="new_export_format"]/div[2]/div/div[1]/div/div/div[1]
    UIElement saveReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report\"]/div[3]/input");//*[@id="new_report"]/input[2]
    UIElement generateReportLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/a/i");
    UIElement showReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/a/i");
    UIElement allReports = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/a/i");
    UIElement reportsSidebarAllUser = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[5]/a");
    UIElement buildReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/a/i");
    UIElement generateReportButton = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_report\"]/input[2]");

    public void clickReports() {
        tDriver.myclicking(report);
    }

    public void clickAddAReportFormat() {
        tDriver.myclicking(addFormat);
    }

    public void enterNameOfTheReportFormat(String arg0) {
        tDriver.mytype(name,arg0);
    }

    public void selectGroupBy() {
        tDriver.myReportGroupBy(groupBy);
    }

    public void selectMetricName() {
        tDriver.myMetricName(metricName);

    }

    public void selectCalculateBy() {
        tDriver.myCalculateBy(calculateBy);
    }

    public void clickSaveButtonReportFormat() {
        tDriver.myclicking(saveFormat);
    }

    public void clickCreateReport() {
        tDriver.myclicking(createReport);
    }

    public void selectDateRangeField() {
        tDriver.myReportDateRangeField(dateRangeField);
    }

    public void selectDateRangeFieldValue() {
        tDriver.myReportDateRangeFieldValue(dateRangeFieldValue);
    }

    public void selectDepartment() {
        tDriver.myReportFilterDepartment(departmentFilter);
    }

    public void clickSaveButtonCreateReport() {
        tDriver.myclicking(saveReport);
    }

    public void selectGenerateNewReport(){
        tDriver.myReportGeneratelink(generateReportLink);
    }

    public void selectShow() {
        tDriver.myReportShow(showReport);

    }

    public void selectViewAllReports() {
        tDriver.myReportAllReports(allReports);

    }

    public void clickReportsAllUsers() {
        tDriver.myclicking(reportsSidebarAllUser);
    }

    public void selectBuildReport() {
        tDriver.myReportBuild(buildReport);
    }

    public void clickGenerateReportButton() {
        tDriver.myclicking(generateReportButton);
    }

    public void showTheReport() {
        tDriver.myReportData();

    }
}