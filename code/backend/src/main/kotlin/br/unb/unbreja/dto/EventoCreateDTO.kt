package br.unb.unbreja.dto

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import org.hibernate.validator.constraints.Length
import java.util.*

data class EventoCreateDTO(
    @NotNull
    val dataHora: Date,

    @NotBlank
    @Length(max = 300)
    val descEvento: String,
)