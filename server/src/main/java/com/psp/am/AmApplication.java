package com.psp.am;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AmApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmApplication.class, args);
	}

	@GetMapping("/test")
	public String test() {
		return "hello";
	}
}
