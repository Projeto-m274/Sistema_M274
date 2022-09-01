import React, { memo, useState } from "react";

import Header from "../../components/Header";
import Flexbox from "../../components/CssLayouts/Flexbox";
import Input from "../../components/Form/Input";
import Dropdown, { IOptions } from "../../components/Dropdown";

import { Title } from "./styles";

const Ocurrences: React.FC = () => {
  const [contractValue, setContractValue] = useState<string>("");
  const [unitySelectedValue, setUnitySelectedValue] = useState<string>("");

  const handleChangeInputContractValue = (value: string) => {
    setContractValue(value);
  };

  const handleChangeInputUnitySelectedValue = (value: string) => {
    setUnitySelectedValue(value);
  };

  const unitOptions: IOptions = {
    id: 0,
    defaultValue: "UNIDADES",
    value: "UNIDADE 1",
  };

  return (
    <>
      <Header isAuthenticated />
      <Flexbox flexDirection="column">
        <Title>Cadastrar uma Ocorrencia</Title>

        <Input 
          label="Contrato"
          type="number"
          placeholder="Informe o numero do contrato"
          required
          fullWidth
          value={contractValue}
          onChange={(event) => handleChangeInputContractValue(event.target.value)}
        />

        <Dropdown 
          options={[unitOptions]}
        />

        <Input 
          label="Unidade"
          type="text"
          placeholder="Selecione a unidade"
          required
          fullWidth
          value={unitySelectedValue}
          onChange={(event) => handleChangeInputUnitySelectedValue(event.target.value)}
        />
      </Flexbox>
    </>
  );
};

export default memo(Ocurrences);