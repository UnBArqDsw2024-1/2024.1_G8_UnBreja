import styled from "styled-components"

function Input({ className }) {
    return (
        <div className={className} id="float-label">
            <label htmlFor="nomecompleto">
                Nome Completo
            </label>
            <input type="nomecompleto" />

            <label htmlFor="email">
                E-mail
            </label>
            <input type="email" />

            <label htmlFor="senha">
                Senha
            </label>
            <input type="senha" />

            <label htmlFor="confirmarsenha">
                Confirme a senha
            </label>
            <input type="confirmarsenha" />

        </div>
    )
}

export default styled(Input)`
display: flex;
flex-direction: column;
min-width: 350px;


input {
    width: 100%;
    height: 56px;
    padding: 0px 16px 0 14px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-bottom: 20px;
}

label {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #AA1945;
    pointer-events: none;
    line-height: 24px;
}
`