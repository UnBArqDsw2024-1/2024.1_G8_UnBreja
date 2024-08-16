package br.unb.unbreja.controller

import br.unb.unbreja.dto.InteresseDTO
import br.unb.unbreja.service.InteresseService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/interesses")
class InteresseController(private val interesseService: InteresseService) {

    @GetMapping
    fun listarInteresses(): List<InteresseDTO> {
        return interesseService.listarInteresses()
    }
}