package br.unb.unbreja.controller

import br.unb.unbreja.dto.LoginRequestDTO
import br.unb.unbreja.dto.RegisterRequestDTO
import br.unb.unbreja.dto.TokenResponseDTO
import br.unb.unbreja.service.AuthService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType.APPLICATION_JSON_VALUE
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth")
@Tag(name = "Autenticação", description = "Rotas de autenticação")
class AuthController(private val authService: AuthService) {

    @Operation(summary = "Login", description = "Realiza o login de um usuário")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Login realizado com sucesso",
                content = [Content(schema = Schema(implementation = TokenResponseDTO::class))]
            ),
            ApiResponse(
                responseCode = "401",
                description = "Credenciais inválidas"
            ),
            ApiResponse(
                responseCode = "500",
                description = "Erro interno no servidor"
            )
        ]
    )
    @PostMapping("/login", produces = [APPLICATION_JSON_VALUE], consumes = [APPLICATION_JSON_VALUE])
    fun login(@RequestBody loginRequest: LoginRequestDTO): TokenResponseDTO {
        return authService.login(loginRequest)
    }

    @Operation(summary = "Cadastro", description = "Realiza o cadastro de um usuário")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Cadastro realizado com sucesso",
                content = [Content(schema = Schema(implementation = TokenResponseDTO::class))]
            ),
            ApiResponse(
                responseCode = "400",
                description = "Dados inválidos"
            ),
            ApiResponse(
                responseCode = "500",
                description = "Erro interno no servidor"
            )
        ]
    )
    @PostMapping("/signup", produces = [APPLICATION_JSON_VALUE], consumes = [APPLICATION_JSON_VALUE])
    fun signup(@RequestBody registerRequest: RegisterRequestDTO): TokenResponseDTO {
        return authService.signup(registerRequest)
    }
}