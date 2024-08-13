package br.unb.unbreja.repository

import br.unb.unbreja.model.Usuario
import org.springframework.data.jpa.repository.JpaRepository

interface UsuarioRepository : JpaRepository<Usuario, Long>