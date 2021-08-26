package com.jelli.platform.envmgr.config;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoCredential;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
//import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
//import com.mongodb.client.model.IndexOptions;
//import com.mongodb.client.model.Indexes;
import com.mongodb.client.model.IndexOptions;
import com.mongodb.client.model.Indexes;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
//import org.bson.Document;
import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

import javax.annotation.PostConstruct;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

@NoArgsConstructor
@AllArgsConstructor
@Configuration
@PropertySources({ @PropertySource(value = "classpath:application-db.properties") })
public class MongoConfig {

	@Value("${envmgr.spring.datasource.url}")
	private String url;

	@Value("${envmgr.spring.datasource.username}")
	private String username;

	@Value("${envmgr.spring.datasource.password}")
	private String password;

	@Value("${envmgr.spring.admin.database.name}")
	private String adminDBName;

	private MongoClient client;
	private MongoDatabase database;
	public static final String PROJECT_COLLECTION = "project_data";

	@PostConstruct
	public void init() {
		CodecRegistry pojoCodecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
				fromProviders(PojoCodecProvider.builder().automatic(true).build()));

		MongoClientSettings settings = MongoClientSettings.builder()
				.credential(MongoCredential.createCredential(username, adminDBName, password.toCharArray()))
				.applyConnectionString(new ConnectionString(url)).codecRegistry(pojoCodecRegistry).build();

		client = MongoClients.create(settings);
		database = client.getDatabase("envmgr");

		// @todo: extract this to a mongo configuration or schema management script.
		MongoCollection<Document> projectDataCollection = database.getCollection(PROJECT_COLLECTION);
		projectDataCollection.createIndex(Indexes.ascending("project_key_unique"), new IndexOptions().unique(true));
	}

	@Bean
	public MongoDatabase getDatabase() {
		return database;
	}
}
