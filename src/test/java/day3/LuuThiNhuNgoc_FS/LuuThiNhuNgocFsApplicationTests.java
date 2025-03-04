package day3.LuuThiNhuNgoc_FS;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
class LuuThiNhuNgocFsApplicationTests {

	@Test
	void generateEncryptedPassword() {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String plainPassword = "1";
		String encodedPassword = passwordEncoder.encode(plainPassword);

		System.out.println("Encoded Password: " + encodedPassword);
	}
}
