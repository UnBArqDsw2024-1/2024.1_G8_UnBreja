CREATE TABLE match_usuarios
(
    usuario_destino_id BIGINT NOT NULL,
    usuario_origem_id  BIGINT NOT NULL,
    CONSTRAINT pk_match_usuarios PRIMARY KEY (usuario_destino_id, usuario_origem_id),
    CONSTRAINT fk_match_usuarios_usuario_origem_id FOREIGN KEY (usuario_origem_id) REFERENCES usuario (id),
    CONSTRAINT fk_match_usuarios_usuario_destino_id FOREIGN KEY (usuario_destino_id) REFERENCES usuario (id)
);