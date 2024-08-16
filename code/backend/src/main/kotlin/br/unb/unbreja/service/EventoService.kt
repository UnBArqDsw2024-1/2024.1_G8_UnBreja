package br.unb.unbreja.service

import br.unb.unbreja.dto.EventoCreateDTO
import br.unb.unbreja.dto.EventoDTO
import br.unb.unbreja.model.Evento
import br.unb.unbreja.repository.EventoRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException
import java.util.*

@Service
class EventoService(
    private val eventoRepository: EventoRepository,
    private val bucketService: BucketService,
) {
    fun listarEvento(): List<EventoDTO> {
        return eventoRepository.findAll().map {
            EventoDTO(
                id = it.id!!,
                dataHora = it.dataHora,
                descEvento = it.descEvento,
                fotoEvento = it.fotoEvento
            )
        }
    }

    fun salvarEvento(isAdmin: Boolean, eventoDTO: EventoCreateDTO): EventoDTO {
        if (!isAdmin) {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "Usuário não é administrador")
        }

        if (eventoDTO.dataHora < Date()) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Data e hora do evento não podem ser no passado")
        }

        val eventoSalvo = eventoRepository.save(
            Evento(
                dataHora = eventoDTO.dataHora,
                descEvento = eventoDTO.descEvento
            )
        )

        return EventoDTO(
            id = eventoSalvo.id!!,
            dataHora = eventoSalvo.dataHora,
            descEvento = eventoSalvo.descEvento,
        )
    }

    fun atualizarFotoEvento(id: Long, fotoEvento: MultipartFile) {
        val evento = eventoRepository.findByIdOrNull(id)
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Evento não encontrado")

        evento.fotoEvento = bucketService.upload(fotoEvento)

        eventoRepository.save(evento)
    }
}