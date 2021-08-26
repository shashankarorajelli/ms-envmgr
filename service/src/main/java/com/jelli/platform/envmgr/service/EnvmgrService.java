package com.jelli.platform.envmgr.service;

import io.github.kev1nst.jenkins.job.po.BuildStatus;

import java.util.Map;

public interface EnvmgrService {

	String getJobs();

	BuildStatus buildWithParameter(String jobName, Map<String, Object> params);
}
