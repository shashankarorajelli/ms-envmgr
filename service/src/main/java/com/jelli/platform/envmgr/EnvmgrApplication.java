package com.jelli.platform.envmgr;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "", version = "", description = ""), servers = { @Server(url = "/api") })
public class EnvmgrApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnvmgrApplication.class, args);
	}

}
