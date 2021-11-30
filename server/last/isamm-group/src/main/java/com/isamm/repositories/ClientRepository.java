package com.isamm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isamm.entities.Clients;

public interface ClientRepository extends JpaRepository<Clients,Long> {

}
