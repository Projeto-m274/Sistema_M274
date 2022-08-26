import React, { memo, Fragment, useCallback, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';

import { UserContext } from '../../contexts/userContext';

import { useToastr } from '../../hooks/useToastr';

import * as C from './styles';

const SignIn: React.FC = () => {
  const [mailValue, setMailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isSubmitForm, setIsSubmitForm] = useState<boolean>(false);
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();
  const { userLogin, userData } = useContext(UserContext);

  useEffect(() => {
    setIsSubmitForm(false);
  }, []);

  const handleChangeMailValue = (email: string) => {
    setMailValue(email);
  };

  const handleChangePasswordValue = (password: string) => {
    setPasswordValue(password);
  };

  const handleSignIn = useCallback(() => {
    setIsLoading(true);
    setIsSubmitForm(true);

    if (!mailValue || mailValue === '' || !passwordValue || passwordValue === '') {
      setIsLoading(false);

      useToastr('error', 'Credenciais Incorretas!', 'top-right');

      setInvalidCredentials(true);

      return;
    } else {
      
      userLogin(mailValue, passwordValue);
      
      const userIsLoggedIn = localStorage.getItem("@UserLogged") === "true";
      
      if (userIsLoggedIn) {
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("@token", userData ? userData.token : "");
          history.push('/follow-up');
        }, 2000);
      }
    }
  }, [mailValue, passwordValue]);

  return (
    <Fragment>
      <Header isAuthenticated={false} />

      <C.Container>
        <C.Title>Faça seu login</C.Title>

        <C.ColumnStart>
          <Input
            label="E-mail"
            type='email'
            value={mailValue}
            placeholder="Digite aqui o seu e-mail"
            onChange={event => handleChangeMailValue(event.target.value)}
            required
            hasError={invalidCredentials && isSubmitForm}
            fullWidth
          />
        </C.ColumnStart>

        <C.ColumnStart>
          <Input
            label="Senha"
            type='password'
            value={passwordValue}
            placeholder="Digite aqui a sua senha"
            onChange={event => handleChangePasswordValue(event.target.value)}
            required
            hasError={invalidCredentials && isSubmitForm}
            fullWidth
          />
        </C.ColumnStart>

        <Button 
          text='Entrar' 
          isLoading={isLoading} 
          onClick={handleSignIn} 
        />
      </C.Container>
    </Fragment>
  );
};

export default memo(SignIn);