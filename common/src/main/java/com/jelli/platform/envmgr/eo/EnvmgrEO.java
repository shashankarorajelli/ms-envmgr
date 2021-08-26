package com.jelli.platform.envmgr.eo;

import java.util.HashMap;

public class EnvmgrEO {

	public String jobName;
	public HashMap<String, Object> hashMap = new HashMap<>();

	public EnvmgrEO(String jobName, HashMap<String, Object> params) {
		this.jobName = jobName;
		this.hashMap = params;
	}
}