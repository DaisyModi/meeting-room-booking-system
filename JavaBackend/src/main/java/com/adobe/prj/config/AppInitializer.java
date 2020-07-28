package com.adobe.prj.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

// Bridging between Servlet Engine and Spring Container.

public class AppInitializer implements WebApplicationInitializer {
	@Override
	public void onStartup(ServletContext servletContext)
			throws ServletException {
		WebApplicationContext context = getContext();
		servletContext.addListener(new ContextLoaderListener(context));
		ServletRegistration.Dynamic dispatcher = servletContext.addServlet(
				"DispatcherServlet", new DispatcherServlet(context));		// DispatcherServlet already present in Spring.
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping("/api/*");	// @WebServlet("products") hence responses to any URI starting with 'api/*'
	}

	private WebApplicationContext getContext() {
		AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();	//	 diff from AnnotationConfigApplicationContext (standalone from servlet)
		context.setConfigLocation("com.adobe");	// register whole package and avoid registering indivudual classes.
		return context;
	}
	
}

