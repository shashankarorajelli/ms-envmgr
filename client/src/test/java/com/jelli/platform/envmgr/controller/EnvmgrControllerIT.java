package com.jelli.platform.envmgr.controller;

import com.jelli.platform.envmgr.httpClient.ApiException;
import com.jelli.platform.envmgr.httpClient.api.EnvmgrsApi;
import com.jelli.platform.envmgr.client.OpenApiBasicClient;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class EnvmgrControllerIT {
	@Test
	public void defaultTestPleaseReplaceMe() throws ApiException {
		EnvmgrsApi api = new EnvmgrsApi(new OpenApiBasicClient());

		String result = api.envmgr();

		Assertions.assertEquals("Hello World!", result, "Api response does not match the canned answer!");
	}
}
