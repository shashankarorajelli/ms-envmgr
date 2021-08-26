package com.jelli.platform.envmgr.service;

import com.jelli.platform.envmgr.model.ProjectDataDO;
import com.jelli.platform.envmgr.model.ProjectDataEO;
import com.jelli.platform.envmgr.model.ProjectsResponse;
import com.jelli.platform.envmgr.persistence.EnvMgrDao;
import com.mongodb.client.FindIterable;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@ComponentScan(basePackages = { "com.jelli.platform.envmgr.persistence" })
public class ProjectDataService {

	@Autowired
	private EnvMgrDao dao;

	public ProjectsResponse getAll() {
		List<ProjectDataDO> found = dao.getAllProjects();

		ProjectsResponse response = new ProjectsResponse();

		for (ProjectDataDO row : found) {
			response.addEntry(row.toExternalObject());
		}
		return response;
	}

	public ProjectDataEO upsertProject(ProjectDataEO project) {

		ProjectDataDO resultObject = dao.upsertProjectData(ProjectDataDO.fromExternalObject(project));
		return resultObject.toExternalObject();

	}

	public ProjectDataEO findProject(String projectKey) {
		return dao.findProjectData(projectKey).toExternalObject();
	}
}
