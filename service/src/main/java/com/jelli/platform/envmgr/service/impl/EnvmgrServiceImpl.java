package com.jelli.platform.envmgr.service.impl;

import com.jelli.platform.envmgr.repository.EnvmgrRepository;
import com.jelli.platform.envmgr.service.EnvmgrService;
import io.github.kev1nst.jenkins.Jenkins;
import io.github.kev1nst.jenkins.common.Constant;
import io.github.kev1nst.jenkins.common.JenkinsException;
import io.github.kev1nst.jenkins.common.Log4j2Adapter;
import io.github.kev1nst.jenkins.job.po.BuildStatus;
import org.nutz.http.Header;
import org.nutz.http.Http;
import org.nutz.http.Response;
import org.nutz.log.Logs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.Map;

@Service
public class EnvmgrServiceImpl implements EnvmgrService {

	static {
		System.setProperty("log4j.configurationFile", "log4j2.xml");
		Logs.setAdapter(new Log4j2Adapter());
	}

	private static final String QUERYSTRING = "?pretty=true";
	private static final String UTF_8 = "utf-8";

	private int timeout = 10000;
	private EnvmgrRepository envmgrRepository;

	protected Jenkins JENKINS;
	protected String API_CONTEXT_PATH;
	private Header header;

	// TODO: fix property expansion from pom, some weird issue their.
//	@Value("${jenkins.url}")
	private String jenkinsUrl;
//	@Value("${jenkins.user}")
	private String account;
//	@Value("${jenkins.token}")
	private String token;
//	@Value("${jenkins.context.path}")
	private String contextPath;
//	@Value("${jenkins.api.response.type}")
	private String responseType;

//	@Autowired
	public EnvmgrServiceImpl(EnvmgrRepository envmgrRepository) {
		this.envmgrRepository = envmgrRepository;
	}

	@Autowired
	public EnvmgrServiceImpl() {
		this.jenkinsUrl = "https://jenkins-1.ci.jelli.net/"; // jenkinsUrl;
		this.account = "sarora"; // account;
		this.token = "115b50a45c767a9c758345a566d98ae532";// token;
		this.contextPath = "api";// contextPath;
		this.responseType = "json"; // responseType;

		this.JENKINS = Jenkins.connect(this.jenkinsUrl, this.account, this.token);
		this.API_CONTEXT_PATH = this.contextPath + '/' + this.responseType;

		if (!this.responseType.equals("xml")) {
			this.API_CONTEXT_PATH += QUERYSTRING;
		}
		Header header = Header.create();

		String auth = null;
		try {
			auth = new String(
					Base64.getEncoder().encode(String.format("%s:%s", this.account, this.token).getBytes(UTF_8)),
					UTF_8);
		} catch (UnsupportedEncodingException e) {
			throw new JenkinsException(e);
		}
		header.addv(Constant.AUTHORIZATION, "Basic " + auth);
		this.header = header;
	}

	public String getHello() {
		return envmgrRepository.getHello();
	}

	public String getJobs() {

		Response res = Http.get(this.jenkinsUrl + this.API_CONTEXT_PATH, this.header, timeout);

		if (!res.isOK()) {

			throw new JenkinsException(
					String.format("fail the connect & authenticate to jenkins %s \\n %s", this.jenkinsUrl, res));

		}

		return res.getContent();
	}

	public BuildStatus buildWithParameter(String jobName, Map<String, Object> params) {

		String queryPath = "job/" + jobName + this.API_CONTEXT_PATH;

		return this.JENKINS.build(queryPath, params).await();
	}
}
