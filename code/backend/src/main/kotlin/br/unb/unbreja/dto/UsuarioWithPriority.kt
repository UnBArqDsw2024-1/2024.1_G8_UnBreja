package br.unb.unbreja.dto

import br.unb.unbreja.model.Usuario

data class UsuarioWithPriority(
    val usuario: Usuario,
    val priority: Int,
)