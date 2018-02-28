package org.selenium.iHub.driver;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by amuraqa on 18/7/17.
 */
public class TestDriver {

    public static TestDriver tDriver;
    public static WebDriver driver;
    public static RemoteWebDriver rDriver;

    private TestDriver() {
        System.setProperty("webdriver.chrome.driver", "/home/amura/Downloads/Software/chromedriver");
//        System.setProperty("webdriver.gecko.driver", "/home/amuraqa/Desktop/Software/geckodriver");
        if (driver == null) {
            driver = new ChromeDriver();
            driver.manage().window().maximize();    //------- To maximize the screen------/

        }
//        String myBrowser = "";
//        String nodeURL = "http://localhost:4444";
//        if (myBrowser.equalsIgnoreCase("firefox")) {
//            DesiredCapabilities caps = DesiredCapabilities.firefox();
//            caps.setPlatform(Platform.LINUX);
//            caps.setBrowserName("firefox");
//            try {
//                driver = new RemoteWebDriver(new URL(nodeURL), caps);
//            } catch (MalformedURLException e) {
//                e.printStackTrace();
//            }
//        } else if (myBrowser.equals("chrome")) {
//
//            DesiredCapabilities caps = DesiredCapabilities.chrome();
//            caps.setPlatform(Platform.LINUX);
//            caps.setBrowserName("chrome");
//            try {
//                driver = new RemoteWebDriver(new URL(nodeURL), caps);
//            } catch (MalformedURLException e) {
//                e.printStackTrace();
//            }
//        }
    }

    public static TestDriver getDriver() {
        if (tDriver == null) {
            tDriver = new TestDriver();
        }
        return tDriver;
    }

    private By myFindBy(UIElement uiElement) {
        By by = null;

        if (uiElement.getUiLocatorType() == UILocatorType.ID) {
            by = By.id(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.Name) {
            by = By.name(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.Xpath) {
            by = By.xpath(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.LinkText) {
            by = By.linkText(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.PartialLinkText) {
            by = By.partialLinkText(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.TagName) {
            by = By.tagName(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.ClassName) {
            by = By.className(uiElement.getLocator());
        }
        if (uiElement.getUiLocatorType() == UILocatorType.CSS) {
            by = By.cssSelector(uiElement.getLocator());
        }

        return by;
    }

    public void myget(String s) {
        driver.get(s);
    }

    public void mytype(UIElement uiElement, String arg0) {
        driver.findElement(myFindBy(uiElement)).sendKeys(arg0);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myclick(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
    }

    public void mywait(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydropdown(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();        // Overrides the existing text
        element.sendKeys("piyush@amuratech.com");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myenter(UIElement uiElement, String arg0) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Runwal");
        action.perform();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div"))).click().perform();//*[@id="task-form-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]

    }

    public void mytasktype(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(12000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myupload(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.sendKeys("/home/amuraqa/Desktop/Software/Testing_iHub.txt");// Enter the path
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytxtupload(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.sendKeys("/home/amuraqa/Desktop/Software/Testing_iHub.txt");// Enter the path
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myguide() {        //Select dropdown with class div
        Actions act = new Actions(driver);
        //To select locator of field
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //To select locator of dropdown option
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[2]/div/div[1]"))).click().perform();
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[2]/div/div[2]"))).click().perform();
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[2]/div/div[3]"))).click().perform();

    }

    public void mycta(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"client_design_website_call_to_action-selectized\"]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[8]/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mygender(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"client_design_website_target_group_attributes_gender-selectized\"]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[9]/div[3]/div/div/div/div[2]/div/div[1]"))).click().perform();

    }

    public void myedu(UIElement func) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"client_design_website_target_group_attributes_educational_backgrounds-selectized\"]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[9]/div[4]/div/div/div/div[2]/div/div[4]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myactionreview(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/a/i"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/button/i
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/ul/li[3]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mywebmaintenancehosting(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_maintenance_work\"]/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_maintenance_work\"]/div[2]/div/div[2]/div/div[1]"))).click().perform();

    }

    public void mytgtodo(UIElement tgToDo) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"client_design_website_target_group_attributes_purpose-selectized\"]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[9]/div[13]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myclient(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Gera");
        action.perform();
        //action.sendKeys(Keys.ENTER);
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysubtype(UIElement subType) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"client_design_website_website_type-selectized\"]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[2]/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mysort(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypublish() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div[2]/div/div/div[1]"))).click().perform();//*[@id="edit_client_development_task_59b3a6575461f40fe973112d"]/div[7]/div/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
    }

    public void myactions(UIElement action) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/button"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/ul/li[1]/a"))).click().perform();
    }

    public void myerror() {     //Showing content on the page using id
        //System.out.println(driver.getPageSource().contains("Delayed tasks" + "Users available"));
        String inactive = driver.findElement(By.id("page-content-wrapper")).getText();
        System.out.println(inactive);
    }

    public void myassignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Varsha");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]

//        Actions act = newtry {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        } Actions(driver);
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        Actions act = new Actions(driver);
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }


//    public void mystatus(UIElement uiElement) {
//        Actions act = new Actions(driver);
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"edit_client_design_task_598171d65461f415cc63d89c\"]/div[4]/div/div/div/div[1]"))).click().perform();
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"edit_client_design_task_598171d65461f415cc63d89c\"]/div[4]/div/div/div/div[2]/div/div[2]"))).click().perform();
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }

    public void mystatus(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"edit_client_design_task_598179ec5461f415cc63d947\"]/div[4]/div/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"edit_client_design_task_598179ec5461f415cc63d947\"]/div[4]/div/div/div/div[2]/div/div[2]"))).click().perform();

    }

    public void mywaiting(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(20000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myproduct(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }

        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Gera");
        action.perform();
        //action.sendKeys(Keys.ENTER);
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysearch(UIElement uiElement) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myreview(UIElement status) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59af98b45461f410f947a322"]/div[6]/div/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_media_plan_task_59af98b45461f410f947a322"]/div[6]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myclicking(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myreworkstart(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_development_task_')]/div[5]/div/div/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myaction(UIElement actionDesign) {
    }

    public void mydeptdesign() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void mydesignad() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[4]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myedit() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/a/i"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div[1]/table/tbody/tr/td[5]/div/a/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/ul/li[2]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div[1]/table/tbody/tr/td[5]/div/ul/li[2]/a
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myjpgupload(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.sendKeys("/home/amuraqa/Desktop/Sites/505145-dhoni-m.jpg");// Enter the path
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydeptmediaplan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[4]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytypecampaign() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/button/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/ul/li[2]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydeptcontent() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentidea() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydeptwebdev() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[9]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void mywebdev() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydetailreview(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_design_task_59941e985461f40de73cdf87"]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_design_task_59941e985461f40de73cdf87"]/div[1]/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mymediaplanpublish() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentad() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[13]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myviewdetails() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div/div/table/tbody/tr/td[2]/div/button/i"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div/div/table/tbody/tr/td[2]/div/ul/li[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myassignscroll(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.click();
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,8000)", "");
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);

    }

    public void mydeptsocial() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[8]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialmediapost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialpublish() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_social_task_')]/div[5]/div/div/div/div[1]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_social_task_')]/div[5]/div/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialadhoc() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[1]/div[2]/div/div/div[1]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[1]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialaudit() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialmediaplan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[5]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentsocialpost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[10]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialassetcreation() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[4]"))).click().perform();//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void mydeptseo() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[7]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseoaudit() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseoplan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseosubmission() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentblogpost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void mydeptcampaign() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycampaignexecution() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[1]/div[2]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[1]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydeptmeeting() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[10]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentseocms() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[1]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[1]/div[2]/div/div/div[2]/div/div[7]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycampaignplan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[1]/div[2]/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[1]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59952b5b5461f40e7d63b6f4"]/div[5]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypublishtask() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[6]/div/div/div/div[1]"))).click().perform();//*[@id="edit_client_media_plan_task_59af98b45461f410f947a322"]/div[6]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[6]/div/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_task_59a661df5461f4175428ac2b"]/div[6]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypurpose() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[4]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_campaign_task"]/div[4]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[4]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_campaign_task"]/div[4]/div/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytimeslot() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[11]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_design_task"]/div[11]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[11]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_task"]/div[11]/div/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myreviewtask() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[6]/div/div/div/div[1]"))).click().perform();//*[@id="edit_client_design_task_59c4ac7e8ec629792ff50932"]/div[6]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[6]/div/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_development_task_59bf75015461f410255580a9"]/div[6]/div/div/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myfilterclient(UIElement uiElement, String arg0) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Runwal");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[2]/div/div/span"))).click().perform();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mystageinitiate() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[4]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ad4c9a5461f40e8410c409"]/div[4]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[4]/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myinitialcampaignedit() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[4]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ad4c9a5461f40e8410c409"]/div[4]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[4]/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mystagebriefapproved() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[4]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae6dd55461f410f947a1a3"]/div[4]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[4]/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae6dd55461f410f947a1a3"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mymediaplanedit() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div/table/tbody/tr[2]/td[4]/div/button/i"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div/table/tbody/tr[2]/td[4]/div/ul/li[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytasksubtype() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mywebmailer() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mywebmaintenance() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[4]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentsitemap() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[8]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentsinglepage() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]    "))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mygendermale() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_sitemap\"]/div[6]/div[3]/div/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_sitemap\"]/div[6]/div[3]/div/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mytg() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_sitemap\"]/div[6]/div[13]/div/div[1]"))).click().perform();//*[@id="new_client_content_blogpost"]/div[9]/div[13]/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_sitemap\"]/div[6]/div[13]/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mygeos(UIElement uiElement, String arg0) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_sitemap\"]/div[6]/div[10]/div/div/div/div[2]/div"))).click().perform();
    }

    public void mymicrogoes(UIElement uiElement, String arg0) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing200");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_sitemap\"]/div[6]/div[11]/div/div/div/div[2]/div"))).click().perform();
    }

    public void mytones() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[2]/div/div[4]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[2]/div/div[5]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


    }

    public void myproductcontentblogpost(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("runwal");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[5]/div/div/div[1]/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_content_blogpost"]/div[5]/div/div/div[1]/div[2]/div/div[2]
    }

    public void mytgcontentblogpost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[9]/div[13]/div/div[1]"))).click().perform();//*[@id="new_client_content_blogpost"]/div[9]/div[13]/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[9]/div[13]/div/div[2]/div/div[3]"))).click().perform();
    }

    public void mycontenthoarding() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_blogpost"]/div[9]/div[13]/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[4]"))).click().perform();
    }

    public void mycontentsubtypehoarding() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_blogpost"]/div[9]/div[13]/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mytimeslotcontent() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[8]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_content_blogpost"]/div[9]/div[13]/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[8]/div/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void myquicklinktask() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("$x(/html/body/nav/ul/li[1]/a)"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.cssSelector("body > nav > ul > li:nth-child(1) > ul > li:nth-child(3)"))).click().perform();
    }

    public void mywebseo() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();
    }

    public void myhtmlupload(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.sendKeys("/home/amuraqa/Desktop/Software/Testing.html");// Enter the path
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

//    public void myquicklinktask(){
//        if (driver instanceof JavascriptExecutor) {
//            ((JavascriptExecutor) driver)
//                    .executeScript("document.getElementById(\"12149-3A-GN-0\").click()");
//        }
//        try {
//            Thread.sleep(3000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }

    public void myassignee(UIElement uiElement, String arg0) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Ashwin");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]"))).click().perform();
    }

    //      -----Assignee for SEO------------
    public void mySEOAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("minal");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]
    }

    //*[@id="review-accept-modal"]/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]
//      -------Assignee for Design---------------
    public void myDesignAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Varsha");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]
    }

    //      ------Assignee for Web Development----------
    public void myWebDevelopmentAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Ashwin");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div"))).click().perform();
    }

    //      -------Assignee fo Content-----------
    public void myContentAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Abhay");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div"))).click().perform();
    }

    //      ----------Assignee for Media Planning-----------
    public void myMediaPlanningAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Pranav");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]"))).click().perform();
    }

    //      --------Assignee for Marketing-------
    public void myMarketingAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Gautham");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    //      ---------Assignee for Social--------------
    public void mySocialAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Pranoti");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div"))).click().perform();
    }

    public void mydate() {

    }

    public void mydesignwebsite() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mydesigninfographics() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();
    }

    public void mydesignprintmedia() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();
    }

    public void mydesignemailer() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[5]"))).click().perform();
    }

    public void mydesignsocialcover() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[6]"))).click().perform();
    }

    public void mydesignsocialpost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[7]"))).click().perform();
    }

    public void mydesignwebsinglepage() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mydesigninfographicswebsite() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mydesignprintmediabrochure() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mydesignemailersales() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mydesignCTA() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[6]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[6]/div/div[2]/div/div[1]"))).click().perform();
    }

    public void myedittask() {
    }

    public void mycms() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[3]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[3]/div/div[2]/div/div[1]"))).click().perform();

    }

    public void mycrm() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[1]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[1]/div/div[2]/div/div[1]"))).click().perform();

    }

    public void myspecificfunc() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[2]/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[2]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mywebhosting(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[10]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_website_development\"]/div[10]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myduedate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 6);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
//        try {
//            Thread.sleep(9000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void mystartdate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 4);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myupdate() {

    }

    public void mywebcustomized() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[5]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mywebcustomizedcustomform() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mywebblog() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[6]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydesignbanner() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[1]/div/div/div[2]/div/div[8]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myimageformat() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_banner\"]/div[1]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_social_plan_output"]/div[3]/div[2]/div/div/div[3]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_banner\"]/div[1]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myadformat(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_ad\"]/div[3]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_ad\"]/div[3]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydesignsocialcoveradaption() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myplatform() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[1]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_social_report"]/div[3]/div/div/div[3]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_')]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_social_asset_creation"]/div[1]/div/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydesignsocialpostjpeg() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_task\"]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mymedia() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_social_post\"]/div[1]/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_social_post\"]/div[1]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialmediapostcampaignrelated() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myplatormtoconsider(UIElement platform) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void myrequirements(UIElement requirement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[3]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_audit\"]/div[3]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialplan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mysocialplancategory() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialplancategory2() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_social_plan"]/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_social_plan"]/div[1]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void mysocialplantheme(UIElement uiElement) {

        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div/div[4]/div/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void mysocialplanhashtags(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div/div[5]/div/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialplantheme2(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[4]/div/div/div[2]"))).click().perform();//*[@id="new_client_social_plan"]/div[1]/div[2]/div/div[1]/div[4]/div/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void mysocialplanhashtags2(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[5]/div/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytheme() {

        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_socialpost"]/div[1]/div[1]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
    }

    public void mysocialplanimageformat() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[3]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mystructure() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();

    }

    public void mytonesofvoice() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[3]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();

    }


    public void mytypeaction() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[1]/div/div/div[1]"))).click();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        act.sendKeys("Testing");
        act.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[1]/div/div/div[2]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialmediapostpromotion() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[7]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypromotionstartdate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);

    }

    public void mypromotionenddate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);

    }

    public void mysocialmediareport() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[1]/div/div/div[2]/div/div[6]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialmediareportcampaign() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_social_task\"]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialplatform() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_social_report_')]/div[3]/div/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_social_report_')]/div[3]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseosubmissionblogpost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseosubmissionlisting() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_task\"]/div[2]/div[2]/div/div/div[2]/div/div[5]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mykeywords(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_submission_output\"]/div[2]/div/div/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseoproduct(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Runwal");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_seo_plan')]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }

    public void mykeywordsoffocus(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Runwal");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_plan_output\"]/div[5]/div[2]/div/div/div[3]/div/div/div/div[2]"))).click().perform();
    }

    public void mycategoryseo() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_plan_output\"]/div[6]/div[2]/div/div/div[3]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[7]/div[2]/div/div/div[3]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_plan_output\"]/div[6]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_social_asset_creation"]/div[1]/div/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytypesame(UIElement uiElement, String arg0) {
        List<WebElement> webLocators = driver.findElements(By.xpath("//*[contains(@id,'_url')]"));
        webLocators.get(3).sendKeys("www.google.com");
    }

    public void mytypesameagain(UIElement uiElement, String arg0) {
        List<WebElement> webLocators = driver.findElements(By.xpath("//*[contains(@id,'_url')]"));
        webLocators.get(4).sendKeys("www.google.com");
    }

    public void mycategoryseooutput() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_plan_output\"]/div[7]/div[2]/div/div/div[3]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[7]/div[2]/div/div/div[3]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_plan_output\"]/div[7]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_social_asset_creation"]/div[1]/div/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseocompetition(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_plan_output\"]/div[7]/div[2]/div/div/div[3]/div[2]/div/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myseokeywordscroll(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.click();
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,4000)", "");
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mytypesamekeyword(UIElement uiElement, String arg0) {
        List<WebElement> webLocators = driver.findElements(By.xpath("//*[contains(@id,'_keyword')]"));
        webLocators.get(3).sendKeys("Testing");
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void myseorequirements(UIElement req) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_audit\"]/div[1]/div/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_seo_audit\"]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mymediaplancampaign(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_media_plan_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_media_plan_task\"]/div[2]/div[1]/div/div/div[2]/div/div"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycampaignenddate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void mymarketingbrief() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_design_social_post"]/div[1]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[2]/div/div"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mydeptmarketing() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[5]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mymarketingoffers(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_brief_output\"]/div[3]/div/div/div/div/div/span/a/i"))).click().perform();
    }

    public void mymarketingguidelines(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_brief_output\"]/div[4]/div/div/div/div/div/span/a/i"))).click().perform();
    }

    public void mymarketingcompetitor(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_brief_output\"]/div[7]/div[2]/div/div/div[2]/div[1]/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mymarketingproject(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_brief_output\"]/div[7]/div[2]/div/div/div[2]/div[2]/div/div/div[2]"))).click().perform();
    }

    public void mydeptpaidmedia() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[6]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypaidmediaexecution() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypaidmediareport() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mypaidmediareportno() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_report\"]/div[1]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_report\"]/div[1]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myreftask(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        Actions act = new Actions(driver);
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_report\"]/div[2]/div[2]/div/div[1]/div/div/div[2]"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void mypaidmediareportstartdate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void mypaidmediareportenddate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void mydeptfinance() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div/div[2]/div/div[3]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myattendees(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Shahbaz");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_meeting\"]/div[4]/div[1]/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Riddhi");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_meeting\"]/div[4]/div[1]/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_meeting\"]/div[3]/div[2]/div/div/div[1]"))).click().perform();

//        action.moveToElement(driver.findElement(by)).click();
//        action.sendKeys("");
//        action.perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_meeting\"]/div[4]/div[1]/div/div/div[2]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void myscheduleon(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 2);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void mycopyideaminimumconcepts(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_idea\"]/div[3]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_idea\"]/div[3]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycopyideareasonsofinterest(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_idea\"]/div[5]/div/div/div/div/div/input"))).click();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        act.sendKeys("Testing reason of interest");
        act.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_idea\"]/div[5]/div/div/div/div/div/span/a/i"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycopyideablogsuggestions(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_idea_output\"]/div[3]/div/div/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentemailer() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentmetadescription() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[5]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentreviewforum() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[6]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentseoplan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[7]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentwikipediapage() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[9]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentprintmedia() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[11]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentwebsite() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[12]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentblogpostarticle() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentusps(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[5]/div/div/div/div/div/span/a/i"))).click().perform();//*[@id="new_client_content_ad_communication"]/div[1]/div/div/div/span/a/i
    }

    public void mycontentkeywordstofocuson(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[6]/div/div/div/div/div/span/a/i"))).click().perform();

    }

    public void mycontenttonality() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_content_socialpost"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentsocialpostjpegpost() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontenttheme() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[1]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[1]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentsocialposttonality() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_content_')]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_emailer"]/div[2]/div[1]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_content_')]/div[2]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontenttags(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[1]"))).click().perform();//*[@id="new_client_design_website"]/div[4]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_socialpost\"]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentemailersales() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentseoplanonpage() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentplannedpostcount() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[1]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[1]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentreflinks(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("www.google.com");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[2]/div/div/div/span/a/i"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }

    public void mycontentseoplankeywords(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[3]/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing SEO");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[3]/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing Content SEO");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[3]/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing Content SEO Plan");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[3]/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing Content SEO keyword");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[3]/div/div/div/span/a/i"))).click().perform();
    }

    public void mycontentkeywords() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan_output\"]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_content_case_study"]/div[2]/div[1]/div/div/div/div/input
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan_output\"]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentadusps(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_ad_communication\"]/div[1]/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentadtags(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_ad_communication\"]/div[4]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontenthoardinghoarding() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontenthoardingtonality() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontenthoardingtags() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[2]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_hoarding\"]/div[4]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentcta() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_content_')]/div[2]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_content_website_output"]/div[2]/div/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_content_')]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_content_')]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'new_client_content_')]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void mycontentreferencelink(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("www.google.com");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_wikipedia_page\"]/div[3]/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentprintmediabrochure() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentprintmediatonality() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_print_medium\"]/div[1]/div/div/div/div[1]"))).click().perform();//*[@id="new_client_development_task"]/div[2]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_print_medium\"]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_print_medium\"]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_print_medium\"]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_print_medium\"]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentprintmediausp(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_print_medium\"]/div[4]/div/div/div/div/div/span/a/i"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentwebsitesinglescroll() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentsitemapsinglepage() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myclientforproject(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Runwal");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"assignment-form-modal\"]/div/div/div[2]/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myprojecttype() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[2]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        ---------For Brand----------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        ---------For Product----------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[2]/div/div/div/div[1]"))).click();
//        act.sendKeys("Isle");
//        act.perform();
//        Actions action = new Actions(driver);
//        action.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void myprojectduedate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 8);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myprojectwebsitedesign() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[5]/div[2]/div/div/div[1]"))).click().perform();//*[@id="new_client_campaign_assignment"]/div[5]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        -----------For New Website---------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[5]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        -----------For Changes to Existing---------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[5]/div[2]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//      -------------For Use Template----------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[5]/div[2]/div/div/div[2]/div/div[3]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        -------------For Use Existing-----------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[5]/div[2]/div/div/div[2]/div/div[4]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

    }

    public void myprojectcampaignstartdate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 11);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]

    public void myprojectcampaignenddate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 11);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }


    public void mycontentwebsitetags() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_website\"]/div[1]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_website\"]/div[1]/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {

        }
    }

    public void mycontentwebsitetonality() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_website\"]/div[2]/div/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_website\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {

        }

    }

    public void mycontentwebsiteusps(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_website\"]/div[5]/div/div/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

//    public void mydashboard(UIElement uiElement) {
//        List<WebElement> foundItems = By.className("className").findElements(driver);
//        int count = driver.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div/div[1]/div[1]/a/span[1]")).size();
//        System.out.println(count);
//    }

    public void mydashboard() {
        List<WebElement> listElement = driver.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div/div[1]/div[1]/a/span[1]"));//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/a/span[1]
        for (int i = 0; i < listElement.size(); i++) {
            String elementText = listElement.get(i).getText();
            System.out.println(" ");
            System.out.println("Overdue Tasks:" + elementText);
            System.out.println(" ");
        }

    }

    public void mycontentmetadescriptionkeywords(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_meta_description\"]/div[1]/div[2]/div/div/div[4]/div/div/div/div/span/a/i"))).click().perform();//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mycontentblogpostcta() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost_output\"]/div[2]/div/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_blogpost_output\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void mysocialplanorm(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myloginmessage() {
        System.out.println("Login successfully");
    }

    public void mycountdesign() {
        String result = driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[1]/span[1]")).getText();
        System.out.print("\n");

        List<WebElement> r = driver.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div"));
        List<ArrayList<String>> rowsData = new ArrayList<ArrayList<String>>();

        for (WebElement row : r) {
            List<WebElement> rowElements = row.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]"));

            ArrayList<String> rowData = new ArrayList<String>();

            for (WebElement column : rowElements) {
                rowData.add(column.getText().toString());
            }


            rowsData.add(rowData);
        }
        System.out.println("Row data:" + rowsData);
    }

    public void mycountunassigned() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String result = driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[6]/span[1]")).getText();//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[6]/span[1]
        System.out.println("\n");
        System.out.println("Count of an unassigned tasks:" + result);
    }

    public void myinputsaved() {
        System.out.println("\n");
        System.out.println("Input has been saved successfully");
    }

    public void mydepartment() {
    }

    public void myscreenshot2(UIElement uiElement) {
//        driver.findElement(By.xpath("//*[@id=\"new_client_development_customized_requirement_output\"]/div[4]/div/div/input")).click();
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//        try {
//            FileUtils.copyFile(scrFile, new File("/home/amuraqa/Desktop/Software/Screenshot/screenshot.png"));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        {
//            File scr = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//            String filename =  new SimpleDateFormat("yyyyMMddhhmmss'.txt'").format(new Date());
//            File dest = new File("/home/amuraqa/Desktop/Software/Content-Screenshot/" + filename);
//            try {
//                FileUtils.copyFile(scr, dest);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
    }

    public void myusername() {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String password;
        System.out.println("Please Enter the user password :: ");
        try {
            password = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        driver.findElement(By.xpath("//*[@id=\"user_email\"]")).sendKeys("password");
    }


    public void myssl() {
        DesiredCapabilities handlSSLErr = DesiredCapabilities.chrome();
        handlSSLErr.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
//        WebDriver driver = new ChromeDriver (handlSSLErr);
    }

    public void mycount() {

    }

    public void mypublished(UIElement uiElement) {

    }

    public void myPriority(UIElement uiElement) {
        List<WebElement> list = driver.findElements(myFindBy(uiElement));
        for (WebElement priority : list
                ) {
            System.out.println("Tag is:" + priority.getText());
        }
    }

    public void myOverdue(UIElement uiElement) {
        List<WebElement> r = driver.findElements(By.xpath("//*[@id=\"fltrs_due_date\"]"));
        List<ArrayList<String>> rowsData = new ArrayList<ArrayList<String>>();
        for (WebElement row : r) {
            List<WebElement> rowElements = row.findElements(By.xpath("//*[@id=\"fltrs_due_date\"]"));

            ArrayList<String> rowData = new ArrayList<String>();

            for (WebElement column : rowElements) {
                rowData.add(column.getText());
            }
            rowsData.add(rowData);
        }
        System.out.println("Row data:" + rowsData);


//        List <WebElement> list = driver.findElements(myFindBy(uiElement));
//        for (WebElement overdue : list
//                ) {
//            System.out.println("Date range is:" + overdue.getText());
//        }
    }

    public void myBandwidth() {
        List<WebElement> r = driver.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[4]/div"));
        List<ArrayList<String>> rowsData = new ArrayList<ArrayList<String>>();
        for (WebElement row : r) {
            List<WebElement> rowElements = row.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[4]/div"));

            ArrayList<String> rowData = new ArrayList<String>();

            for (WebElement column : rowElements) {
                rowData.add(column.getText());
            }
            rowsData.add(rowData);
        }
        System.out.println("Row data:" + rowsData);
    }

    public void myBillingMethod() {

//        String billing = "Amura Credit Line";
//        if (billing.equals("Amura Credit Line"))
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[3]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//            --------For Amura Credit Line----------------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//
//        }
//            --------For Client Credit Card------------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[3]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }

//            ------------For Client Credit Line----------
//            act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_assignment\"]/div[1]/div[3]/div/div/div[2]/div/div[3]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
//            try {
//                Thread.sleep(1000);
//            } catch (InterruptedException e) {
//
//            }

    }

    public void myPublisher(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_media_plan_campaign_output\"]/div[4]/div[2]/div/div/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_media_plan_campaign_output\"]/div[4]/div[2]/div/div/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {

        }
    }

    public void myInvoiceReceived(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 1);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myViewDetails() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/a/i"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/ul/li[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myTags() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_design_website\"]/div[4]/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myGrantAccess() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_execution\"]/div[4]/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_campaign_execution\"]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myPopup() {
        driver.switchTo().alert().accept();
//        driver.navigate().back();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myPopup2() {
        driver.switchTo().alert().accept();
        driver.navigate().back();
        try {
            Thread.sleep(12000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myClick(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myTotalTasks(UIElement uiElement) {
        List<WebElement> list = driver.findElements(myFindBy(uiElement));
        for (WebElement number : list
                ) {
            System.out.println("Number is:" + number.getText());
        }
        System.out.println("\n");
    }

//    public void myBriefChange(UIElement uiElement) {
//        List <WebElement> list = driver.findElements(myFindBy(uiElement));
//        for (WebElement status : list
//                ) {
//            System.out.println("Status is:" + status.getText());
//        }
//
//    }

    public void myStatus(UIElement uiElement) {
        List<WebElement> list = driver.findElements(myFindBy(uiElement));
        for (WebElement status : list
                ) {
            System.out.println("Status is:" + status.getText());
        }
        System.out.println("\n");

//        WebElement fieldName = driver.findElement(By.id("enter_id"));
//        fieldName.sendKeys("abc");
//        String fieldNameVal = fieldName.getAttribute("value");
//        if(fieldNameVal.contentEquals("abc")){
//            System.out.println("Field is editable");
//        }
//        else{
//            System.out.println("Field is non editable" + fieldNameVal);
//        }

    }

    public void myDueToday(UIElement uiElement) {
        List<WebElement> list = driver.findElements(myFindBy(uiElement));
        for (WebElement status : list
                ) {
            System.out.println("Date is:" + status.getText());
        }
        System.out.println("\n");
    }

    //          -------For hidden elements-------------
    public void myEnter(UIElement uiElement, String arg0) {
        int size = driver.findElements(myFindBy(uiElement)).size();
        driver.findElements(myFindBy(uiElement)).get(size - 1).sendKeys("Cancelling the task for testing");
    }

    public void myEnter(UIElement uiElement) {
        int size = driver.findElements(myFindBy(uiElement)).size();
        driver.findElements(myFindBy(uiElement)).get(size - 1).click();
    }

    public void myKeywords(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Testing");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_seo_plan\"]/div[2]/div[2]/div/div/div[3]/div/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReferencedContentEmailer(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_mailer\"]/div[2]/div[2]/div/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_mailer\"]/div[2]/div[2]/div/div[1]/div/div/div[2]/div/div"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myReferencedDesignEmailer(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_mailer\"]/div[3]/div[2]/div/div[1]/div/div/div[1]"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_mailer\"]/div[3]/div[2]/div/div[1]/div/div/div[2]/div/div"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myEnable(UIElement uiElement) {
//        boolean requestChange = driver.findElement(myFindBy(uiElement)).isEnabled();
//        System.out.print(requestChange);
        WebElement requestChange = driver.findElement(myFindBy(uiElement));
        if (requestChange.isEnabled()) {
            System.out.println("\n Button is enabled");
            System.out.println("\n");
            driver.findElement(myFindBy(uiElement)).click();
        } else {
            System.out.println("\n Button is disabled as there might be insufficient and/or rating is less than 4");
            System.out.println("\n");
        }
        try {
            Thread.sleep(12000);
        } catch (InterruptedException e) {
        }
    }

    public void myDisable(UIElement uiElement) {
        WebElement requestChange = driver.findElement(myFindBy(uiElement));
        if (requestChange.isEnabled()) {
            System.out.println("\n Button is enabled and clicked");
            System.out.println("\n");
        } else {
            System.out.println("\n Button is disabled as there might be insufficient info and/or rating is less than 4");
            System.out.println("\n");

        }
    }

    public void myInsuffInfo(UIElement uiElement) {
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {

        }
        driver.findElement(By.xpath("//*[@id=\"client_development_review_review_fields_attributes_0_comments\"]")).sendKeys("Testing the rework feature");
    }

    public void myRework(UIElement uiElement) {
        WebElement rework = driver.findElement(myFindBy(uiElement));
        if (rework.isEnabled()) {
            rework.click();
            System.out.println("Rework is allowed");
            System.out.println("\n");
//            driver.findElement(myFindBy(uiElement)).click();
        } else {
            System.out.println("Rework is not allowed");
            System.out.println("\n");
        }
    }

    public void myReworkEnabled(UIElement uiElement) {
        WebElement requestChange = driver.findElement(myFindBy(uiElement));
        if (requestChange.isEnabled()) {
            driver.findElement(myFindBy(uiElement)).click();
            System.out.println("\n Button is enabled and clicked");
            System.out.println("\n");
        } else {
            System.out.println("\n Button is disabled as there might be insufficient info and/or rating is less than 4");
            System.out.println("\n");
        }
    }

    public void myUsername(UIElement uiElement) {
        try {
            Thread.sleep(12000);
        } catch (InterruptedException e) {
        }
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
    }

    public void myClicking(UIElement uiElement) {
        try {
            Thread.sleep(12000);
        } catch (InterruptedException e) {
        }
        driver.findElement(myFindBy(uiElement)).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
    }

    public void myTask(UIElement uiElement) {
        WebElement task = driver.findElement(myFindBy(uiElement));
//        WebElement task2 = driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[1]/div/nav"));
        if (task.isDisplayed()) {
            System.out.println("Prefix is missing, so not able to find the task");
            System.out.println("\n");
        } else {
            System.out.println("Task is present");
            System.out.println("\n");
        }
    }

    public void myTaskSearch(UIElement uiElement) {
        WebElement task = driver.findElement(myFindBy(uiElement));
        task.sendKeys("RUOM-DSG-27");
        task.sendKeys(Keys.ENTER);
    }

    public void myTaskSearchWithPrefix(UIElement uiElement) {
        WebElement task = driver.findElement(myFindBy(uiElement));
        task.sendKeys("#RUOM-DSG-27");
        task.sendKeys(Keys.ENTER);

    }

    public void myTaskFound(UIElement uiElement) {
        WebElement task = driver.findElement(myFindBy(uiElement));
        if (task.isDisplayed()) {
            System.out.println("Task found");
            System.out.println("\n");
        } else {
            System.out.println("Not present");
            System.out.println("\n");
        }
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
    }

    public void myCancelBrowser() {
        driver.close();
    }

    public void myTitle() {
        String actualTitle = "";
        String expectedTitle = "ihub";
        actualTitle = driver.getTitle();
        String actualURL = "";
        String expectedURL = "http://staging.work.withamura.com/dashboard";
        actualURL = driver.getCurrentUrl();
        if (actualTitle.equalsIgnoreCase(expectedTitle)) {
            System.out.println("Title is matched:" + "\n" + "Expected Title:" + expectedTitle + "\n" + "Actual Title:" + actualTitle);
        } else {
            System.out.println("Title is different");
            System.out.println("Actual Title:" + actualTitle);
        }
        if (actualURL.equalsIgnoreCase(expectedURL)) {
            System.out.println("URL is matched");
        } else {
            System.out.println("URL is different");
            System.out.println("Actual URl is:" + actualURL);
        }
    }

    public void myClientName(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Runwal");
        action.perform();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[2]/div/div[1]"))).click().perform();//*[@id="task-form-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]

    }

    public void myClient(UIElement uiElement) {
        List<WebElement> list = driver.findElements(myFindBy(uiElement));
        for (WebElement client : list
                ) {
            System.out.println("Client Details:" + client.getSize());
            System.out.println("Client Details:" + client.getText());
        }

//        -------For showing all the data from the dropdown-----------
//        WebElement dropdown = driver.findElement(By.xpath(""));
//        List<WebElement> options = dropdown.findElements(By.tagName("option"));
//        Iterator<WebElement> it=options.iterator();
//        while(it.hasNext())
//        {
//            System.out.println(it.next().getAttribute("Value"));
//        }
    }

    public void myClientRealEstate(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Real Estate");
        action.perform();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[2]/div/div[2]/div/div[1]"))).click().perform();//*[@id="task-form-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]

    }


    public void myRealEstateClientsDetails(UIElement uiElement) {
        System.out.println("Values are:");
        System.out.println("\n");
        List<WebElement> rows = driver.findElements(myFindBy(uiElement));
        for (WebElement clients : rows
                ) {
            List<WebElement> cells = clients.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr/td"));
            for (WebElement cell : cells
                    ) {
//                System.out.println("Size is:");
//                System.out.println("\n");
//                System.out.println(cell.getSize());
                System.out.println(cell.getText());
            }
        }
    }

    public void myActiveClients(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Active");
        action.perform();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[4]/div/div[2]/div/div[1]"))).click().perform();//*[@id="task-form-modal"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]

    }

    public void myActiveClientsDetails(UIElement uiElement) {
        System.out.println("Details:");
        System.out.println("\n");
        List<WebElement> rows = driver.findElements(myFindBy(uiElement));
        for (WebElement clients : rows
                ) {
            List<WebElement> cells = clients.findElements(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr/td"));
            for (WebElement cell : cells
                    ) {
                System.out.println(cell.getText());
            }
        }
    }

    public void myLogin(String arg0, String arg1) {
        driver.findElement(By.id("user_email")).sendKeys(arg0);
        driver.findElement(By.id("user_password")).sendKeys(arg1);
    }

    public void myDetails(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/ul/li[1]/a"))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div[1]/table/tbody/tr/td[5]/div/ul/li[2]/a
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //    ---------For adding a user as SOR--------------
    public void mySOR(UIElement uiElement) {
        Actions action;
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Akshay Patil");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[13]/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="edit_client_content_task_5a5739928ec6295a6b4de3f7"]/div[13]/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //    --------For assigning an order to the SOR------------
    public void mySOROrder(UIElement uiElement) {
        Actions action;
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("2");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[contains(@id,'edit_client_')]/div[13]/div[2]/div[1]/div[2]/div[2]/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMessage() {
        System.out.println("SOR and order has been assigned");
    }

    public void myDueDate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 1);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myCampaignAssignee(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Smita");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"task-form-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div[2]"))).click().perform();
    }

    public void myContentCaseStudy() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();//*[@id="new_client_campaign_assignment"]/div[5]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_task\"]/div[2]/div[1]/div/div/div[2]/div/div[15]"))).click().perform();//*[@id="new_client_campaign_assignment"]/div[5]/div[2]/div/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myContentCaseStudyKeywords(UIElement uiElement) {

        Actions act = new Actions(driver);

//          -------For first keyword-------
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click();//*[@id="new_client_development_task"]/div[2]/div[1]/div/div/div[1]
        act.sendKeys("Testing");
        act.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_case_study\"]/div[2]/div[1]/div/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          --------For second keyword------------
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        act.sendKeys("Testing 2");
        act.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_case_study\"]/div[2]/div[1]/div/div/div/div/span/a/i"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          -------------for third keyword-------
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click();
        act.sendKeys("Testing 3");
        act.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_content_case_study\"]/div[2]/div[1]/div/div/div/div/span/a/i"))).click().perform();

    }

    public void myContentEmailerTonality() {

    }

    public void myWebDevelopmentHTMLFive() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[2]/div/div[7]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myWebHTMLToolUsed(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_development_html_five_ad_output\"]/div[1]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReportGroupBy(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          -------For selecting 'Department' as Group by-----------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report_format\"]/div[2]/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMetricName(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//          ---------For selecting 'Calculate count for tasks' as Metric Name--------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report_format\"]/div[3]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[7]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myCalculateBy(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          ---------For selecting 'Sum' as Value for 'Count of tasks'--------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report_format\"]/div[3]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //      --------------Report Date Range Field----------
    public void myReportDateRangeField(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        ----------Due Date as 'Date range field'--------------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report\"]/div[1]/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          ------------Creator Due Date as 'Date range field'--------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report\"]/div[1]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          ------------Published At as 'Date range field'------------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report\"]/div[1]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    //          -----------Report Date Range Field Value------------
    public void myReportDateRangeFieldValue(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          -----------------Today as the 'Date range field value'--------
//        act.moveToElement(driver.findElement(By.xpath("/html/body/div[9]/div[3]/ul/li[1]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

//        -----------------Yesterday as the 'Date range field value'--------
//        act.moveToElement(driver.findElement(By.xpath("/html/body/div[9]/div[3]/ul/li[2]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

//         -------------- This week as the 'Date range field value'--------
//        act.moveToElement(driver.findElement(By.xpath("/html/body/div[9]/div[3]/ul/li[4]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

        //         -------------- This month as the 'Date range field value'--------
        act.moveToElement(driver.findElement(By.xpath("/html/body/div[9]/div[3]/ul/li[6]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReportFilterDepartment(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//              ----------Content as 'Department'-------------
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_report\"]/div[2]/div/div[1]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReportGeneratelink(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/ul/li[3]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void myReportShow(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/ul/li[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void myReportAllReports(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/ul/li[5]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReportBuild(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/ul/li[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReportData() {
//          ----------Locate table----------
        WebElement table = driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div/div/table"));//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div/div
//          -----------Locate rows of table---------
        List<WebElement> rows = table.findElements(By.tagName("tr"));

//          ------- Calculate number of rows In table-------
        int rows_count = rows.size();

//          ------Execute loop till the last row of table--------
        for (int row = 0; row < rows_count; row++) {

            //  ---------Locate columns(cells) of that specific row--------------
            List<WebElement> columns_row = rows.get(row).findElements(By.tagName("td"));

            //  ---------Calculate number of columns(cells) in that specific row----------
            int columns_count = columns_row.size();
            System.out.println("Number of cells In Row " + row + " are " + columns_count);

            //  ---------Loop will execute till the last cell of that specific row--------
            for (int column = 0; column < columns_count; column++) {

                //      ----------Retrieve text from that specific cell---------
                String celtext = columns_row.get(column).getText();
                System.out.println("Cell Value of row number " + row + " and column number " + column + " Is " + celtext + "\n");
            }
            System.out.println("-------------------------------------------------- ");
        }
    }

    public void myMarketingWorkReview() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[2]/div/div[4]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myReviewStartDate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 1);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myReviewEndDate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 2);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);

    }

    public void myReviewAttendees(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Shahbaz");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_work_review\"]/div[3]/div/div[2]/div/div"))).click().perform();

    }

    public void myGenerateNewExport(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div/table/tbody/tr[1]/td[5]/div/ul/li[3]/a"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myExportDateRangeField(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //      -------For status-------------
    public void myExportStatus(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          --------For 1st status---
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          ---------For 2nd status-----
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //      ---------For department filter--------------
    public void myExportDepartment(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          --------For content-----
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[1]/div/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();

        }
    }

//          -------For downloading the exports----
    public void myExportDownload(UIElement uiElement) {
        try {
            Thread.sleep(22000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.navigate().refresh();
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          --------For content-----
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr/td[6]/div/ul/li[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();

        }
    }

    public void myMarketingPlan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          --------For content-----
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[2]/div/div[3]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();

        }
    }

    public void myMarketingMonthlyPlan() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//          --------For content-----
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();

        }
        
    }

//      ---------------------For selecting Rework in the filters of the export------
    public void myExportRework(UIElement uiElement) {
        Actions act = new Actions(driver);

//          --------For selecting 'Yes'--------------
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

////        --------For selecting 'No'--------------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[10]/div/div/label[2]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
////        --------For selecting 'Both'--------------
//        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[10]/div/div/label[3]"))).click().perform();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

    public void myMarketingReport() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingReportMonthlyReport() {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[2]/div/div/div[1]"))).click().perform();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_task\"]/div[2]/div[2]/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingReportSEOReportRef(UIElement uiElement) {
//        WebElement element = driver.findElement(myFindBy(uiElement));
//        Actions actions = new Actions(driver);
//        Action builder = actions
//                .moveToElement(element)
//                .click()
//                .sendKeys("Testing delivered")
//                .sendKeys(Keys.ENTER)
//                .build();
      Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.sendKeys("Testing delivered");
        action.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_report\"]/div[2]/div[2]/div/div/div/div/div[2]/div/div"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingReportSocialReportRef(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.sendKeys("Testing delivered");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_report\"]/div[3]/div[2]/div/div/div/div/div[2]/div/div[1]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingReportCampaignReportRef(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.sendKeys("Testing delivered");
        action.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_report\"]/div[4]/div[2]/div/div/div/div/div[2]/div/div"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingPlanStartDate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myMarketingPlanEndDate(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, 0);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myMarketingPlanSEORef(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.sendKeys("Testing delivered");
        action.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_plan\"]/div[2]/div[2]/div/div/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingPlanSocialRef(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.sendKeys("Testing delivered");
        action.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_plan\"]/div[3]/div[2]/div/div/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingPlanMeetingRef(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click().perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        action.sendKeys("Testing completed");
        action.perform();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_client_marketing_plan\"]/div[4]/div[2]/div/div/div/div/div[2]"))).click().perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void myMarketingWorkReviewClientMeeting(UIElement uiElement) {
        By by = myFindBy(uiElement);
        WebElement element = driver.findElement(by);
        element.clear();
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/YYYY");
        Date dt = new Date();
        Calendar cl = Calendar.getInstance();
        cl.setTime(dt);
        cl.add(Calendar.DAY_OF_YEAR, -2);
        dt = cl.getTime();
        String str = df.format(dt);
        element.sendKeys(str);
    }

    public void myProductExportDateRangeField(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[2]/div[1]/div/div/div[2]/div/div[2]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myProductExportStage(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//          ------For selecting multiple stages---
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_export"]/div[3]/div/div[1]/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_export"]/div[3]/div/div[1]/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[1]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_export"]/div[3]/div/div[1]/div/div/div[2]/div/div[1]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myProductExportClient(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[3]/div/div/div[2]/div/div[7]"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myProductExportCreator(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Shahbaz");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[2]/div/div"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }

    public void myClientExportsDateRange(UIElement uiElement) {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(myFindBy(uiElement))).click().perform();//*[@id="page-content-wrapper"]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/button/i
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[2]/div[1]/div/div/div[2]/div/div"))).click().perform();//*[@id="edit_client_campaign_assignment_59ae4a625461f40e8410cb3f"]/div[4]/div/div[2]/div/div[2]
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
    }

    public void myClientExportsCategory(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("A");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[2]/div/div/div[2]/div/div"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }

    public void myClientExportsBusinessVertical(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("R Estate");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[3]/div/div/div[2]/div/div[1]"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }


    
    public void myClientExportsManager(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Jasmine");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[2]/div/div"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }
    public void myClientExportsExecutive(UIElement uiElement) {
        Actions action;     // Action class to find the element
        {
            action = new Actions(driver);
        }
        By by = myFindBy(uiElement);
        action.moveToElement(driver.findElement(by)).click();
        action.sendKeys("Shahbaz");
        action.perform();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"new_export\"]/div[3]/div/div[5]/div/div/div[2]/div"))).click().perform();//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[2]/div/div[1]

    }
}