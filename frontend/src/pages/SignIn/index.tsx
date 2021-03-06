import React, { memo, Fragment, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainerProps } from 'react-toastify';
import Button from '../../components/Button';
import Header from '../../components/Header';

import Input from '../../components/Input';

import Toastr from '../../components/Toastr';
import { ToastrDefaultProps } from '../../constants/toastrDefaultProps';
import { useToastr } from '../../hooks/useToastr';

import * as C from './styles';

const SignIn: React.FC = () => {
  const [mailValue, setMailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isSubmitForm, setIsSubmitForm] = useState<boolean>(false);
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    setIsSubmitForm(false);
  }, []);

  const handleChangeMailValue = useCallback((email: string) => {
    setMailValue(email);
  }, []);

  const handleChangePasswordValue = useCallback((password: string) => {
    setPasswordValue(password);
  }, []);

  const handleSignIn = useCallback(() => {
    setIsSubmitForm(true);

    if (!mailValue || mailValue === '' || !passwordValue || passwordValue === '') {
      useToastr('error', 'Credenciais Incorretas!', 'top-right');

      setInvalidCredentials(true);

      return;
    } else {
      history.push('/follow-up');
    }
  }, [mailValue, passwordValue]);

  return (
    <Fragment>
      <Toastr {...ToastrDefaultProps} />

      <Header isAuthenticated={false} />

      <C.Container>
        <C.Title>Faça seu login</C.Title>

        <C.ColumnStart>
          <C.Label>Email:</C.Label>
          <Input
            type='email'
            value={mailValue}
            onChange={event => handleChangeMailValue(event.target.value)}
            htmlRequired
            hasError={invalidCredentials && isSubmitForm}
          />
        </C.ColumnStart>

        <C.ColumnStart>
          <C.Label>Senha:</C.Label>
          <Input
            type='password'
            value={passwordValue}
            onChange={event => handleChangePasswordValue(event.target.value)}
            htmlRequired
            hasError={invalidCredentials && isSubmitForm}
          />
        </C.ColumnStart>

        <Button text='Entrar' onClick={handleSignIn} />
      </C.Container>
    </Fragment>
  );
};

export default memo(SignIn);