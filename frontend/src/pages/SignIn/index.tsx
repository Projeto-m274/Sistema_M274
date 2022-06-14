import React, { memo } from 'react';
import Header from '../../components/Header';

const SignIn: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Hello SIgnIn Page</h1>
    </>
  );
};

export default memo(SignIn);