package br.unb.unbreja.dto

import java.util.*

data class UsuarioDTO(
    val id: Long,
    val nomeCompleto: String,
    val descricao: String?,
    val dtNascimento: Date,
    val fotoUsuario: String?,
    val universidade: UniversidadeDTO,
    val interesses: List<String>,
)
