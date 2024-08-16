package br.unb.unbreja.dto

import jakarta.validation.Valid
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import org.hibernate.validator.constraints.Length
import java.util.*

data class RegisterRequestDTO(
    @Email
    @NotBlank
    val email: String,

    @NotBlank
    @Length(min = 6, max = 100)
    val nomeCompleto: String,

    @Length(max = 300)
    val descricao: String?,

    @NotBlank
    @Length(min = 6, max = 100)
    val senha: String,

    @NotNull
    val dtNascimento: Date,

    @NotEmpty
    @Valid
    val universidade: UniversidadeRegisterDTO,

    @NotEmpty
    val interesses: List<String>,
)