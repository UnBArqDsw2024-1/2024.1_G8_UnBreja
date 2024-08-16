package br.unb.unbreja.service

import br.unb.unbreja.dto.InteresseDTO
import br.unb.unbreja.repository.InteresseRepository
import org.springframework.stereotype.Service

@Service
class InteresseService(private val interesseRepository: InteresseRepository) {
    fun listarInteresses(): List<InteresseDTO> {
        return interesseRepository.findAll().map {
            InteresseDTO(
                nome = it.nome
            )
        }
    }
}