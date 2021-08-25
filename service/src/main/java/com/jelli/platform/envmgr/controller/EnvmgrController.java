package com.jelli.platform.envmgr.controller;

import com.jelli.platform.envmgr.service.EnvmgrService;
import io.github.kev1nst.jenkins.job.po.BuildStatus;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Map;

@Slf4j
@Service
@RefreshScope
@Path("/v1")
@Tag(name = "envmgrs", description = "Environment Manager controller")
public class EnvmgrController {

	@Autowired
	private EnvmgrService envmgrService;

	//TODO: fix swagger issue due to post api.
	@POST
	@Path("/buildWithParameter")
	@Consumes(MediaType.APPLICATION_JSON)
	@Operation(summary = "Build Jenkins job with paramter", tags = { "envmgrs" })
	public BuildStatus buildWithParameter(@Parameter(required = true) @QueryParam("jobName") String jobName,
			@QueryParam("params") @Parameter(required = true) Map<String, Object> params) {

		return envmgrService.buildWithParameter(jobName, params);
	}

	@GET
	@Path("/jobs")
	@Produces(MediaType.APPLICATION_JSON)
	@Operation(summary = "GET all jenkins jobs", tags = { "envmgrs" })
	public String getJobs() {
		return envmgrService.getJobs();

	}

}
