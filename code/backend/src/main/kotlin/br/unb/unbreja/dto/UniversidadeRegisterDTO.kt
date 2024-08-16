package br.unb.unbreja.dto

import jakarta.validation.constraints.NotBlank
import org.hibernate.validator.constraints.Length

data class UniversidadeRegisterDTO(
    @NotBlank
    @Length(max = 50)
    val sigla: String,

    @NotBlank
    @Length(max = 100)
    val campus: String,
)