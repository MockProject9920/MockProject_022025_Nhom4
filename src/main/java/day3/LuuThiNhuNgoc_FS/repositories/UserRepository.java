package day3.LuuThiNhuNgoc_FS.repositories;

import day3.LuuThiNhuNgoc_FS.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
 User findByUsername(String username);
}
