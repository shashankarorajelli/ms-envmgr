package com.jelli.platform.envmgr.config;

import io.swagger.v3.core.util.Yaml;
import io.swagger.v3.jaxrs2.integration.JaxrsOpenApiContextBuilder;
import io.swagger.v3.oas.integration.OpenApiConfigurationException;
import io.swagger.v3.oas.models.OpenAPI;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.io.Writer;
import java.nio.charset.StandardCharsets;

@Slf4j
public class OpenApiGenerator {
	public static void main(String[] args) throws IOException {

		try {
			for (String arg : args) {
				OpenAPI openApi = new JaxrsOpenApiContextBuilder<>().buildContext(true).read();
				File out = new File(arg);
				if (out.getParentFile() != null) {
					boolean parentDirectoriesCreated = out.getParentFile().mkdirs();
					if (!parentDirectoriesCreated) {
						log.error(String.format("Unable to create parent directories for %s",
								out.getParentFile().getName()));
					}
				}
				try (FileOutputStream os = new FileOutputStream(out)) {
					try (Writer w = new OutputStreamWriter(os, StandardCharsets.UTF_8)) {
						w.write(Yaml.pretty(openApi));
					}
				}
			}
		} catch (OpenApiConfigurationException e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}
}