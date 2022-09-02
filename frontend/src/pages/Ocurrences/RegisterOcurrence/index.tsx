import React, { memo, useState } from "react";

import Header from "../../../components/Header";
import Flexbox from "../../../components/CssLayouts/Flexbox";
import Input from "../../../components/Form/Input";
import Dropdown, { IOptions } from "../../../components/Dropdown";

import { Title } from "./styles";
import Button from "../../../components/Button";

const RegisterOcurrence: React.FC = () => {
  const [contractValue, setContractValue] = useState<string>("");
  const [unitySelectedValue, setUnitySelectedValue] = useState<string>("");
  const [addressInputValue, setAddressInputValue] = useState<string>("");
  const [ownerInputValue, setOwnerInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeInputContractValue = (value: string) => {
    setContractValue(value);
  };

  const handleChangeInputUnitySelectedValue = (value: string) => {
    setUnitySelectedValue(value);
  };

  const handleChangeInputAddressValue = (value: string) => {
    setAddressInputValue(value);
  };

  const handleChangeInputOwnerValue = (value: string) => {
    setOwnerInputValue(value);
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
          label=""
          type="number"
          placeholder="Informe o numero do contrato"
          required
          fullWidth
          value={contractValue}
          onChange={(event) => handleChangeInputContractValue(event.target.value)}
        />

        <Dropdown
          isTopSpacing={3}
          fullWidth
          customBorderColor="transparent"
          options={[unitOptions]}
        />

        <Input
          label=""
          type="text"
          placeholder="Informe o endereco"
          required
          fullWidth
          value={addressInputValue}
          onChange={(event) => handleChangeInputAddressValue(event.target.value)}
        />

        <Input
          label=""
          type="text"
          placeholder="Informe o proprietario"
          required
          fullWidth
          value={ownerInputValue}
          onChange={(event) => handleChangeInputOwnerValue(event.target.value)}
        />

        <Button
          text="Cadastrar ocorrencia"
          isLoading={isLoading}
          onClick={() => {}}
        />
      </Flexbox>
    </>
  );
};

export default memo(RegisterOcurrence);