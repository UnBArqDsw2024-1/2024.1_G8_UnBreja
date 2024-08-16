package br.unb.unbreja.controller

import br.unb.unbreja.dto.InteresseDTO
import br.unb.unbreja.service.InteresseService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType.APPLICATION_JSON_VALUE
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth/interesses")
@Tag(name = "Interesses", description = "Operações relacionadas a interesses")
class InteresseController(private val interesseService: InteresseService) {

    @Operation(summary = "Listar interesses", description = "Lista todos os interesses cadastrados")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Interesses listados com sucesso", content = [
                    Content(schema = Schema(implementation = InteresseDTO::class))

                ]
            ),
            ApiResponse(
                responseCode = "500", description = "Erro interno no servidor"
            )
        ]
    )
    @GetMapping(produces = [APPLICATION_JSON_VALUE])
    fun listarInteresses(): List<InteresseDTO> {
        return interesseService.listarInteresses()
    }
}