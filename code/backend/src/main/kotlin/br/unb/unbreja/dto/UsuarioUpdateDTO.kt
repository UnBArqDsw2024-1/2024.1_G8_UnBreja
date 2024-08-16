package br.unb.unbreja.dto

import java.util.*

data class UsuarioUpdateDTO(
    val nomeCompleto: String,
    val descricao: String?,
    val dtNascimento: Date,
    val universidade: UniversidadeDTO,
    val interesses: List<String>,
)