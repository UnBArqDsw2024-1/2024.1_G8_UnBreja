package br.unb.unbreja.controller

import br.unb.unbreja.dto.EventoCreateDTO
import br.unb.unbreja.dto.EventoDTO
import br.unb.unbreja.service.EventoService
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
@RequestMapping("/api/eventos")
@Tag(name = "Evento", description = "Operações relacionadas a eventos")
class EventoController(private val eventoService: EventoService) {

    @Operation(summary = "Listar eventos", description = "Lista todos os eventos cadastrados")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Eventos listados com sucesso", content = [
                    Content(schema = Schema(implementation = EventoDTO::class))
                ]
            ),
            ApiResponse(
                responseCode = "500", description = "Erro interno no servidor"
            )
        ]
    )
    @GetMapping(produces = [APPLICATION_JSON_VALUE])
    fun listarEventos(): List<EventoDTO> {
        return eventoService.listarEvento()
    }

    @Operation(summary = "Criar evento", description = "Cria um novo evento")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Evento criado com sucesso", content = [
                    Content(schema = Schema(implementation = EventoDTO::class))
                ]
            ),
            ApiResponse(
                responseCode = "400", description = "Requisição inválida"
            ),
            ApiResponse(
                responseCode = "403", description = "Usuário não autorizado"
            ),
            ApiResponse(
                responseCode = "500", description = "Erro interno no servidor"
            )
        ]
    )
    @PostMapping(consumes = [APPLICATION_JSON_VALUE], produces = [APPLICATION_JSON_VALUE])
    fun criarEvento(@RequestAttribute("isAdmin") isAdmin: Boolean, @RequestBody eventoDTO: EventoCreateDTO): EventoDTO {
        return eventoService.salvarEvento(isAdmin, eventoDTO)
    }

    @Operation(
        summary = "Atualizar a foto do evento",
        description = "Atualiza a foto de um evento existente. A foto deve ser enviada como um arquivo."
    )
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200", description = "Foto atualizada com sucesso"
            ),
            ApiResponse(
                responseCode = "400", description = "Requisição inválida"
            ),
            ApiResponse(
                responseCode = "403", description = "Usuário não autorizado"
            ),
            ApiResponse(
                responseCode = "500", description = "Erro interno no servidor"
            )
        ]
    )
    @PostMapping("/update-picture", consumes = [MULTIPART_FORM_DATA_VALUE], produces = [APPLICATION_JSON_VALUE])
    fun updatePicture(@RequestPart("file") file: MultipartFile, @RequestParam("id") eventoId: Long) {
        return eventoService.atualizarFotoEvento(eventoId, file)
    }
}