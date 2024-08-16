package br.unb.unbreja.dto

import java.util.*

data class EventoDTO(
    val id: Long,
    val dataHora: Date,
    val descEvento: String,
    val fotoEvento: String? = null,
)