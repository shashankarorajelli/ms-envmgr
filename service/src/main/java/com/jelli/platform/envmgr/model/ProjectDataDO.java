package com.jelli.platform.envmgr.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDataDO {

	private ObjectId id;

	private String projectKey;

	private String friendlyName;

	private String backendVersionEndpoint;

	private String defaultLinkPattern;

	private ArrayList<KeyValue> linkOverrides = new ArrayList<>();

	private ArrayList<KeyValue> deploymentMetadata = new ArrayList<>();

	private boolean onEnvDashboard;

	private String landingEndpoint;

	private String microserviceName;

	public static ProjectDataDO fromExternalObject(ProjectDataEO eo) {
		return new ProjectDataDO(eo.getId(), eo.getProjectKey(), eo.getFriendlyName(), eo.getBackendVersionEndpoint(),
				eo.getDefaultLinkPattern(), eo.getLinkOverrides(), eo.getDeploymentMetadata(), eo.isOnEnvDashboard(),
				eo.getLandingEndpoint(), eo.getMicroserviceName());
	}

	public Document toBsonDocument() {
		Document doc = new Document();
		doc.append("projectKey", projectKey).append("friendlyName", friendlyName)
				.append("backendVersionEndpoint", backendVersionEndpoint)
				.append("defaultLinkPattern", defaultLinkPattern).append("linkOverrides", linkOverrides)
				.append("deploymentMetadata", deploymentMetadata).append("onEnvDashboard", onEnvDashboard)
				.append("landingEndpoint", landingEndpoint).append("microserviceName", microserviceName);
		return doc;

	}

	public ProjectDataEO toExternalObject() {
		return new ProjectDataEO(id, projectKey, friendlyName, backendVersionEndpoint, defaultLinkPattern,
				linkOverrides, deploymentMetadata, onEnvDashboard, landingEndpoint, microserviceName);
	}

}
