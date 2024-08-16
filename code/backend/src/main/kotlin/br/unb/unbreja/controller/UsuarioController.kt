package br.unb.unbreja.controller

import br.unb.unbreja.dto.UsuarioDTO
import br.unb.unbreja.service.UsuarioService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/usuarios")
class UsuarioController(private val usuarioService: UsuarioService) {

    @GetMapping
    fun listarUsuarios(): List<UsuarioDTO> {
        return usuarioService.listarUsuarios()
    }
}