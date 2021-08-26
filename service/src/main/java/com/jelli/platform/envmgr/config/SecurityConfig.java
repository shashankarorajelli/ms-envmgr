package com.jelli.platform.envmgr.config;

import org.springframework.context.annotation.AdviceMode;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(mode = AdviceMode.ASPECTJ, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable();
		// @formatter:off
//		http
//				.authorizeRequests()
//				.antMatchers("/system/**").permitAll()
//				.antMatchers("/swagger-ui/**").permitAll()
//				.antMatchers("/v3/api-docs/**").permitAll()
//				.anyRequest().authenticated()
//				.and()
//				.oauth2ResourceServer().jwt();
		// @formatter:on
	}
}