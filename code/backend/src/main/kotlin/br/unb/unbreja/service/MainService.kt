package br.unb.unbreja.service

import br.unb.unbreja.model.Interesse
import br.unb.unbreja.model.Universidade
import br.unb.unbreja.model.Usuario
import br.unb.unbreja.repository.UsuarioRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class MainService(private val usuarioRepository: UsuarioRepository) {
    fun create(): Usuario {
        val user = Usuario(
            nomeUsuario = "teste",
            nomeCompleto = "Teste Teste",
            descricao = "Teste",
            dtNascimento = Date(),
            fotoUsuario = "https://www.google.com.br",
            email = "email@example.com",
            senha = "123456",
            universidade = Universidade(sigla = "UNB", campus = "FGA"),
            interesses = mutableSetOf(Interesse(nome = "Teste")),
        )

        return usuarioRepository.save(user)
    }
}