package br.unb.unbreja.service

import br.unb.unbreja.dto.EventoDTO
import br.unb.unbreja.repository.EventoRepository
import org.springframework.stereotype.Service

@Service
class EventoService(private val eventoRepository: EventoRepository) {
    fun listarEvento(): List<EventoDTO> {
        return eventoRepository.findAll().map {
            EventoDTO(
                dataHora = it.dataHora,
                descEvento = it.descEvento,
                fotoEvento = it.fotoEvento
            )
        }
    }
}