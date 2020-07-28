package com.adobe.prj.config;

import java.sql.JDBCType;
import java.util.Properties;

import javax.activation.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.adobe.prj.utilities.PasswordConstraintValidator;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableTransactionManagement
public class AppConfig {
	/*
	 * create a pool of database connections
	 * Prefer c3p0 or Hikari datasource connections
	 */
	
	@Bean	
//	Object returned will be given as eban to the spring container
//	hence created Data Source (pool of connections) using a function and converted to bean
	public DriverManagerDataSource getDataSource() {
		DriverManagerDataSource ds = new DriverManagerDataSource();
		ds.setDriverClassName("com.mysql.jdbc.Driver");
		ds.setUrl("jdbc:mysql://localhost:3306/adobe_noida");
		ds.setUsername("root");
		ds.setPassword("Welcome123");
		return ds;
	}
	
	@Bean
//	similarly created an enitity manager factory object and give this as bean to spring container;
	public LocalContainerEntityManagerFactoryBean getEMF() {
		LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();	// Entity Manager Factory Manager to assign Entity Manager API of a Persistent Context having beans(or entities)
		emf.setDataSource(getDataSource());	// from above
		emf.setJpaVendorAdapter(new HibernateJpaVendorAdapter());	// Servlet Engine
		emf.setPackagesToScan("com.adobe.prj.entity");	// package of entities
		
		Properties props = new Properties();
		props.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");	// setting mysql
		props.setProperty("hibernate.hbm2ddl.auto", "update");
		
		emf.setJpaProperties(props); 
		return emf;
	}
	
	@Bean
	public PlatformTransactionManager getTransaction() {
		return new JpaTransactionManager();
	}
	
	@Bean
	public ObjectMapper getObjectMapper(){
		return new HibernateAwareObjectMapper();
	}
	
	@Bean
  public JdbcTemplate getTemplate(){
    return new JdbcTemplate(this.getDataSource());
  }
	

}

