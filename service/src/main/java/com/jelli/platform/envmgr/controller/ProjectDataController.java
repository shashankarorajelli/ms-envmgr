package com.jelli.platform.envmgr.controller;

import com.jelli.platform.envmgr.model.ProjectDataEO;
import com.jelli.platform.envmgr.model.ProjectsResponse;
import com.jelli.platform.envmgr.service.ProjectDataService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Service;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Slf4j
@Service
@RefreshScope
@Path("/v1/projectdata")
@Tag(name = "projectdata", description = "Project Data controller")
public class ProjectDataController {

	@Autowired
	ProjectDataService projectDataService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Operation(summary = "Upsert project data")
	public ProjectDataEO upsertProjectData(ProjectDataEO projectDataEO) {

		return projectDataService.upsertProject(projectDataEO);
	}

	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Operation(summary = "Get all records")
	public ProjectsResponse getAllRecords() {
		return projectDataService.getAll();
	}

	@GET
	@Path("/{project_key}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Operation(summary = "get project data")
	public ProjectDataEO getProjectData(@PathParam("project_key") String projectKey) {
		ProjectDataEO response = projectDataService.findProject(projectKey);
		if (response == null) {
			throw new WebApplicationException(
					"Document not found", Response.Status.NOT_FOUND
			);
		}
		return response;
	}
}
