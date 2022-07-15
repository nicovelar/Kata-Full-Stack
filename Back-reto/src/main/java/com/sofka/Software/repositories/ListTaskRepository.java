package com.sofka.Software.repositories;

import com.sofka.Software.models.ListTaskModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListTaskRepository extends JpaRepository<ListTaskModel, Long> {
}
