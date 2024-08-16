package br.unb.unbreja.repository

import br.unb.unbreja.model.Usuario
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface UsuarioRepository : JpaRepository<Usuario, Long> {
    fun findByEmail(email: String): Usuario?
    fun existsByEmail(email: String): Boolean

    @Query("SELECT u FROM Usuario u JOIN FETCH u.universidade JOIN FETCH u.interesses")
    fun findAllFetch(): List<Usuario>
}