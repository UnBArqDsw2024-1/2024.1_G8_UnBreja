package br.unb.unbreja.controller

import br.unb.unbreja.model.Usuario
import br.unb.unbreja.service.MainService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class MainController(
    private val mainService: MainService
) {
    @GetMapping("/")
    fun index(): String {
        return "Hello, World!"
    }

    @GetMapping("/test")
    fun test(): Usuario {
        return mainService.create()
    }
}