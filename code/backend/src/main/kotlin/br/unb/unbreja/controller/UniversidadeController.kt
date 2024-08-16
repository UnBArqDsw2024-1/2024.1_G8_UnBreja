package br.unb.unbreja.controller

import br.unb.unbreja.dto.UniversidadeDTO
import br.unb.unbreja.service.UniversidadeService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/universidades")
class UniversidadeController(private val universidadeService: UniversidadeService) {

    @GetMapping
    fun listarUniversidades(): List<UniversidadeDTO> {
        return universidadeService.listarUniversidades()
    }
}