import React, { Fragment, useContext, useEffect } from "react";
import Checkbox from "../../components/Checkbox";
import CustomTable from "../../components/CustomTable";
import Dropdown, { IOptions } from "../../components/Dropdown";
import { Row } from "../../components/Dropdown/styles";
import Header from "../../components/Header";
import { UserContext } from "../../contexts/userContext";
import { columns, data, options } from "./tableData.mock";

const FollowUp: React.FC = () => {
  const unitOptions: IOptions = {
    defaultValue: "UNIDADES",
    value: "UNIDADE 1",
  };

  const clientOptions: IOptions = {
    defaultValue: "CLIENTES",
    value: "CLIENTE 1",
  };

  const { userData } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("@token", userData ? userData.token : "");
  }, []);

  return (
    <Fragment>
      <Header isAuthenticated />
      <Row>
        <Dropdown isTopSpacing={8} isLeftSpacing={6} options={[unitOptions]} />

        <Dropdown
          isTopSpacing={8}
          isLeftSpacing={2}
          options={[clientOptions]}
        />

        <Checkbox
          inputStyle={{
            marginLeft: "3rem",
            marginTop: "8rem",
            cursor: "pointer",
            height: "2rem",
          }}
          labelStyle={{
            marginLeft: "1rem",
            marginTop: "8rem",
            cursor: "pointer",
          }}
          label="Concluído"
        />
      </Row>

      <CustomTable
        title="FollowUp"
        columns={columns}
        data={data}
        options={options}
      />
    </Fragment>
  );
};

export default FollowUp;
