package com.jelli.platform.envmgr.service;

import java.util.List;
import java.util.Map;

public interface NexusService {

	List<String> getArtifactNames();

	List<String> getReleaseVersions(String repositoryName, String artifactName);

	Map<String, String> getSnapshotVersions(String repositoryName, String artifactName);
}
