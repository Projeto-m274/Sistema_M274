import React, {
  Fragment,
  memo,
  useContext,
  useState,
} from "react";

import Flexbox from "../../components/CssLayouts/Flexbox";
import Header from "../../components/Header";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";

import { Title } from "./styles";
import { useHistory } from "react-router-dom";
import { useToastr } from "../../hooks/useToastr";
import Toastr from "../../components/Toastr";
import { ToastrDefaultProps } from "../../constants/toastrDefaultProps";
import { UserContext } from "../../contexts/userContext";

const Register: React.FC = () => {
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputUsernameValue, setInputUsernameValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState<string>("");
  const [invalidConfirmPasswordField, setInvalidConfirmPasswordField] = useState<boolean>(false);
  const [invalidFormFields, setInvalidFormFields] = useState<boolean>(false);

  const history = useHistory();
  const { updateUser } = useContext(UserContext);

  const handleChangeInputNameValue = (name: string) => {
    setInputNameValue(name);
  };

  const handleChangeInputUsernameValue = (email: string) => {
    setInputUsernameValue(email);
  };

  const handleChangeInputPasswordValue = (password: string) => {
    setInputPasswordValue(password);
  };

  const handleChangeInputConfirmPasswordValue = (confirmPassword: string) => {
    setInputConfirmPasswordValue(confirmPassword);
  };

  const passwordsNotMatch = () => inputPasswordValue !== inputConfirmPasswordValue;

  const formValidator = () => {
    const fields = [inputNameValue, inputUsernameValue, inputPasswordValue, inputConfirmPasswordValue];

    const hasInvalidFields = fields.filter(field => !field || field === "");

    if (hasInvalidFields.length > 0) {
      useToastr("error", "Preencha todos os campos do formulário corretamente!", "top-right");
      setInvalidFormFields(true);
    } else if (passwordsNotMatch()) {
      useToastr("error", "As senhas não conferem! Tente novamente.", "top-right");
      setInvalidConfirmPasswordField(true);
    } else {
      setInvalidFormFields(false);
      setInvalidConfirmPasswordField(false);
    }
  }

  const handleSubmitForm = () => {
    formValidator();

    if (!invalidFormFields && !invalidConfirmPasswordField) {
      updateUser({
        fullName: inputNameValue,
        username: inputUsernameValue,
      });
      
      localStorage.setItem("@registerSuccessful", "true");

      history.push("/");
    }
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
            hasError={invalidFormFields}
            fullWidth
          />

          <Input
            label="Seu nome de usuário:"
            type="text"
            value={inputUsernameValue}
            placeholder="Digite aqui o seu nome de usuário"
            onChange={event => handleChangeInputUsernameValue(event.target.value)}
            required
            hasError={invalidFormFields}
            fullWidth
          />

          <Input
            label="Sua senha:"
            type="password"
            value={inputPasswordValue}
            placeholder="Digite aqui a sua senha"
            onChange={event => handleChangeInputPasswordValue(event.target.value)}
            required
            hasError={invalidFormFields || invalidConfirmPasswordField}
            fullWidth
          />

          <Input
            label="Confirme a senha acima:"
            type="password"
            value={inputConfirmPasswordValue}
            placeholder="Confirme aqui a senha digitada acima"
            onChange={event => handleChangeInputConfirmPasswordValue(event.target.value)}
            required
            hasError={invalidFormFields || invalidConfirmPasswordField}
            fullWidth
          />

          <Button
            text="Finalizar o meu cadastro"
            onClick={handleSubmitForm}
          />
        </Flexbox>
      </div>
    </Fragment>
  );
};

export default memo(Register);