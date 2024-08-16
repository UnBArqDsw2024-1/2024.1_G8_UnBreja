package br.unb.unbreja.repository

import br.unb.unbreja.model.Interesse
import org.springframework.data.jpa.repository.JpaRepository

interface InteresseRepository : JpaRepository<Interesse, String>