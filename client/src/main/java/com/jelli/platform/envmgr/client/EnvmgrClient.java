package com.jelli.platform.envmgr.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "ms-envmgr", url = "${ms-envmgr.url:}")
public interface EnvmgrClient {

	@RequestMapping(method = RequestMethod.GET, value = "/api/v1/getJobs", produces = MediaType.APPLICATION_JSON_VALUE)
	String getJobs();

//	@RequestMapping(method = RequestMethod.POST, value = "/api/v1/buildWithParameter", produces = MediaType.APPLICATION_JSON_VALUE)
//	BuildStatus buildWithParameter(String jobName, Map<String, Object> params);
}