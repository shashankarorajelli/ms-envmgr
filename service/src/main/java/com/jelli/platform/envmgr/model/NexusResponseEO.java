package com.jelli.platform.envmgr.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class NexusResponseEO {
//	@JsonProperty("id")
	private String id;
//	@JsonProperty("repository")
	private String repository;
//	@JsonProperty("group")
	private String group;
//	@JsonProperty("name")
	private String name;
//	@JsonProperty("version")
	private String version;

}
