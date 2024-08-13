package br.unb.unbreja.repository

import br.unb.unbreja.model.Universidade
import org.springframework.data.jpa.repository.JpaRepository

interface UniversidadeRepository : JpaRepository<Universidade, Long>