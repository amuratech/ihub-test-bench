package org.selenium.iHub.pages;

import org.selenium.iHub.driver.TestDriver;

import java.net.MalformedURLException;

/**
 * Created by amuraqa on 18/7/17.
 */
public class BasePage {

    TestDriver tDriver;

    public BasePage(){
        if(tDriver == null){
            tDriver = TestDriver.getDriver();
        }
    }

}
