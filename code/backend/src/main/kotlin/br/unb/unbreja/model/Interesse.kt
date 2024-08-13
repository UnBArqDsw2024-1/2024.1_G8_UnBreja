package br.unb.unbreja.model

import jakarta.persistence.*

@Entity
class Interesse(
    @Id
    @Column(nullable = false, length = 50)
    var nome: String,

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "interesses")
    var usuarios: MutableSet<Usuario> = mutableSetOf(),
)