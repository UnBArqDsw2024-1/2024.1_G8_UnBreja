package br.unb.unbreja.service

import br.unb.unbreja.dto.TokenPayload
import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.exceptions.JWTVerificationException
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class JwtService {
    @Value("\${jwt.secret}")
    private var secretKey: String? = null

    fun sign(userId: Long, isAdmin: Boolean): String {
        if (secretKey == null) {
            throw RuntimeException("JWT secret key is not defined")
        }

        val token = JWT.create()
            .withSubject(userId.toString())
            .withClaim("isAdmin", isAdmin)
            .sign(Algorithm.HMAC256(secretKey))

        return token
    }

    fun decode(token: String): TokenPayload {
        if (secretKey == null) {
            throw RuntimeException("JWT secret key is not defined")
        }

        val verifier = JWT.require(Algorithm.HMAC256(secretKey))
            .withClaimPresence("sub")
            .withClaimPresence("isAdmin")
            .build()

        try {
            val decodedToken = verifier.verify(token)

            return TokenPayload(
                userId = decodedToken.subject.toLong(),
                isAdmin = decodedToken.getClaim("isAdmin").asBoolean()
            )
        } catch (e: JWTVerificationException) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED)
        }
    }
}