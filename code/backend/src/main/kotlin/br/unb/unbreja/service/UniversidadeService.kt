package br.unb.unbreja.service

import br.unb.unbreja.dto.UniversidadeDTO
import br.unb.unbreja.repository.UniversidadeRepository
import org.springframework.stereotype.Service

@Service
class UniversidadeService(private val universidadeRepository: UniversidadeRepository) {
    fun listarUniversidades(): List<UniversidadeDTO> {
        return universidadeRepository.findAll().map {
            UniversidadeDTO(
                campus = it.campus,
                sigla = it.sigla
            )
        }
    }
}