package br.unb.unbreja.dto

import jakarta.validation.constraints.NotBlank
import org.hibernate.validator.constraints.Length

data class NewPasswordDTO(
    @Length(min = 6, max = 100)
    @NotBlank
    val oldPassword: String,

    @Length(min = 6, max = 100)
    @NotBlank
    val newPassword: String,

    @Length(min = 6, max = 100)
    @NotBlank
    val confirmNewPassword: String,
)
