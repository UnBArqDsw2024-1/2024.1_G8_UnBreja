package br.unb.unbreja.config

import br.unb.unbreja.filter.ProtectedRouteFilter
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class ProtectedRoutesConfig {
    @Bean
    fun protectedRoutes(protectedRouteFilter: ProtectedRouteFilter): FilterRegistrationBean<ProtectedRouteFilter> {
        val filterRegistrationBean = FilterRegistrationBean<ProtectedRouteFilter>()

        filterRegistrationBean.filter = protectedRouteFilter
        filterRegistrationBean.addUrlPatterns("/api/*", "/auth/update-profile-picture")

        return filterRegistrationBean
    }
}