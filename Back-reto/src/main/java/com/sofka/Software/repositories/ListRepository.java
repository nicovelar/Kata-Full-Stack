package com.sofka.Software.repositories;

import com.sofka.Software.models.ListModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListRepository extends JpaRepository<ListModel, Long > {
}
