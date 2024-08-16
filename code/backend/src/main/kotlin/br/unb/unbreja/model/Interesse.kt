package br.unb.unbreja.model

import jakarta.persistence.*

@Entity
class Interesse(
    @Id
    @Column(nullable = false, length = 50)
    var nome: String,

    @ManyToMany(mappedBy = "interesses", fetch = FetchType.LAZY)
    var usuarios: MutableSet<Usuario> = mutableSetOf(),
)