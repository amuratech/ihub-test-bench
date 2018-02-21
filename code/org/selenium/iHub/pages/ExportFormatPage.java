package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 8/2/18.
 */
public class ExportFormatPage extends BasePage {

    UIElement exportFormats = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[10]/a");
    UIElement userExportFormats = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[6]/a");
    UIElement addExportFormat = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add a export format')]");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"export_format_name\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export_format\"]/div[3]/div/div/input");
    UIElement saveExport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[4]/input");
    UIElement generateReportLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/a/i");
    UIElement dateRange = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[2]/div[1]/div/div/div[1]");
    UIElement status = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[1]");
    UIElement newExport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add new export')]");//*[@id="page-content-wrapper"]/div[1]/div[2]/ul/li/a
    UIElement department = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[1]/div/div/div[1]");//*[@id="page-content-wrapper"]/div[1]/div[2]/ul/li/a
    UIElement download = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr/td[6]/div/a/i");//*[@id="page-content-wrapper"]/div[1]/div[2]/ul/li/a
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[10]/div/div/label[1]");//*[@id="page-content-wrapper"]/div[1]/div[2]/ul/li/a

    public void clickExportFormats() {
        tDriver.myclicking(exportFormats);
    }

    public void clickAddAExportFormat() {
        tDriver.myclicking(addExportFormat);
    }

    public void enterName(String arg0) {
        tDriver.mytype(name,arg0);
    }

    public void clickSaveButtonExportFormats() {
        tDriver.myclicking(save);
    }

    public void clickGenerateNewReport() {
        tDriver.myGenerateNewExport(generateReportLink);

    }

    public void selectDateRangeFieldExport() {
        tDriver.myExportDateRangeField(dateRange);

    }

    public void selectTheStatusExport() {
        tDriver.myExportStatus(status);

    }

    public void clickSaveButtonExport() {
        tDriver.myclicking(saveExport);
    }

    public void clickExportFormatsUser() {
        tDriver.myclicking(userExportFormats);
    }

    public void clickAddNewExport() {
        tDriver.myclicking(newExport);
    }

    public void selectTheDepartmentExport(){
        tDriver.myExportDepartment(department);
    }

    public void clickDownloadLink() {
        tDriver.myExportDownload(download);
    }

    public void selectTheRework() {
        tDriver.myExportRework(rework);

    }
}
