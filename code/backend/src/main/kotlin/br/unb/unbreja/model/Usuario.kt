package br.unb.unbreja.model

import jakarta.persistence.*
import java.util.*

@Entity
open class Usuario(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open var id: Long? = null,

    @Column(unique = true, nullable = false, length = 20)
    open var nomeUsuario: String,

    @Column(nullable = false, length = 100)
    open var nomeCompleto: String,

    @Column(unique = true, nullable = false, length = 254)
    open var email: String,

    @Column(nullable = true, length = 300)
    open var descricao: String?,

    @Column(nullable = false, length = 100)
    open var senha: String,

    @Column(nullable = false)
    open var dtNascimento: Date,

    @Column(nullable = false, length = 255)
    open var fotoUsuario: String,

    @ManyToMany(fetch = FetchType.EAGER, cascade = [CascadeType.MERGE, CascadeType.PERSIST])
    @JoinTable(
        name = "interesse_usuarios",
        joinColumns = [JoinColumn(name = "usuarios_id")],
        inverseJoinColumns = [JoinColumn(name = "interesse_nome")]
    )
    open var interesses: MutableSet<Interesse> = mutableSetOf(),

    @ManyToOne(fetch = FetchType.EAGER, cascade = [CascadeType.MERGE, CascadeType.PERSIST])
    @JoinColumn(name = "universidade_id", nullable = false)
    open var universidade: Universidade,
)
