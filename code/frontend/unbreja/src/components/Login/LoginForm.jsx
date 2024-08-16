import styled from "styled-components";
import Input from "../Login/LoginInput";
import { createButton } from "../Button";

function LoginForm() {
  return (
    <div>
      <Input />
      <ButtonWrapper>
        {createButton('primary', '/login', 'Entrar com a minha conta')}
        <TextWrapper>
          <p>Não possui conta?</p>
          {createButton('secondary', '/cadastrar', 'Cadastrar')}
        </TextWrapper>
      </ButtonWrapper>
    </div>
  );
}

export default styled(LoginForm)`
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
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-top: 5px;
  
  p {
    font-size: 16px;
    color: #AA1945;
    margin-bottom: 5px;
  }
`;
