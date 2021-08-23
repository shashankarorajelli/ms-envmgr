package com.jelli.platform.envmgr.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springdoc.webmvc.api.OpenApiResource;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.stereotype.Component;
import org.springframework.util.ClassUtils;

import javax.ws.rs.Path;
import java.util.stream.Collectors;

@Component
public class JerseyConfig extends ResourceConfig {
	public JerseyConfig() {
		register(OpenApiResource.class);

		ClassPathScanningCandidateComponentProvider scanner = new ClassPathScanningCandidateComponentProvider(false);
		scanner.addIncludeFilter(new AnnotationTypeFilter(Path.class));
		registerClasses(scanner.findCandidateComponents("com.jelli.platform.envmgr").stream()
				.map(beanDefinition -> ClassUtils.resolveClassName(beanDefinition.getBeanClassName(), getClassLoader()))
				.collect(Collectors.toSet()));
	}

}