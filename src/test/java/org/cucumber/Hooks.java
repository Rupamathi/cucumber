package org.cucumber;

import org.base.BaseClass;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	BaseClass b = new BaseClass();
	@Before
	public void launchUrl() {
		b.launchUrl("https:/www.google.com");
		 
		   
		 }
	@After
	public void exist() {
		
		b.exist();
	}

}
