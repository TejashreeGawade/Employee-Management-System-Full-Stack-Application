package net.teju.emp.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class EmpBackendSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpBackendSystemApplication.class, args);
	}
	
//	@Bean
//	public WebMvcConfigurer configure() {
//		return new WebMvcConfigurer() {
//			public void addCorsMapping(CorsRegistry reg) {
//				reg.addMapping("/**")
//				.allowedMethods(CorsConfiguration.ALL)
//				.allowedHeaders(CorsConfiguration.ALL)
//				.allowedOriginPatterns(CorsConfiguration.ALL)
//				.allowCredentials(true);
//			}
//		};
//	}
}

