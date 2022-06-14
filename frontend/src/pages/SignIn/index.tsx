import React, { memo, Fragment, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Header from '../../components/Header';
import Input from '../../components/Input';

import * as C from './styles';

const SignIn: React.FC = () => {
  const [mailValue, setMailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isValidMail, setIsValidMail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isSubmitForm, setIsSubmitForm] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    setIsValidMail(false);
    setIsValidMail(false);
    setIsSubmitForm(false);
  }, []);

  const handleChangeMailValue = useCallback((email: string) => {
    if (!email || email === ' ' || !email.includes('@') && !email.includes('.com')) {
      setIsValidMail(false);
      return;
    } else {
      setMailValue(email);
      setIsValidMail(true);
    }
  }, []);

  const handleChangePasswordValue = useCallback((password: string) => {
    if (!password || password === '') {
      setIsValidPassword(false);
      return;
    } else {
      setPasswordValue(password);
      setIsValidPassword(true);
    }
  }, []);

  const handleSignIn = useCallback(() => {
    setIsSubmitForm(true);

    if (!isValidMail || !isValidPassword) {
      alert('Credenciais incorretas!');
      return;
    } else {
      history.push('/Home');
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <C.Container>
        <C.Title>Faça seu login</C.Title>

        <C.ColumnStart>
          <C.Label>Email:</C.Label>
          <Input 
            type='email' 
            value={mailValue}
            onChange={event => handleChangeMailValue(event.target.value)}
            htmlRequired
            hasError={!isValidMail && isSubmitForm}
          />
        </C.ColumnStart>

        <C.ColumnStart>
          <C.Label>Senha:</C.Label>
          <Input 
            type='password' 
            value={passwordValue}
            onChange={event => handleChangePasswordValue(event.target.value)}
            htmlRequired 
            hasError={!isValidMail && isSubmitForm}
          />
        </C.ColumnStart>

        <Button text='Entrar' onClick={handleSignIn} />
      </C.Container>
    </Fragment>
  );
};

export default memo(SignIn);