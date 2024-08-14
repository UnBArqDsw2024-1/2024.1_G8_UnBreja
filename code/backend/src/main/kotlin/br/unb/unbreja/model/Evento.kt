package br.unb.unbreja.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.sql.Time
import java.util.Date

@Entity
open class Evento (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open var id: Long? = null,

    @Column(nullable = false)
    open var data: Date,

    @Column(nullable = false)
    open var horario: Time,

    @Column(nullable = false, length = 300)
    open var descEvento: String,

    @Column(nullable = false, length = 255)
    open var fotoEvento: String
)