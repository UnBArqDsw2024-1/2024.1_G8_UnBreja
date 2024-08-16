package br.unb.unbreja.dto

import java.util.*

data class EventoDTO(
    val dataHora: Date,
    val descEvento: String,
    val fotoEvento: String,
)