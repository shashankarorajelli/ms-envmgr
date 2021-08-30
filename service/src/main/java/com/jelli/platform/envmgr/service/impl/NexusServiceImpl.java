package com.jelli.platform.envmgr.service.impl;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.jelli.platform.envmgr.service.NexusService;
import lombok.SneakyThrows;
import okhttp3.Credentials;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NexusServiceImpl implements NexusService {

	private static final String NEXUS_URL = "https://nexus.jelli.net/service/rest/v1/search?repository=";
//	private static final String MAVEN_RELEASES = "maven-releases";
//	private static final String MAVEN_SNAPSHOTS = "maven-snapshots";
	private static final String BROWSE_RELEASE_URL = "https://nexus.jelli.net/#browse/browse:%s:com/jelli/%s/";
	private static final String USERNAME = "mkapdoskar";
	private static final String PASSWORD = "Jelli#0987";

	private final HttpUrl baseUrl;
	private final OkHttpClient client;
	private final ObjectMapper objectMapper;

	@Autowired
	public NexusServiceImpl() {
		this.baseUrl = HttpUrl.parse(NEXUS_URL);
		OkHttpClient.Builder clientBuilder = new OkHttpClient.Builder();
		this.client = clientBuilder.build();
		this.objectMapper = new ObjectMapper();
		this.objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
		objectMapper.configure(SerializationFeature.FAIL_ON_SELF_REFERENCES, false);
	}

	@Override
	public List<String> getArtifactNames() {
		return Arrays.asList(new String[] { "forecast", "phoenix", "spearmint" });
	}

	@SneakyThrows
	@Override
	public List<String> getReleaseVersions(String repositoryName, String artifactName) {
		String url = baseUrl + repositoryName + "&name=" + artifactName + "&sort=version&direction=desc";

		String credential = Credentials.basic(USERNAME, PASSWORD);
		Request versionRequest = new Request.Builder().url(url).header("Authorization", credential)
				.addHeader("accept", "application/json").build();

		try (Response response = client.newCall(versionRequest).execute()) {
			ResponseBody responseBody = response.body();
			InputStream bodyStream = responseBody == null ? null : responseBody.byteStream();
			List<String> versions = objectMapper.readTree(bodyStream).findValuesAsText("version");
			return versions;
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return new ArrayList<>();
	}

	@SneakyThrows
	@Override
	public Map<String, String> getSnapshotVersions(String repositoryName, String artifactName) {
		String url = baseUrl + repositoryName + "&name=" + artifactName + "&sort=version&direction=desc";

		String credential = Credentials.basic(USERNAME, PASSWORD);
		Request versionRequest = new Request.Builder().url(url).header("Authorization", credential)
				.addHeader("accept", "application/json").build();
		try (Response response = client.newCall(versionRequest).execute()) {
			ResponseBody responseBody = response.body();
			InputStream bodyStream = responseBody == null ? null : responseBody.byteStream();
			String artifactBrowseUrl = String.format(BROWSE_RELEASE_URL, repositoryName, artifactName);
			List<String> versions = objectMapper.readTree(bodyStream).findValuesAsText("version");
			Map<String, String> versionMap = new HashMap<>();
			for (String version : versions) {
				versionMap.put(version, artifactBrowseUrl + version);
			}
			return versionMap;
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}
}
