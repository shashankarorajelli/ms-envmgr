package com.jelli.platform.envmgr.client;

import com.jelli.platform.envmgr.httpClient.ApiClient;

public class OpenApiBasicClient extends ApiClient {

	public OpenApiBasicClient() {
		super();

		setBasePath(getClientPath());
	}

	private String getClientPath() {
		return String.format("%s/api", System.getProperty("integration.test.client.host"));
	}
}
