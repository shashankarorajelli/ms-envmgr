package com.jelli.platform.envmgr.service;

import java.util.List;
import java.util.Map;

public interface NexusService {

	List<String> getArtifactNames();

	List<String> getReleaseVersions(String artifactName);

	Map<String, String> getSnapshotVersions(String artifactName);
}
