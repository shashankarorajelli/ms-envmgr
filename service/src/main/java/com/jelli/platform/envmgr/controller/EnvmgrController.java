package com.jelli.platform.envmgr.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.jelli.platform.envmgr.service.EnvmgrService;

@Slf4j
@Service
@RefreshScope
@Path("/v1/envmgrs")
@Tag(name = "envmgrs", description = "Sample controller")
public class EnvmgrController {

	@Autowired
	private EnvmgrService envmgrService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Operation(summary = "Sample GET", tags = { "envmgrs" })
	public String envmgr() {
		return envmgrService.getHello();
	}
}
