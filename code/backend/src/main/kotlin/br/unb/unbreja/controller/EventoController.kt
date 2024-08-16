package br.unb.unbreja.controller

import br.unb.unbreja.dto.EventoDTO
import br.unb.unbreja.service.EventoService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/eventos")
class EventoController(private val eventoService: EventoService) {

    @GetMapping
    fun listarEventos(): List<EventoDTO> {
        return eventoService.listarEvento()
    }
}