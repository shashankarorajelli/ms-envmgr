package com.jelli.platform.envmgr.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectsResponse {
	private List<ProjectDataEO> projects = new ArrayList<>();

	public void addEntry(ProjectDataEO el) {
		projects.add(el);
	}
}
