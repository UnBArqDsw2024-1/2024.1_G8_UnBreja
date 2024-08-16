package br.unb.unbreja.repository

import br.unb.unbreja.model.Usuario
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface UsuarioRepository : JpaRepository<Usuario, Long> {
    fun findByEmail(email: String): Usuario?
    fun existsByEmail(email: String): Boolean

    @Query("SELECT u FROM Usuario u LEFT JOIN FETCH u.universidade LEFT JOIN FETCH u.interesses LEFT JOIN FETCH u.matches ORDER BY u.id")
    fun findAllFetch(): List<Usuario>
}