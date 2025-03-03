package com.example.demodangnhap.responsitory;

import com.example.demodangnhap.model.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserResponsitory extends JpaRepository<UsersEntity,Integer> {
    @Query(value = "select u from UsersEntity u where u.username like ?1")
    public UsersEntity findByUsername ( String username);
}
