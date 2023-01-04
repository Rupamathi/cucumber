package org.run;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/resources/mobilesearch"},
		dryRun = false,
		glue="org.cucumber",
		snippets=SnippetType.CAMELCASE,
		monochrome = true,
		plugin = {"html:target","json:target/report.json"}
		
		)
public class TestRunner {

}
