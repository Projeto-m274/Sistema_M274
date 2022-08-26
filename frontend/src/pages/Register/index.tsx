import React, {
  Fragment,
  memo,
  useState,
} from "react";

import { useHistory } from "react-router-dom";

import Flexbox from "../../components/CssLayouts/Flexbox";
import Header from "../../components/Header";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import Toastr from "../../components/Toastr";

import { useToastr } from "../../hooks/useToastr";

import { ToastrDefaultProps } from "../../constants/toastrDefaultProps";

import { Title } from "./styles";

const Register: React.FC = () => {
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputUsernameValue, setInputUsernameValue] = useState<string>("");
  const [inputEmailValue, setInputEmailValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState<string>("");
  const [invalidConfirmPasswordField, setInvalidConfirmPasswordField] = useState<boolean>(false);
  const [invalidFormFields, setInvalidFormFields] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const handleChangeInputNameValue = (name: string) => {
    setInputNameValue(name);
  };

  const handleChangeInputUsernameValue = (email: string) => {
    setInputUsernameValue(email);
  };

  const handleChangeInputEmailValue = (email: string) => {
    setInputEmailValue(email);
  }

  const handleChangeInputPasswordValue = (password: string) => {
    setInputPasswordValue(password);
  };

  const handleChangeInputConfirmPasswordValue = (confirmPassword: string) => {
    setInputConfirmPasswordValue(confirmPassword);
  };

  const passwordsNotMatch = () => inputPasswordValue !== inputConfirmPasswordValue;

  const formValidator = () => {
    const fields = [
      inputNameValue,
      inputUsernameValue,
      inputEmailValue,
      inputPasswordValue,
      inputConfirmPasswordValue,
    ];

    const hasInvalidFields = fields.filter(field => !field || field === "");

    if (hasInvalidFields.length > 0) {
      useToastr("error", "Preencha todos os campos do formulário corretamente!", "top-right");
      localStorage.setItem("invalidRegisterForm", "true");
      return;
    } else if (passwordsNotMatch()) {
      useToastr("error", "As senhas não conferem! Tente novamente.", "top-right");
      localStorage.setItem("passwordsNotMatch", "true");
      return;
    } else {
      localStorage.setItem("invalidRegisterForm", "true");
    }
  }

  const handleSubmitForm = () => {
    setIsLoading(true);

    formValidator();

    if (localStorage.getItem("invalidRegisterForm") !== "true" && localStorage.getItem("passwordsNotMatch") !== "true") {
      setTimeout(() => {
        localStorage.setItem("@registerSuccessful", "true");
        
        history.push("/follow-up");

        setIsLoading(false);
      }, 2000);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000)

  }

  return (
    <Fragment>
      <Header isAuthenticated />
      <div>
        <Toastr {...ToastrDefaultProps} />

        <Flexbox
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Title>
            Cadastre-se na plataforma M274
          </Title>

          <Input
            label="Seu nome completo:"
            type="text"
            value={inputNameValue}
            placeholder="Digite aqui o seu nome completo"
            onChange={event => handleChangeInputNameValue(event.target.value)}
            required
            hasError={localStorage.getItem("invalidRegisterForm") === "true"}
            fullWidth
          />

          <Input
            label="Seu nome de usuário:"
            type="text"
            value={inputUsernameValue}
            placeholder="Digite aqui o seu nome de usuário"
            onChange={event => handleChangeInputUsernameValue(event.target.value)}
            required
            hasError={localStorage.getItem("invalidRegisterForm") === "true"}
            fullWidth
          />

          <Input
            label="Seu melhor e-mail:"
            type="email"
            value={inputEmailValue}
            placeholder="Digite aqui o seu melhor e-mail"
            onChange={event => handleChangeInputEmailValue(event.target.value)}
            required
            hasError={localStorage.getItem("invalidRegisterForm") === "true"}
            fullWidth
          />

          <Input
            label="Sua senha:"
            type="password"
            value={inputPasswordValue}
            placeholder="Digite aqui a sua senha"
            onChange={event => handleChangeInputPasswordValue(event.target.value)}
            required
            hasError={localStorage.getItem("invalidRegisterForm") === "true" || localStorage.getItem("passwordsNotMatch") === "true"}
            fullWidth
          />

          <Input
            label="Confirme a senha acima:"
            type="password"
            value={inputConfirmPasswordValue}
            placeholder="Confirme aqui a senha digitada acima"
            onChange={event => handleChangeInputConfirmPasswordValue(event.target.value)}
            required
            hasError={localStorage.getItem("invalidRegisterForm") === "true" || localStorage.getItem("passwordsNotMatch") === "true"}
            fullWidth
          />

          <Button
            text="Finalizar o meu cadastro"
            isLoading={isLoading}
            onClick={handleSubmitForm}
          />
        </Flexbox>
      </div>
    </Fragment>
  );
};

export default memo(Register);