package br.unb.unbreja.model

import jakarta.persistence.*

@Entity
@Table(uniqueConstraints = [UniqueConstraint(columnNames = ["sigla", "campus"])])
class Universidade(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false, length = 50)
    var sigla: String,

    @Column(nullable = false, length = 100)
    var campus: String,

    @OneToMany(mappedBy = "universidade", fetch = FetchType.LAZY)
    var usuarios: MutableSet<Usuario> = mutableSetOf(),
)