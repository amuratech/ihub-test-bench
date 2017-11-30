package org.selenium.iHub.steps;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
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

import static org.selenium.iHub.driver.TestDriver.driver;

/**
 * Created by amuraqa on 2/11/17.
 */
public class AutomationHooks {

    @Before
    public void beforeRunning(Scenario scenario) {
        System.out.println("Running scenario :- " + scenario.getName());
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

    @Test
    public void OnRunning(Scenario status) {
        System.out.println("Running status :- " + status.getStatus());
        Class<?>[] classes = {TestDriver.class};

        // ParallelComputer(true,true) will run all classes and methods
        // in parallel.  (First arg for classes, second arg for methods)
        // I set true, true this means classes and methods runs in parallel.
        JUnitCore.runClasses(new ParallelComputer(true, true), classes);
    }


    @After
    public void afterRunning(Scenario scenario) {
//            ---------For screenshot-------
//            {File scr = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
////            String filename =  new SimpleDateFormat("yyyyMMddhhmmss'.txt'").format(new Date());
//            File dest = new File("/home/amuraqa/Desktop/Software/Screenshot/Content/ContentPrintMedia/" + scenario.getName());
//            try {FileUtils.copyFile(scr, dest);
//                      } catch (IOException e) {e.pr   intStackTrace();}

//            --------For screenshot of full page----------
        driver = new Augmenter().augment(driver);
        final Screenshot screenshot = new AShot().shootingStrategy(
                new ViewportPastingStrategy(500)).takeScreenshot(driver);
        final BufferedImage image = screenshot.getImage();
        String filename = new SimpleDateFormat("yyyy.MM.dd G 'at' HH:mm:ss z").format(new Date());
        try {
            ImageIO.write(image, "PNG", new File("/home/amuraqa/Desktop/Software/Screenshot/Project/Testing-Files/" +
                    filename + " " + scenario.getName()));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}

