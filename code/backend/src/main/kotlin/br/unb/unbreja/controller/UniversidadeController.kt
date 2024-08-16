package br.unb.unbreja.controller

import br.unb.unbreja.dto.UniversidadeDTO
import br.unb.unbreja.service.UniversidadeService
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
@RequestMapping("/api/universidades")
@Tag(name = "Universidades", description = "Operações relacionadas a universidades")
class UniversidadeController(private val universidadeService: UniversidadeService) {


    @Operation(summary = "Listar universidades", description = "Lista todas as universidades cadastradas")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Universidades listadas com sucesso", content = [
                    Content(schema = Schema(implementation = UniversidadeDTO::class))
                ]
            ),
            ApiResponse(
                responseCode = "500", description = "Erro interno no servidor"
            )
        ],
    )
    @GetMapping(produces = [APPLICATION_JSON_VALUE])
    fun listarUniversidades(): List<UniversidadeDTO> {
        return universidadeService.listarUniversidades()
    }
}