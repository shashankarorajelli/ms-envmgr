package com.jelli.platform.envmgr.service.impl;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import com.jelli.platform.envmgr.model.NexusResponseEO;
import com.jelli.platform.envmgr.service.NexusService;
import lombok.SneakyThrows;
//import okhttp3.Authenticator;
import okhttp3.Credentials;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
//import okhttp3.Route;
//import org.apache.http.auth.UsernamePasswordCredentials;
//import org.apache.http.client.CredentialsProvider;
//import org.apache.http.impl.client.BasicCredentialsProvider;
//import okhttp3.internal.http.RealResponseBody;
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
	private static final String MAVEN_RELEASES = "maven-releases";
	private static final String MAVEN_SNAPSHOTS = "maven-snapshots";
	private static final String BROWSE_RELEASE_URL = "https://nexus.jelli.net/#browse/browse:maven-snapshots:com/jelli/%s/";
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
	}

	@Override
	public List<String> getArtifactNames() {
		return Arrays.asList(new String[] { "forecast", "phoenix", "spearmint" });
	}

	@SneakyThrows
	@Override
	public List<String> getReleaseVersions(String artifactName) {
		String url = baseUrl + MAVEN_RELEASES + "&name=" + artifactName + "&sort=version&direction=desc";

		String credential = Credentials.basic(USERNAME, PASSWORD);
		Request versionRequest = new Request.Builder().url(url).header("Authorization", credential)
				.addHeader("accept", "application/json").build();

		try (Response response = client.newCall(versionRequest).execute()) {
			System.out.println(objectMapper.writeValueAsString(response.body().toString()));
			ResponseBody responseBody = response.body();
			System.out.println(objectMapper.writeValueAsString(responseBody));
			InputStream bodyStream = responseBody == null ? null : responseBody.byteStream();
//			NexusResponseEO[] nexusResponseEOS = objectMapper.readValue(bodyStream, NexusResponseEO[].class);
			System.out.println("==============Hello1: " + objectMapper.writeValueAsString(bodyStream));
			List<String> versions = objectMapper.readTree(bodyStream).findValuesAsText("version");
//			List<String> artifactVersionList = new ArrayList<>();
//			for (NexusResponseEO nexusResponseEO : nexusResponseEOS) {
//				artifactVersionList.add(nexusResponseEO.getVersion());
//			}
//			return artifactVersionList;
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
	public Map<String, String> getSnapshotVersions(String artifactName) {
		HttpUrl endpoint = baseUrl.newBuilder()
				.addPathSegments(MAVEN_SNAPSHOTS + "&name=" + artifactName + "&sort=version&direction=desc").build();
		Request versionRequest = new Request.Builder().url(endpoint).get().addHeader("accept", "application/json")
				.build();
		try (Response response = client.newCall(versionRequest).execute()) {
			ResponseBody responseBody = response.body();
			InputStream bodyStream = responseBody == null ? null : responseBody.byteStream();
			String artifactBrowseUrl = String.format(BROWSE_RELEASE_URL, artifactName);
//			NexusResponseEO[] nexusResponseEOS = objectMapper.readValue(bodyStream, NexusResponseEO[].class);
			List<String> versions = objectMapper.readTree(bodyStream).findValuesAsText("version");
			Map<String, String> versionMap = new HashMap<>();
			for (String version : versions) {
				versionMap.put(version, artifactBrowseUrl + version);
			}
//			for (NexusResponseEO nexusResponseEO : nexusResponseEOS) {
//				versionMap.put(nexusResponseEO.getVersion(), artifactBrowseUrl + nexusResponseEO.getVersion());
//			}
			return versionMap;
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}
}
