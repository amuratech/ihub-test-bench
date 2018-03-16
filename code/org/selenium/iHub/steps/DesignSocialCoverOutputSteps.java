package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.selenium.iHub.pages.DesignSocialCoverOutputPage;

/**
 * Created by amura on 8/3/18.
 */
public class DesignSocialCoverOutputSteps{

    DesignSocialCoverOutputPage dp;

    public DesignSocialCoverOutputSteps(){dp = new DesignSocialCoverOutputPage();}

        @And("^Rate the output- Design Social Cover$")
        public void rateTheOutputDesignSocialCover(){
            dp.rateTheOutputDesignSocialCover();
        }
}
