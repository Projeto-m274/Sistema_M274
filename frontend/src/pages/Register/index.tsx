import React, { Fragment, memo, useState } from "react";

import Flexbox from "../../components/CssLayouts/Flexbox";
import Form from "../../components/Form";
import Input from "../../components/Form/Input";
import Header from "../../components/Header";

import { Title } from "./styles";

const Register: React.FC = () => {
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputEmailValue, setInputEmailValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState<string>("");
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);

  const handleChangeInputNameValue = (name: string) => {
    setInputNameValue(name);
  };

  const handleChangeInputEmailValue = (email: string) => {
    setInputEmailValue(email);
  };

  const handleChangeInputPasswordValue = (password: string) => {
    setInputPasswordValue(password);
  };

  const handleChangeInputConfirmPasswordValue = (confirmPassword: string) => {
    setInputConfirmPasswordValue(confirmPassword);
  };

  return (
    <Fragment>
      <Header isAuthenticated />
      <Form>
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
            onChange={event => handleChangeInputNameValue(event.target.value)}
            required
            hasError={invalidCredentials}
            fullWidth
          />

          <Input
            label="Seu e-mail:"
            type="email"
            value={inputEmailValue}
            onChange={event => handleChangeInputEmailValue(event.target.value)}
            required
            hasError={invalidCredentials}
            fullWidth
          />

          <Input
            label="Sua senha:"
            type="password"
            value={inputPasswordValue}
            onChange={event => handleChangeInputPasswordValue(event.target.value)}
            required
            hasError={invalidCredentials}
            fullWidth
          />

          <Input
            label="Confirme a senha acima:"
            type="password"
            value={inputConfirmPasswordValue}
            onChange={event => handleChangeInputConfirmPasswordValue(event.target.value)}
            required
            hasError={invalidCredentials}
            fullWidth
          />
        </Flexbox>
      </Form>
    </Fragment>
  );
};

export default memo(Register);