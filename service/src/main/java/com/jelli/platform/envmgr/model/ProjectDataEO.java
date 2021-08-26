package com.jelli.platform.envmgr.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDataEO {

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

}
