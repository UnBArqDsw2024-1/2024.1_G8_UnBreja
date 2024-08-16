package br.unb.unbreja.dto

data class UsuarioDTO(
    val id: Long,
    val email: String,
    val nomeCompleto: String,
    val descricao: String,
    val dtNascimento: String,
    val fotoUsuario: String,
    val universidade: UniversidadeDTO,
    val interesses: List<String>,
)
