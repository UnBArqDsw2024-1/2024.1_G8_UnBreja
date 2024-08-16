package br.unb.unbreja.model

import jakarta.persistence.*
import java.util.*

@Entity
open class Evento(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open var id: Long? = null,

    @Column(nullable = false)
    open var dataHora: Date,

    @Column(nullable = false, length = 300)
    open var descEvento: String,

    @Column(nullable = false, length = 255)
    open var fotoEvento: String,
)