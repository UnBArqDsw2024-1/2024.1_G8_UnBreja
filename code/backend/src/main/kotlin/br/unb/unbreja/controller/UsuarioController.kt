package br.unb.unbreja.controller

import br.unb.unbreja.dto.NewPasswordDTO
import br.unb.unbreja.dto.UsuarioDTO
import br.unb.unbreja.dto.UsuarioUpdateDTO
import br.unb.unbreja.service.UsuarioService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType.APPLICATION_JSON_VALUE
import org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "Usuários")
class UsuarioController(private val usuarioService: UsuarioService) {

    @Operation(
        summary = "Listar usuários",
        description = "Lista todos os usuários cadastrados ordenando pela compatibilidade"
    )
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Lista de usuários retornada com sucesso", content = [
                    Content(schema = Schema(implementation = UsuarioDTO::class))
                ]
            ),
            ApiResponse(responseCode = "401", description = "Usuário não autenticado"),
            ApiResponse(responseCode = "403", description = "Usuário não autorizado"),
        ]
    )
    @GetMapping(produces = [APPLICATION_JSON_VALUE])
    fun listarUsuarios(@RequestAttribute("userId") userId: Long): List<UsuarioDTO> {
        return usuarioService.listarUsuarios(userId)
    }

    @Operation(
        summary = "Atualizar usuário",
        description = "Atualiza os dados do usuário logado"
    )
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Usuário atualizado com sucesso", content = [
                    Content(schema = Schema(implementation = UsuarioDTO::class))
                ]
            ),
            ApiResponse(responseCode = "400", description = "Dados inválidos"),
            ApiResponse(responseCode = "401", description = "Usuário não autenticado"),
        ]
    )
    @PutMapping(produces = [APPLICATION_JSON_VALUE], consumes = [APPLICATION_JSON_VALUE])
    fun atualizarUsuario(
        @RequestAttribute("userId") userId: Long,
        @RequestBody usuarioDTO: UsuarioUpdateDTO,
    ): UsuarioDTO {
        return usuarioService.atualizarUsuario(userId, usuarioDTO)
    }

    @Operation(
        summary = "Atualizar foto de perfil",
        description = "Atualiza a foto de perfil do usuário logado"
    )
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "Foto de perfil atualizada com sucesso"),
            ApiResponse(responseCode = "400", description = "Dados inválidos"),
            ApiResponse(responseCode = "401", description = "Usuário não autenticado"),
        ]
    )
    @PatchMapping(
        "/update-profile-picture",
        consumes = [MULTIPART_FORM_DATA_VALUE],
        produces = [APPLICATION_JSON_VALUE]
    )
    fun updateProfilePicture(
        @RequestAttribute("userId") userId: Long,
        @RequestPart("file") profilePicture: MultipartFile,
    ) {
        usuarioService.updateProfilePicture(userId, profilePicture)
    }

    @Operation(
        summary = "Atualizar senha",
        description = "Atualiza a senha do usuário logado"
    )
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "Senha atualizada com sucesso"),
            ApiResponse(responseCode = "400", description = "Dados inválidos"),
            ApiResponse(responseCode = "401", description = "Usuário não autenticado"),
        ]
    )
    @PatchMapping("/update-password", produces = [APPLICATION_JSON_VALUE], consumes = [APPLICATION_JSON_VALUE])
    fun updatePassword(
        @RequestAttribute("userId") userId: Long,
        @RequestBody newPasswordDTO: NewPasswordDTO,
    ) {
        usuarioService.updatePassword(userId, newPasswordDTO)
    }

    @Operation(
        summary = "Dar like",
        description = "Dá like em um usuário"
    )
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "Like dado com sucesso"),
            ApiResponse(responseCode = "400", description = "Dados inválidos"),
            ApiResponse(responseCode = "401", description = "Usuário não autenticado"),
        ]
    )
    @PatchMapping("/like/{id}", produces = [APPLICATION_JSON_VALUE])
    fun likeUser(
        @RequestAttribute("userId") userId: Long,
        @PathVariable id: Long,
    ) {
        usuarioService.darLike(userId, id)
    }
}