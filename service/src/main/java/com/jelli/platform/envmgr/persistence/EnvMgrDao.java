package com.jelli.platform.envmgr.persistence;

import com.jelli.platform.envmgr.config.MongoConfig;
import com.jelli.platform.envmgr.model.ProjectDataDO;
import com.mongodb.MongoWriteException;
import com.mongodb.WriteError;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.ReplaceOptions;
import com.mongodb.client.model.UpdateOptions;
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

	public List<ProjectDataDO> getAllProjects() {
		MongoCollection<ProjectDataDO> collection = database.getCollection(MongoConfig.PROJECT_COLLECTION,
				ProjectDataDO.class);

		List<ProjectDataDO> projectList = new ArrayList<>();
		collection.find().into(projectList);
		return projectList;
	}

	public ProjectDataDO findProjectData(String projectKey) {

		MongoCollection<ProjectDataDO> collection = database.getCollection(MongoConfig.PROJECT_COLLECTION,
				ProjectDataDO.class);

		FindIterable<ProjectDataDO> found = collection.find(Filters.eq("projectKey", projectKey));

		return found.iterator().hasNext() ? found.first() : null;
	}

	public ProjectDataDO upsertProjectData(ProjectDataDO projectDataDO) {
		MongoCollection<ProjectDataDO> collection = database.getCollection(MongoConfig.PROJECT_COLLECTION,
				ProjectDataDO.class);

		Document filter = new Document();
		filter.append("projectKey", projectDataDO.getProjectKey());

		collection.replaceOne(filter, projectDataDO, new ReplaceOptions().upsert(true));

		FindIterable<ProjectDataDO> found = collection.find(Filters.eq("projectKey", projectDataDO.getProjectKey()));
		return found.first();

	}

}
