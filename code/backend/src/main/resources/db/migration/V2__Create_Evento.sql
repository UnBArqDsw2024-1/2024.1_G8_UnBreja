CREATE TABLE evento
(
    id              BIGSERIAL       NOT NULL,
    data            TIMESTAMP       NOT NULL,
    horario         TIME            NOT NULL,
    desc_evento     VARCHAR(300)    NOT NULL,
    foto_evento     VARCHAR(255)    NOT NULL,
    CONSTRAINT pk_evento PRIMARY KEY (id)
);