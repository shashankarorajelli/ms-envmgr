# Jelli Microservice Template

The service is built in Spring Boot. As such I recommend downloading the [Spring Tool Suite (STS)](https://spring.io/tools) extension for Eclipse.

1. Eclipse > File > Import > Maven > Existing Maven Projects
2. Select the root folder
3. Right click the project and select Run As > Spring Boot App
4. Open http://localhost:8080/swagger-ui.html#/

1. Netbeans > Open Project  
2. Select the root folder
3. Right click the project and select Run As > Spring Boot App
4. Open http://localhost:8080/swagger-ui.html#/


In the root directory the following to build and tag the latest image.
```
docker build -t microservice-template .
```

To run locally run:
```
docker run -p 8080:8080 microservice-template
```
Open http://localhost:8080/swagger-ui.html#/

The base package contains a MicroserviceApplication.java file. This is Spring Boot's entry point for the application and provides configuration for the project.
```
@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class })
 ```
 Is currently used to stop Spring Boot from erroring at compile time when looking for a hibernate connection.
 
 Add your jpa properties file (e.g. microservice-jpa.properties)
to your resources folder.(e.g. [path to service]/src/main/resources/microservice-jpa.properties)

If you would like to connect to the phoenix read only database, you can find the phoenix-jpa.properties [here]( https://gojelli.atlassian.net/browse/TO-977?focusedCommentId=53387&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-53387)

Follow the steps in this [doc](https://gojelli.atlassian.net/wiki/spaces/DEV/pages/1573028013/Nexus+Repository+Manager+Setup) to ensure your system has access to our private maven repositories

openapi-configuration included in the resources.  update resourcePackages to only include the package(s) to be scanned by openapi

pom.xml: update profile - external - properties 'integration.test.client.host' to match service dns e.g. https://steelhead.${integration.test.environment}.jelli.net



- First, install [Artillery](https://artillery.io/docs/guides/getting-started/installing-artillery.html): ```npm install -g artillery@latest```
- Start the local project
- Now, you can run ```artillery run --config /service/src/test/resources/artillery/config.yaml /service/src/test/resources/artillery/scenarios/ms-envmgr-perftests.yaml```

Below example, you're mounting your test resources directory containing your Artillery test script to `/scripts` inside the container. 
```
docker run --rm -it -v ${PWD}/service/src/test/resources/artillery:/scripts artilleryio/artillery run -e dev --config /scripts/config.yaml /scripts/scenarios/ms-envmgr-perftests.yaml
```

For running test against lower environment such as `dev`, you may use environment parameter `-e dev`. See environment section described in `artillery/config.yaml` for details. 


[Writing your first performance test](https://artillery.io/docs/guides/getting-started/writing-your-first-test.html)
