package br.unb.unbreja.dto

data class TokenPayload(
    val userId: Long,
    val isAdmin: Boolean,
)
