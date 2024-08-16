CREATE TABLE interesse
(
    nome VARCHAR(50) NOT NULL,
    CONSTRAINT pk_interesse PRIMARY KEY (nome)
);

CREATE TABLE universidade
(
    id     BIGSERIAL    NOT NULL,
    sigla  VARCHAR(50)  NOT NULL,
    campus VARCHAR(100) NOT NULL,
    CONSTRAINT pk_universidade PRIMARY KEY (id),
    CONSTRAINT uk_universidade UNIQUE (sigla, campus)
);

CREATE TABLE usuario
(
    id              BIGSERIAL    NOT NULL,
    nome_completo   VARCHAR(100) NOT NULL,
    email           VARCHAR(254) NOT NULL,
    descricao       VARCHAR(300),
    senha           VARCHAR(100) NOT NULL,
    dt_nascimento   TIMESTAMP    NOT NULL,
    foto_usuario    VARCHAR(255) NOT NULL,
    universidade_id BIGINT,
    is_admin        BOOLEAN      NOT NULL DEFAULT FALSE,
    CONSTRAINT pk_usuario PRIMARY KEY (id),
    CONSTRAINT uk_usuario_email UNIQUE (email),
    CONSTRAINT fk_usuario_universidade FOREIGN KEY (universidade_id) REFERENCES universidade (id) ON DELETE RESTRICT
);

CREATE TABLE interesse_usuarios
(
    interesse_nome VARCHAR(50) NOT NULL,
    usuarios_id    BIGINT      NOT NULL,
    CONSTRAINT pk_interesse_usuarios PRIMARY KEY (interesse_nome, usuarios_id),
    CONSTRAINT fk_intusu_on_interesse FOREIGN KEY (interesse_nome) REFERENCES interesse (nome) ON DELETE CASCADE,
    CONSTRAINT fk_intusu_on_usuario FOREIGN KEY (usuarios_id) REFERENCES usuario (id) ON DELETE CASCADE
);