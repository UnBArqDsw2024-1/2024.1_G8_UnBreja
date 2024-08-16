package br.unb.unbreja.service

import br.unb.unbreja.dto.*
import br.unb.unbreja.repository.InteresseRepository
import br.unb.unbreja.repository.UniversidadeRepository
import br.unb.unbreja.repository.UsuarioRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException
import java.util.*

@Service
class UsuarioService(
    private val usuarioRepository: UsuarioRepository,
    private val universidadeRepository: UniversidadeRepository,
    private val interesseRepository: InteresseRepository,
    private val bucketService: BucketService,
    private val passwordEncoder: PasswordEncoder,
) {
    fun listarUsuarios(userId: Long): List<UsuarioDTO> {
        val usuarios = usuarioRepository.findAllFetch()

        val usuarioLogado = usuarios.find { it.id == userId }
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado")

        val usuariosOrdenados = TreeSet<UsuarioWithPriority>(compareBy { it.priority })

        usuarios.forEach { usuario ->
            if (usuario.id == userId || usuarioLogado.matches.any { it.id == usuario.id }) {
                return@forEach
            }
            
            var priority = 0

            if (usuario.universidade.sigla == usuarioLogado.universidade.sigla
                && usuario.universidade.campus == usuarioLogado.universidade.campus
            ) {
                priority += 1
            }

            usuario.interesses.forEach { interesse ->
                if (usuarioLogado.interesses.any { it.nome == interesse.nome }) {
                    priority += 1
                }
            }

            usuariosOrdenados.add(UsuarioWithPriority(usuario, priority))
        }

        return usuariosOrdenados.map { it.usuario }.map { it ->
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

    fun atualizarUsuario(userId: Long, usuarioDTO: UsuarioUpdateDTO): UsuarioDTO {
        val usuario = usuarioRepository.findByIdOrNull(userId)
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado")

        val universidade = universidadeRepository.findBySiglaAndCampus(
            sigla = usuarioDTO.universidade.sigla,
            campus = usuarioDTO.universidade.campus,
        ) ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Universidade não encontrada")

        val interesses = interesseRepository.findAllById(usuarioDTO.interesses)

        usuario.nomeCompleto = usuarioDTO.nomeCompleto
        usuario.descricao = usuarioDTO.descricao
        usuario.dtNascimento = usuarioDTO.dtNascimento
        usuario.universidade = universidade
        usuario.interesses = interesses.toMutableSet()


        usuarioRepository.save(usuario)

        return UsuarioDTO(
            id = usuario.id!!,
            nomeCompleto = usuario.nomeCompleto,
            descricao = usuario.descricao,
            dtNascimento = usuario.dtNascimento,
            fotoUsuario = usuario.fotoUsuario,
            universidade = UniversidadeDTO(
                sigla = usuario.universidade.sigla,
                campus = usuario.universidade.campus,
            ),
            interesses = usuario.interesses.map { it.nome },
        )
    }

    fun updateProfilePicture(userId: Long, profilePicture: MultipartFile) {
        val usuario = usuarioRepository.findById(userId)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado") }

        usuario.fotoUsuario = bucketService.upload(profilePicture)

        usuarioRepository.save(usuario)
    }

    fun updatePassword(userId: Long, newPasswordDTO: NewPasswordDTO) {
        if (newPasswordDTO.newPassword != newPasswordDTO.confirmNewPassword) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Senhas não conferem")
        }

        val usuario = usuarioRepository.findById(userId)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado") }

        if (!passwordEncoder.matches(newPasswordDTO.oldPassword, usuario.senha)) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED)
        }

        usuario.senha = passwordEncoder.encode(newPasswordDTO.newPassword)

        usuarioRepository.save(usuario)
    }

    fun darLike(userId: Long, usuarioDestinoId: Long) {
        val usuario = usuarioRepository.findByIdOrNull(userId)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED)

        val usuarioLike = usuarioRepository.findByIdOrNull(usuarioDestinoId)
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado")

        usuario.matches.add(usuarioLike)

        usuarioRepository.save(usuario)
    }
}