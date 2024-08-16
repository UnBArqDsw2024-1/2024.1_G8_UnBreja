package br.unb.unbreja.repository

import br.unb.unbreja.model.Evento
import org.springframework.data.jpa.repository.JpaRepository

interface EventoRepository : JpaRepository<Evento, Long>