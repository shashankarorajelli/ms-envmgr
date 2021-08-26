package com.jelli.platform.envmgr.persistence;

import com.jelli.platform.envmgr.config.MongoConfig;
import com.jelli.platform.envmgr.model.ProjectDataDO;
import com.jelli.platform.envmgr.model.ProjectDataEO;
import com.mongodb.MongoWriteException;
import com.mongodb.WriteError;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.result.InsertOneResult;
import com.mongodb.client.result.UpdateResult;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Slf4j
@Component
public class EnvMgrDao {

	private MongoDatabase database;

	@Autowired
	public EnvMgrDao(MongoConfig config) {
		database = config.getDatabase();
	}

	public List<ProjectDataDO> getAllProjects()
	{
		MongoCollection<ProjectDataDO> collection = database.getCollection(MongoConfig.PROJECT_COLLECTION, ProjectDataDO.class);

		List<ProjectDataDO> projectList = new ArrayList<>();
		collection.find().into(projectList);
		return projectList;
	}

	public ProjectDataDO findProjectData(String projectKey) {
		Document query = new Document();
		query.append("projectKey", projectKey);

		MongoCollection<ProjectDataDO> collection = database.getCollection(MongoConfig.PROJECT_COLLECTION, ProjectDataDO.class);

		FindIterable<ProjectDataDO> found = collection.find(Filters.eq("projectKey", projectKey));
		return found.first();
	}

	public ProjectDataDO upsertProjectData(ProjectDataDO projectDataDO) {
		MongoCollection<ProjectDataDO> collection = database.getCollection(MongoConfig.PROJECT_COLLECTION,
				ProjectDataDO.class);

		// ProjectResponse response = new ProjectResponse();

		Document filter = new Document();
		filter.append("projectKey", projectDataDO.getProjectKey());

		try {
			InsertOneResult insertResult = collection.insertOne(projectDataDO);
			System.out.println(insertResult);
		} catch (MongoWriteException me) {
			WriteError error = me.getError();

			if (Objects.equals(error.getCategory().toString(), "DUPLICATE_KEY")) {
				projectDataDO.setId(null);
				UpdateResult updateResult = collection.replaceOne(filter, projectDataDO);
				System.out.println(updateResult);
			}

		}

		FindIterable<ProjectDataDO> found = collection.find(Filters.eq("projectKey", projectDataDO.getProjectKey()));
		return found.first();



	}

}
