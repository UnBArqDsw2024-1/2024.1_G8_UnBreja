package br.unb.unbreja.service

import br.unb.unbreja.dto.LoginRequestDTO
import br.unb.unbreja.dto.RegisterRequestDTO
import br.unb.unbreja.dto.TokenResponseDTO
import br.unb.unbreja.model.Usuario
import br.unb.unbreja.repository.InteresseRepository
import br.unb.unbreja.repository.UniversidadeRepository
import br.unb.unbreja.repository.UsuarioRepository
import org.springframework.http.HttpStatus
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException

@Service
class AuthService(
    private val usuarioRepository: UsuarioRepository,
    private val interesseRepository: InteresseRepository,
    private val universidadeRepository: UniversidadeRepository,
    private val passwordEncoder: PasswordEncoder,
    private val jwtService: JwtService,
    private val bucketService: BucketService,
) {
    fun login(loginRequest: LoginRequestDTO): TokenResponseDTO {
        val usuario = usuarioRepository.findByEmail(loginRequest.email)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED)

        if (!passwordEncoder.matches(loginRequest.senha, usuario.senha)) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED)
        }

        val token = jwtService.sign(usuario.id!!, usuario.isAdmin)

        return TokenResponseDTO(token, usuario.fotoUsuario, usuario.isAdmin)
    }


    fun signup(registerRequest: RegisterRequestDTO): TokenResponseDTO {
        val emailExists = usuarioRepository.existsByEmail(registerRequest.email)

        if (emailExists) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Email já cadastrado")
        }

        val universidade = universidadeRepository.findBySiglaAndCampus(
            registerRequest.universidade.sigla,
            registerRequest.universidade.campus
        ) ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Universidade não encontrada")

        val interesses = interesseRepository.findAllById(registerRequest.interesses)

        val newUser = Usuario(
            email = registerRequest.email,
            senha = passwordEncoder.encode(registerRequest.senha),
            nomeCompleto = registerRequest.nomeCompleto,
            descricao = registerRequest.descricao,
            dtNascimento = registerRequest.dtNascimento,
            universidade = universidade,
            interesses = interesses.toMutableSet(),
        )

        usuarioRepository.save(newUser)

        val token = jwtService.sign(newUser.id!!, newUser.isAdmin)

        return TokenResponseDTO(token, newUser.fotoUsuario, newUser.isAdmin)
    }

    fun updateProfilePicture(userId: Long, profilePicture: MultipartFile) {
        val usuario = usuarioRepository.findById(userId)
            .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado") }

        usuario.fotoUsuario = bucketService.upload(profilePicture)

        usuarioRepository.save(usuario)
    }
}