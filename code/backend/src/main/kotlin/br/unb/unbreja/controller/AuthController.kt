package br.unb.unbreja.controller

import br.unb.unbreja.dto.LoginRequestDTO
import br.unb.unbreja.dto.RegisterRequestDTO
import br.unb.unbreja.dto.TokenResponseDTO
import br.unb.unbreja.service.AuthService
import org.springframework.http.MediaType.APPLICATION_JSON_VALUE
import org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/login")
    fun login(@RequestBody loginRequest: LoginRequestDTO): TokenResponseDTO {
        return authService.login(loginRequest)
    }

    @PostMapping("/signup")
    fun signup(@RequestBody registerRequest: RegisterRequestDTO): TokenResponseDTO {
        return authService.signup(registerRequest)
    }

    @PostMapping("/update-profile-picture", consumes = [MULTIPART_FORM_DATA_VALUE], produces = [APPLICATION_JSON_VALUE])
    fun updateProfilePicture(
        @RequestAttribute("userId") userId: Long,
        @RequestPart("file") profilePicture: MultipartFile,
    ) {
        authService.updateProfilePicture(userId, profilePicture)
    }
}