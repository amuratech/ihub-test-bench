package org.selenium.iHub.steps;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.Utils;
import org.apache.commons.io.FileUtils;
import org.junit.Test;
import org.junit.experimental.ParallelComputer;
import org.junit.runner.JUnitCore;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.selenium.iHub.driver.TestDriver;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.screentaker.ViewportPastingStrategy;
import cucumber.api.Scenario;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.openqa.selenium.OutputType.BYTES;
import static org.selenium.iHub.driver.TestDriver.driver;

/**
 * Created by amuraqa on 2/11/17.
 */
public class AutomationHooks {

    @Before
    public void beforeRunning(Scenario scenario) {

        System.out.println("Running scenario:- " + scenario.getName());
        System.out.println("\n");
    }

    @Test
    public void OnRunning(Scenario status) {
//        String nodeURL = "http://192.168.0.176:4444/wd/hub";
//        if (myBrowser.equals("firefox")){
//        DesiredCapabilities caps = DesiredCapabilities.firefox();
//        caps.setPlatform(Platform.LINUX);
//        caps.setBrowserName("firefox");
//            try {
//                driver = new RemoteWebDriver(new URL(nodeURL), caps);
//            } catch (MalformedURLException e) {
//                e.printStackTrace();
//            }
//        }
//        else if (myBrowser.equals("chrome")){
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


//    @After
    public void afterRunning(Scenario scenario) {
//            ---------For screenshot-------
//            {File scr = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
////            String filename =  new SimpleDateFormat("yyyyMMddhhmmss'.txt'").format(new Date());
//            File dest = new File("/home/amuraqa/Desktop/Software/Screenshot/Content/ContentPrintMedia/" + scenario.getName());
//            try {FileUtils.copyFile(scr, dest);
//                      } catch (IOException e) {e.pr   intStackTrace();}

//
//        driver = new Augmenter().augment(driver);

//          --------For embeding screenshot in the cucumber report-----------
//        try {
//            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
//            scenario.embed(screenshot, "image/png");
//        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
//            System.err.println(somePlatformsDontSupportScreenshots.getMessage());
//        }

//        TakesScreenshot camera = (TakesScreenshot) driver;
//        byte[] screenshots = camera.getScreenshotAs(BYTES);
//        scenario.embed(screenshots, "image/png");

//        --------For screenshot of full page----------
        final Screenshot screenshot = new AShot().shootingStrategy(
                new ViewportPastingStrategy(500)).takeScreenshot(driver);
        final BufferedImage image = screenshot.getImage();
        String filename = new SimpleDateFormat("yyyy.MM.dd G 'at' HH:mm:ss z").format(new Date());
        try {
            ImageIO.write(image, "PNG", new File("/home/amuraqa/Desktop/Software/Screenshots/iHub/Assignment-Marketing-Brief" +
                    filename + " " + scenario.getName()));
        } catch (IOException e) {
            e.printStackTrace();
        }

//        scenario.write("Page source:" + Utils.htmlEscape(driver.getPageSource()));
        scenario.write("Current URL:" + driver.getCurrentUrl());
//        driver.close();
//        driver.navigate().to("http://staging.work.withamura.com/");
    }
}

