import styled from "styled-components";
import Input from "./SignUpInput";
import Button from "../Button";

function SignUpForm() {
  return (
    <div>
      <Input />
      <div className="terms-container">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">Eu li e concordo com os termos de uso</label>
      </div>
      <ButtonWrapper>
        <Button to="/cadastrar">Cadastrar</Button>
        <TextWrapper>
          <p>Já possui conta?</p>
          <StyledButton to="/login">Entrar com minha conta</StyledButton>
        </TextWrapper>
      </ButtonWrapper>
    </div>
  );
}

export default styled(SignUpForm)`
  .terms-container {
    display: flex;
    align-items: center;
    margin-top: 20px;

    label {
      font-size: 16px;
      margin-left: 50px;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
      appearance: none;
      border-radius: 8px;
      transform: scale(1.5);
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 12px; /* Ajuste o valor para posicionar o botão mais para baixo */
  left: 50%;
  transform: translateX(-50%);
  text-align: center; /* Centraliza o texto e os botões */
`;

const TextWrapper = styled.div`
  margin-top: 20px; /* Espaço entre o botão Cadastrar e o texto */

  p {
    font-size: 16px;
    color: #aa1945; /* Cor do texto "Já possui conta?" */
    margin-bottom: 10px; /* Espaço entre o texto e o botão */
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: #aa1945; /* Cor do texto */
  border: 2px solid #aa1945; /* Borda vermelha */

  &:hover {
    background-color: #f8f8f8; /* Alterar a cor de fundo ao passar o mouse, se desejar */
  }
`;
