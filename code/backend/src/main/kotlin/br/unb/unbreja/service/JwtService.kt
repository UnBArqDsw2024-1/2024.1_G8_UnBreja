package br.unb.unbreja.service

import io.jsonwebtoken.JwtException
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class JwtService {
    @Value("\${jwt.secret}")
    private var secretKey: String? = null

    fun sign(userId: Long): String {
        if (secretKey == null) {
            throw RuntimeException("JWT secret key is not defined")
        }

        val key = Keys.hmacShaKeyFor(secretKey!!.toByteArray())

        val token = Jwts.builder()
            .subject(userId.toString())
            .signWith(key, Jwts.SIG.HS256)
            .compact()

        return token
    }

    fun decode(token: String): Long {
        if (secretKey == null) {
            throw RuntimeException("JWT secret key is not defined")
        }

        val key = Keys.hmacShaKeyFor(secretKey!!.toByteArray())

        val verifier = Jwts.parser()
            .verifyWith(key)
            .build()

        try {
            val decodedToken = verifier.parseSignedClaims(token)
            return decodedToken.payload.subject.toLong()
        } catch (e: JwtException) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED)
        }
    }
}