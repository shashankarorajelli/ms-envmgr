package com.jelli.platform.envmgr.controller;

import com.jelli.platform.envmgr.service.NexusService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RefreshScope
@Path("/v1/nexus")
@Consumes("application/json")
@Produces("application/json")
@OpenAPIDefinition(tags = { @Tag(name = "nexus", description = "Environment Manager controller") })
public class NexusController {

	@Autowired
	NexusService nexusService;

	@GET
	@Path("/getArtifactNames")
	@Operation(summary = "Returns a list of artifact names from Nexus", tags = { "nexus" })
	public List<String> getArtifactNames() {
		return nexusService.getArtifactNames();
	}

	@GET
	@Path("/{artifactName}/getReleaseVersions")
	@Operation(summary = "Returns a list of versions for the given artifact name", tags = { "nexus" })
	public List<String> getReleaseVersions(@PathParam("artifactName") String artifactName) {
		return nexusService.getReleaseVersions(artifactName);
	}

	@GET
	@Path("/{artifactName}/getSnapshotVersions")
	@Operation(summary = "Returns a list of snapshot versions for the given artifact name", tags = { "nexus" })
	public Map<String, String> getSnapshotVersions(@PathParam("artifactName") String artifactName) {
		return nexusService.getSnapshotVersions(artifactName);
	}
}
