import styled from "styled-components";
import Input from "./Input";
import Button from "../components/Button";

function SignUpForm() {
    return (
        <div>
            <Input />
            <div className="terms-container">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                    Eu li e concordo com os termos de uso
                </label>
            </div>
            <ButtonWrapper>
                <Button to="/">Cadastrar</Button>
                <TextWrapper>
                    <p>Já possui conta?</p>
                    <StyledButton to="/">Entrar com minha conta</StyledButton>
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
  bottom: 12px; 
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
  
  p {
    font-size: 16px;
    color: #AA1945;
    margin-bottom: 10px;
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: #AA1945;
  border: 2px solid #AA1945; 
  
  &:hover {
    background-color: #f8f8f8;
  }
`;


