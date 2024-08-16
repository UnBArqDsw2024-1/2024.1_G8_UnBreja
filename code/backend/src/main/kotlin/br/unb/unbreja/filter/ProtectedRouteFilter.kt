package br.unb.unbreja.filter

import br.unb.unbreja.service.JwtService
import jakarta.servlet.Filter
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletRequest
import jakarta.servlet.ServletResponse
import jakarta.servlet.http.HttpServletRequest
import org.springframework.http.HttpHeaders.AUTHORIZATION
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.server.ResponseStatusException

@Component
class ProtectedRouteFilter(
    private val jwtService: JwtService,
) : Filter {
    override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
        val authorization = (request as HttpServletRequest).getHeader(AUTHORIZATION)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED)

        if (!authorization.startsWith("Bearer ")) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED)
        }

        val token = authorization.substring("Bearer ".length)

        try {
            val userId = jwtService.decode(token)
            request.setAttribute("userId", userId)
        } catch (e: Exception) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED)
        }

        chain.doFilter(request, response)
    }
}