package br.unb.unbreja.service

import br.unb.unbreja.dto.UniversidadeDTO
import br.unb.unbreja.dto.UsuarioDTO
import br.unb.unbreja.repository.UsuarioRepository
import org.springframework.stereotype.Service

@Service
class UsuarioService(private val usuarioRepository: UsuarioRepository) {
    fun listarUsuarios(): List<UsuarioDTO> {
        return usuarioRepository.findAllFetch().map { it ->
            UsuarioDTO(
                id = it.id!!,
                nomeCompleto = it.nomeCompleto,
                descricao = it.descricao,
                dtNascimento = it.dtNascimento,
                fotoUsuario = it.fotoUsuario,
                universidade = UniversidadeDTO(
                    sigla = it.universidade.sigla,
                    campus = it.universidade.campus,
                ),
                interesses = it.interesses.map { it.nome },
            )
        }
    }
}