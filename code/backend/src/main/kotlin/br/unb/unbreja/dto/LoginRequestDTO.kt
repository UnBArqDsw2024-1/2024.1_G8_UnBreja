package br.unb.unbreja.dto

import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import org.hibernate.validator.constraints.Length

data class LoginRequestDTO(
    @Email
    @NotBlank
    val email: String,

    @Length(min = 6, max = 100)
    @NotBlank
    val senha: String,
)
