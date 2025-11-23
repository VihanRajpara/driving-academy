package com.academy;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class Application {

	@Value("${DB_URL}")
	private String dbUrl;

	@Value("${DB_USERNAME}")
	private String dbUsername;

	@Value("${DB_PASSWORD}")
	private String dbPassword;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public BasicDataSource getDataSource() {
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl(dbUrl);
		dataSource.setUsername(dbUsername);
		dataSource.setPassword(dbPassword);
		dataSource.setInitialSize(3);
		System.out.println("Connected to DB ::::: " + dataSource);
		return dataSource;
	}

	@Bean
	public JdbcTemplate getjdbcTemplate() {
		return new JdbcTemplate(getDataSource());
	}
}
